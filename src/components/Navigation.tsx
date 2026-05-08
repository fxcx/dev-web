'use client'
import { NavLinks } from '@/types/navegations'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Transition from './Transition'

export interface HandleNavigationChangeProps {
  prevPath: string
  path: string
  setIsRouting: Dispatch<SetStateAction<boolean>>
  setPrevPath: Dispatch<SetStateAction<string>>
}

export const handleNavigationChange = ({
  prevPath,
  path,
  setIsRouting,
  setPrevPath
}: HandleNavigationChangeProps): (() => void) | undefined => {
  if (prevPath !== path) {
    setIsRouting(true)
    const timeout = setTimeout(() => {
      setIsRouting(false)
      setPrevPath(path)
    }, 1200)

    return () => clearTimeout(timeout)
  }
}

const Navigation = (): JSX.Element => {
  const [isRouting, setIsRouting] = useState(false)
  const path = usePathname()
  const [prevPath, setPrevPath] = useState('/')

  useEffect(() => {
    const cleanup = handleNavigationChange({ prevPath, path, setIsRouting, setPrevPath })
    return cleanup
  }, [path, prevPath])
  return (
    <div
      className='fixed z-[50] bottom-4 left-1/2 -translate-x-1/2 w-[50%] md:w-[50%] max-h-[80px] rounded-full flex justify-center items-center border bg-black/80 backdrop-blur-sm border-white/30 p-3'
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link}>
          <div className='min-w-[20%] flex justify-center'>
            <nav.icon
              className={`w-[34px] h-[34px] p-1 mr-2 ml-2 ${
                path === nav.link ? 'text-purple-800' : 'text-white'
              }`}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Navigation

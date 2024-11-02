'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomeView (): JSX.Element {
  return (
    <main className='w-screen h-screen'>
      <div
        className='flex items-center w-full h-full bg-cover bg-center'
        style={{ backgroundImage: 'url(/main-bg.webp)' }}
      >
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[50px] text-white font-semibold'>
            web.
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {' '}
              Development
            </span>
          </h1>
          <p className='text-gray-200 md:block p-2'>
            The only limit to our realization tomorrow will be our doubts today.
          </p>
          <div className='flex justify-items-center md:flex-row md:flex gap-3'>
            <Link
              href='/my-skills'
              className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'
            >
              Habilidades
            </Link>
            <Link
              href='/projects'
              className='rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]'
            >
              <div className='absolute rounded-[20px]  bg-white inset-0 opacity-0 group-hver:opacity-20' />
              Proyectos
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute  bottom-0 right-0 z-[1] md:z-[10]'>
        <Image src='/cliff.webp' alt='cliff' width={480} height={480} />
      </div>

      <div className='absolute bottom-0 z-[5] w-full h-auto'>
        <Image
          src='/trees.webp'
          alt='trees'
          width={2000}
          height={2000}
          className='w-full h-full'
        />
      </div>

      <Image
        src='/stars.png'
        alt='stars'
        height={300}
        width={300}
        className='absolute top-0 left-0 z-[10]'
      />
    </main>
  )
}

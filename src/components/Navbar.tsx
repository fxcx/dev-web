import { socials as Socials } from '@/data/social'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = (): JSX.Element => {
  return (
    <div className='absolute top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between flex-block px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <Link href='/'>
          <h1 className='text-white text-[25px] font-semibold'>
            facundo -{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
              {' '}
              Burgos{' '}
            </span>
          </h1>
        </Link>
      </div>

      <div className='flex gap-4'>
        {Socials.map((social) => (
          <Link
            className='py-2 relative right-8'
            key={social.name}
            href={social.link}
          >
            <div className='py-4'>
              <Image
                src={social.src}
                alt={social.name}
                width={38}
                height={38}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar

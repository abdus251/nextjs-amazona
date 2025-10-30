import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Search from './search'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1'
            >
              <Image src='/globe.svg' alt='Logo' width={40} height={40} />
              <h1 className='hover:text-primary transition-colors'>
                {APP_NAME}
              </h1>
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='flex items-center px-4   gap-3  mb-[1px] bg-gray-800 overflow-x-auto'>
        <Button
          variant='ghost'
          className='header-button flex items-center px-3 gap-2 text-base text-white [&_svg]:size-6 hover:bg-gray-700 hover:text-primary transition-colors '
        >
          <MenuIcon />
          All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenu.map((menu) => (
            <Link
              href={menu.link}
              key={menu.link}
              className='hover:text-primary transition-colors header-button  !p-2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

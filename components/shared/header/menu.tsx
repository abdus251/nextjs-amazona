import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <nav className='flex items-center gap-4'>
      {/* Sign In */}
      <Link
        href='/signin'
        className=' items-center gap-2 hover:text-primary transition-colors'
      >
        <UserIcon className='w-6 h-6' />
        <span className='font-semibold'>Sign in</span>
      </Link>

      {/* Cart */}
      <Link
        href='/cart'
        className=' items-center gap-2 hover:text-primary transition-colors'
      >
        <ShoppingCartIcon className='w-6 h-6' />
        <span className='font-semibold'>Cart</span>
      </Link>
    </nav>
  )
}

import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'

const categories = ['men', 'women', 'kids', 'accessories']

export default function Search() {
  return (
    <form
      action='/search'
      method='GET'
      className='flex w-full max-w-2xl items-stretch h-10 bg-background border border-input rounded-md overflow-hidden'
    >
      {/* Category Dropdown */}
      <Select name='category'>
        <SelectTrigger className='w-28 border-none focus:ring-0 focus:outline-none'>
          <SelectValue placeholder='All' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>All</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        className='flex-1 border-none bg-gray-100 dark:bg-gray-900 text-base focus-visible:ring-0'
        placeholder={`Search ${APP_NAME}...`}
        name='q'
        type='search'
      />

      {/* Search Button */}
      <button
        type='submit'
        aria-label='Search'
        className='bg-primary text-primary-foreground px-4 flex items-center justify-center hover:opacity-90 transition'
      >
        <SearchIcon className='w-5 h-5' />
      </button>
    </form>
  )
}

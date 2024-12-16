import { Button } from '@/components/ui/button'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const {user}:any = useKindeBrowserClient()
  return (
    <div className='flex justify-end w-full items-center gap-2'>
        <div className='flex gap-2 items-center border rounded-md p-1'>
            <Search className='w-4 h-4'/>
            <input type="text" placeholder='Search' className='border-none outline-none'/>
        </div>
        <div>
            <Image src={user?.picture} alt='user' width={30} height={30} className='rounded-full'/>
        </div>
        <Button size={'sm'}  className=' flex gap-2 bg-blue-700 hover:bg-blue-800'><Send/> Invite</Button>
    </div>
  )
}

export default Header
import React from 'react'
import { X } from 'lucide-react'
function MenuCard(props) {
  return (
    <div className='w-full h-full px-8 py-8 bg-red-700 text-white'>
        <X onClick={()=> props.setIsOpen(perv => !perv)}  className='absolute top-3 right-3'  color='white' size={30}/>
       
        <div className='text-4xl font-semibold flex flex-col gap-6'>
            <h1>Menu</h1>
            <hr />
        </div>
       
        <div className='mt-6 text-2xl'>
            <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>where to find</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default MenuCard
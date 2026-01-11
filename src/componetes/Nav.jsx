import React, { useState } from 'react'
import {Phone,BellDot,Menu, Blocks} from 'lucide-react'
import Nav2 from './Nav2'


function Nav() {
     const [isOpen, setisOpen] = useState(false)
     function handleMenu(){
       setisOpen(perv => !perv)
    };


  return (
    <div className='px-5 py-3.5 relative'>
      <div className= {`w-full h-full px-6  absolute ${isOpen ? 'translate-x-0' : 'translate-x-full'} transform duration-200 ease-in sm:translate-x-0 flex  justify-end  `}>
        <Nav2 setisOpen={setisOpen}  />
      </div>
      <div className= {` ${isOpen ? ' hidden' : 'flex'}  justify-end items-center sm:hidden `}>
         <ul className=' flex  gap-5'>
            <li><Phone color='white' size={20} /></li>
            <li><BellDot color='white' size={20}  /></li>
            <li onClick={() => handleMenu()}><Menu  color='white' size={20} style={{pointerEvents:'none'}} /></li>
         </ul>
      </div>
    </div>
  )
}

export default Nav
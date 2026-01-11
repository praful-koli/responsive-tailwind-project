import React, {  useState } from "react";
import {Menu} from 'lucide-react'
import MenuCard from "./MenuCard";
function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    function handleMenu() {
        setIsOpen(perv => !perv)
    }
  return (
    <div>
       
      <div className="p-4 sm:px-13 sm:py-5 bg-[#d22715] text-white">
        <div className=" flex justify-between">
          <h1 className="text-white font-bold text-lg sm:text-2xl">
            Straw<span className=" font-normal ">Berries</span>
          </h1>
           <ul className=" hidden sm:flex gap-12 text-lg ">
             <li>Home</li>
             <li>Where to find</li>
             <li>Contact</li>
           </ul>
            <div className="menu sm:hidden">
                 <Menu color="white" onClick={handleMenu} />
            </div>

        </div>
      </div>
       <div className={`absolute top-0 left-0 w-full h-full transition-all duration-300  ${isOpen ? 'translate-x-0    ' : 'translate-x-full'}` }>
          <MenuCard setIsOpen={setIsOpen} />
       </div>
    </div>
    
  );
}

export default Nav;

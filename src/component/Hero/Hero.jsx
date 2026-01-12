import React from 'react'
import Nav from '../NavBar/Nav'
import image from '../../assets/strawberry.png'
function Hero() {
  return (
    <div className=' relative w-full  bg-[#d22715] text-white sm:h-screen '>
        <Nav />
        <div className="flex flex-col justify-center items-center    mt-10 py-8 sm:px-20 sm:mt-0 sm:py-0 sm:flex-row sm:gap-30 ">

           <div className="textBox flex flex-col px-8 items-start gap-5  sm:w-90">
            <h1 className='text-lg sm:text-2xl '>01__________</h1>
             <h1 className='text-lg sm:text-2xl '>A  HELTHY <br /> FRUIT</h1>
             <p className='text-[13px] sm:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae neque incidunt ab modi amet, aliquid numquam Lorem ipsum dolor sit amet  quod aspernatur amet cumque labore a dicta quibusdam.</p>
             <button className='active:scale-97 outline-none border-2 px-4 py-1.5 rounded-md text-md font-semibold'>Shop Now</button>
           </div>
   
           
           <div className="w-full flex text-center justify-center">
            <img width={"60%"} src={image} alt="image" />
           </div>
            <h1 className='text-6xl sm:text-9xl'>BERRIES</h1>
         </div>
    
    
    </div>
  )
}

export default Hero
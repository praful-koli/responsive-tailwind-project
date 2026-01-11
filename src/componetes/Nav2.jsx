
import { X } from "lucide-react";


function Nav2(porps) { 
   function handleClick() {
     porps.setisOpen(prve => !prve)
   }
  return (
    <div className=" w-full h-full">
        <X onClick={()=> handleClick()} color="white" size={35} className="absolute top-0 right-7 sm:hidden" />
      <div className="text-white flex flex-col p-2 gap-5   w-full   h-full mt-12 sm:mt-0 sm:items-end ">
        <h1 className="text-4xl sm:hidden"> Menu</h1>
        <ul className="text-2xl flex flex-col gap-3.5 sm:flex-row">
          <li>Home</li> 
          <li>Courses</li>
          <li>Bootcamps</li>
          <li>Request Callback</li>
          <li>Classroom</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav2;

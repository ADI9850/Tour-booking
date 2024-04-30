import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousal";


const Navbar = () => {
  return (
    <>
    
      <nav className=" flex  justify-around bg-gray-800    h-18   lg:sticky top-0 z-50 ">
     
        <div className="px-4 mt-2">
          
         <h1 className="text-4xl font-extrabold text-orange-500 ">TOURS</h1>
        </div>
        <div className="max-w-screen-xl px-6 py-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ul className="flex flex-row font-bold mt-0 space-x-6 rtl:space-x-reverse text-lg text-white  ">
     <li className="hover:text-orange-500"> <Link to="/">Home</Link></li>
     <li className="hover:text-orange-500"> <Link to="/camping">Camping</Link></li>
     <li className="hover:text-orange-500"> <Link to="/about">About us</Link></li>
     
      <li className="hover:text-orange-500"><Link to="/contact">contact</Link></li>
  
    <div className="icons">
      <div id="menu-btn" className="fas fa-bars hover:text-orange-500">
        menu
      </div>
      <div id="search-btn" className="fas fa-search"></div>
    </div>
  
              </ul>
              
            </div>
          </div>
 
        </div>
      </nav>
  
  
    </>
  );
};

export default Navbar;

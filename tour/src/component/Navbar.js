import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousal";


const Navbar = () => {
  return (
    <>
    
      <nav className=" flex  justify-around bg-gray-200  rounded-3xl mb-2 h-18   lg:sticky top-0 z-50 ">
     
        <div className="px-4 mt-5">
          
         <h1 className="text-4xl font-extrabold text-red-500">TOURS</h1>
        </div>
        <div className="max-w-screen-xl px-6 py-4 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ul className="flex flex-row font-bold mt-0 space-x-6 rtl:space-x-reverse text-lg text-blue-500 ">
     <li> <Link to="/">Home</Link></li>
     <li> <Link to="/camping">Camping</Link></li>
     <li> <Link to="/adventures">About us</Link></li>
     
      <li><Link to="/contact">contact</Link></li>
  
    <div className="icons">
      <div id="menu-btn" className="fas fa-bars">
        menu
      </div>
      <div id="search-btn" className="fas fa-search"></div>
    </div>
  
              </ul>
              
            </div>
          </div>
 
        </div>
      </nav>
  
    <Carousel/>
    </>
  );
};

export default Navbar;

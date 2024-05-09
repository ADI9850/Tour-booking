import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-around items-center bg-gray-800 h-18 lg:sticky top-0 z-50 p-2">
      <div className="px-4 mt-2">
        <h1 className="text-4xl font-extrabold text-orange-500">TOURS</h1>
      </div>
      <div
        className="lg:hidden px-4 mt-2 cursor-pointer text-white font-bold"
        onClick={toggleMenu}
      >
        Menu
      </div>

      <ul
        className={`lg:flex lg:flex-row lg:space-x-6 lg:font-bold lg:mt-0 lg:text-lg lg:text-white lg:items-center lg:pr-6 ${
          isMenuOpen
            ? "flex flex-col space-y-2 bg-gray-800 text-white font-bold absolute top-14 left-60 w-1/2 p-4 z-50"
            : "hidden"
        }`}
      >
        <li className="hover:text-orange-500">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 bg-gray-700 rounded"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 bg-gray-700 rounded"
          >
            About us
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2 px-4 bg-gray-700 rounded"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

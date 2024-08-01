import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-10 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img src="/favicon.ico" alt="Logo" className="h-8 w-8 mr-2" />
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-400 transition duration-300">Pokemon App</Link>
      </div>
      <div className="flex justify-items-end px-3">
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-400 transition duration-300 mx-3">Pokemon List</Link>
        <Link to="/my-pokemon-list" className="text-white text-xl font-bold hover:text-gray-400 transition duration-300  mx-3">My List</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header: React.FC = () => {

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent"
      aria-hidden={false}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Jallery</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className='bg-red px-4 py-3 hover:bg-white transition duration-800 hover:cursor-pointer'>
                Home
            </Link>
            {/* <div className='bg-gray-100 rounded-full px-4 py-3 text-gray-700 hover:text-primary transition hover:cursor-pointer'>
                <Link to="/search">
                    Search
                </Link>
            </div> */}
            <Link to="/artworks" className='bg-green px-4 py-3 hover:bg-white transition duration-800 hover:cursor-pointer rounded-full'>
                Artworks
            </Link>
            <Link to="/become-host"  className='bg-blue px-4 py-3 hover:bg-white transition duration-800 hover:cursor-pointer rounded-md'>
                Artists
            </Link>
          </nav>

          {/* User Menu */}
          {/* <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-red-600 transition">
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

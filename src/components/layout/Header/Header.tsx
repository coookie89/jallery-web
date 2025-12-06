import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Jallery</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-primary transition">
              Search
            </Link>
            <Link to="/become-host" className="text-gray-700 hover:text-primary transition">
              Become a Host
            </Link>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-red-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

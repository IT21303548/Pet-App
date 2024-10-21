// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">Monito</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/category" className="text-gray-700 hover:text-blue-500">Category</Link>
          <Link to="/product" className="text-gray-700 hover:text-blue-500">Product Details</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search something here..."
              className="px-4 py-2 border border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
          <Link to="/join-community">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Join the Community
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

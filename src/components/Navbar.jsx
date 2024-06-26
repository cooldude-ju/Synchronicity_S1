import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.jpg';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#001f3f] p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo or Game Title with rounded logo */}
        <div className="flex items-center">
          <img
            src={logo1}  // Replace with the URL of your logo image
            alt="Logo"
            className="rounded-full w-10 h-10 mr-2"
          />
          <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text font-[15px] font-bold text-transparent  text-transparent' >
        Code Defender
      </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-4">
          <Link to='/'>
            <a>Home</a>
          </Link>
          <Link to='/about'>
            <a>About</a>
          </Link>
          <Link to='/game'>
            <a>Play Now</a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl text-gray-600" />
            ) : (
              <FaBars className="text-3xl text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gray-800 p-4">
            <Link to='/'>
              <a>Home</a>
            </Link>
            <Link to='/about'>
              <a>About</a>
            </Link>
            <Link to='/game'>
              <a>Play Now</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

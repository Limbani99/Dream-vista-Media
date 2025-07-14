
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/09cc0c0d-5c48-4e6d-992a-0364d61e5825.png" 
              alt="Dream Vista Media Logo" 
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dream Vista Media
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/packages" 
              className={`transition-colors ${isActive('/packages') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Packages
            </Link>
            <Link 
              to="/work" 
              className={`transition-colors ${isActive('/work') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
            Projects
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/about') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/services') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Services
              </Link>
              <Link 
                to="/packages" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/packages') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Packages
              </Link>
              <Link 
                to="/work" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/work') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Our Work
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`transition-colors text-left ${isActive('/contact') ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'}`}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

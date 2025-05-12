import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white md:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-xl font-bold">NORDIC</h1>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-primary">Home</a>
            <a href="#" className="font-medium hover:text-primary">Shop</a>
            <a href="#" className="font-medium hover:text-primary">Collections</a>
            <a href="#" className="font-medium hover:text-primary">About</a>
            <a href="#" className="font-medium hover:text-primary">Contact</a>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-2 hover:text-primary">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="p-2 hover:text-primary">
              <User size={20} />
            </button>
            <button aria-label="Cart" className="p-2 hover:text-primary relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a href="#" className="py-2 font-medium">Home</a>
            <a href="#" className="py-2 font-medium">Shop</a>
            <a href="#" className="py-2 font-medium">Collections</a>
            <a href="#" className="py-2 font-medium">About</a>
            <a href="#" className="py-2 font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
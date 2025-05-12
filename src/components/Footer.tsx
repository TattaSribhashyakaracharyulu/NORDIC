import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Bestsellers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Collections</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sale</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Accessories</a></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sustainability</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Size Guide</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
              />
              <button 
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors text-sm"
              >
                <Mail size={16} />
              </button>
            </div>
            
            {/* Social */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-600">&copy; 2025 NORDIC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <img src="https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://assets.stickpng.com/images/58482366cef1014c0b5e49c3.png" alt="Mastercard" className="h-6 w-auto" />
            <img src="https://assets.stickpng.com/images/5848232acef1014c0b5e49c7.png" alt="PayPal" className="h-6 w-auto" />
            <img src="https://assets.stickpng.com/images/60e7f9338b5aa5000484f5fb.png" alt="Apple Pay" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
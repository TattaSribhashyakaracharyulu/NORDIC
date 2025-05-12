import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';

const ProductTabs: React.FC = () => {
  const { product } = useProduct();
  const [activeTab, setActiveTab] = useState('description');
  
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Product Information' },
    { id: 'shipping', label: 'Shipping Details' }
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="py-6">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <h3>Product Description</h3>
            <p>
              {product.description}
            </p>
            <p>
              Our Nordic-inspired design combines functionality with aesthetic appeal, 
              creating pieces that complement any modern home.
            </p>
            <h4>Features</h4>
            <ul>
              <li>Premium quality materials ensure durability and longevity</li>
              <li>Versatile design that complements various interior styles</li>
              <li>Handcrafted with attention to detail</li>
              <li>Easy maintenance and cleaning</li>
            </ul>
          </div>
        )}
        
        {activeTab === 'details' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Product Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Material</h4>
                <p className="mt-1 text-sm text-gray-500">
                  {product.details.material}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">Dimensions</h4>
                <p className="mt-1 text-sm text-gray-500">
                  {product.details.dimensions}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">Care Instructions</h4>
                <p className="mt-1 text-sm text-gray-500">
                  {product.details.careInstructions}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900">Origin</h4>
                <p className="mt-1 text-sm text-gray-500">
                  {product.details.origin}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Sustainability</h4>
              <p className="mt-1 text-sm text-gray-500">
                We're committed to sustainable practices in all our manufacturing processes. 
                This product is made with responsibly sourced materials and produced in 
                facilities that prioritize environmental conservation.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Shipping & Returns</h3>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Shipping</h4>
              <ul className="mt-2 text-sm text-gray-500 space-y-2">
                <li>Free standard shipping on orders over $100</li>
                <li>Standard shipping (3-7 business days): $5.99</li>
                <li>Express shipping (1-3 business days): $12.99</li>
                <li>Next-day delivery (order before 2pm): $19.99</li>
                <li>International shipping available to select countries</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Returns & Exchanges</h4>
              <ul className="mt-2 text-sm text-gray-500 space-y-2">
                <li>30-day return policy for unworn and unused items</li>
                <li>Free returns for orders within the US</li>
                <li>Exchanges are processed within 5-7 business days</li>
                <li>Items marked as final sale cannot be returned or exchanged</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900">Order Processing</h4>
              <p className="mt-1 text-sm text-gray-500">
                Orders are typically processed within 1-2 business days. 
                You will receive a confirmation email with tracking information 
                once your order has been shipped.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
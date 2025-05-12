import React from 'react';
import { useProduct } from '../context/ProductContext';
import { Check } from 'lucide-react';

const ProductBundle: React.FC = () => {
  const { product, bundleProducts } = useProduct();
  
  // Calculate total price and savings
  const bundleTotal = bundleProducts.reduce((total, item) => total + item.price, product.price);
  const bundleDiscount = bundleTotal * 0.15; // 15% discount
  const discountedTotal = bundleTotal - bundleDiscount;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-medium">Bundle and Save 15%</h3>
        <p className="text-sm text-gray-600">Purchase these items together and save</p>
      </div>
      
      <div className="p-4">
        <div className="space-y-4">
          {/* Main product */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <p className="text-xs text-gray-500">Size: {product.sizes[2]}, Color: {product.colors[0].name}</p>
                </div>
                <p className="font-medium">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          {/* Bundle products */}
          {bundleProducts.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.variant}</p>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Price summary */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span>Total separate price:</span>
            <span>${bundleTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600 font-medium mt-1">
            <span>Bundle discount:</span>
            <span>-${bundleDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Bundle price:</span>
            <span>${discountedTotal.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Bundle features */}
        <div className="mt-4 space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <Check size={16} className="text-green-500 mr-1" />
            <span>Free shipping on this bundle</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Check size={16} className="text-green-500 mr-1" />
            <span>30-day money back guarantee</span>
          </div>
        </div>
        
        {/* Add bundle button */}
        <button className="w-full bg-primary text-white mt-4 py-3 rounded-md hover:bg-primary/90 transition-colors">
          Add Bundle to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductBundle;
import React from 'react';
import { useProduct } from '../context/ProductContext';

const RelatedProducts: React.FC = () => {
  const { relatedProducts } = useProduct();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {relatedProducts.map((product) => (
        <div key={product.id} className="group">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            {product.badge && (
              <div className="absolute top-2 left-2 z-10 bg-primary text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </div>
            )}
            
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
            />
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity h-1/3"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-full bg-white text-gray-900 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Quick View
              </button>
            </div>
          </div>
          
          <div className="mt-3">
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="font-medium">${product.price.toFixed(2)}</p>
              
              {/* Color options */}
              <div className="flex space-x-1">
                {product.colors.map((color, index) => (
                  <div 
                    key={index}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                    title={`Color option ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
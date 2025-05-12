import React, { useRef } from 'react';
import { useProduct } from '../context/ProductContext';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const PairWellWith: React.FC = () => {
  const { complementaryProducts } = useProduct();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 300; // Adjust as needed
    const currentScroll = scrollRef.current.scrollLeft;
    
    scrollRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      <button 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hidden md:block"
        onClick={() => handleScroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 pl-0 md:pl-10 pr-0 md:pr-10"
      >
        {complementaryProducts.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-64 group"
          >
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-w-1 aspect-h-1 w-full">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button 
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label={`Quick add ${product.name}`}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-3">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="font-medium">${product.price.toFixed(2)}</p>
                <button className="text-xs text-primary font-medium hover:underline">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hidden md:block"
        onClick={() => handleScroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default PairWellWith;
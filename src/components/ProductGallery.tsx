import React, { useState, useRef } from 'react';
import { useProduct } from '../context/ProductContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const { product, selectedColor } = useProduct();
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  
  // Filter images for selected color
  const images = product.colors.find(c => c.name === selectedColor)?.images || product.images;

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!thumbsRef.current) return;
    
    const scrollAmount = 100; // Adjust as needed
    const currentScroll = thumbsRef.current.scrollLeft;
    
    thumbsRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  // Function to handle zoom effect
  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = e.currentTarget.querySelector('img');
    if (!image) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    image.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleZoomLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = e.currentTarget.querySelector('img');
    if (!image) return;
    image.style.transformOrigin = 'center center';
  };

  return (
    <div className="space-y-4">
      {/* Main image with zoom effect */}
      <div 
        className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-100 rounded-lg"
        onMouseMove={handleZoom}
        onMouseLeave={handleZoomLeave}
      >
        <img 
          src={images[activeIndex]} 
          alt={`Product view ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-150"
        />
      </div>
      
      {/* Thumbnails navigation */}
      <div className="relative">
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
        
        <div 
          ref={thumbsRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide py-2 relative pl-8 pr-8"
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-16 h-16 cursor-pointer rounded overflow-hidden border-2 ${
                activeIndex === index ? 'border-primary' : 'border-transparent'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useProduct } from '../context/ProductContext';

interface ColorComparisonProps {
  onClose: () => void;
}

const ColorComparison: React.FC<ColorComparisonProps> = ({ onClose }) => {
  const { product } = useProduct();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle ESC key press
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    // Handle click outside modal
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscPress);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscPress);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const toggleColorSelection = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else {
      if (selectedColors.length < 3) {
        setSelectedColors([...selectedColors, colorName]);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-auto"
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-semibold">Compare Colors</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close color comparison"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Select up to 3 colors to compare side by side
          </p>
          
          {/* Color selection */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {product.colors.map((color) => (
              <div 
                key={color.name}
                className={`flex flex-col items-center p-2 rounded-md cursor-pointer transition-colors ${
                  selectedColors.includes(color.name) ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleColorSelection(color.name)}
              >
                <div 
                  className="w-10 h-10 rounded-full mb-1"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-center">{color.name}</span>
              </div>
            ))}
          </div>
          
          {/* Selected colors comparison */}
          {selectedColors.length > 0 && (
            <div className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-3 divide-x">
                {selectedColors.map((colorName) => {
                  const colorObj = product.colors.find(c => c.name === colorName);
                  if (!colorObj) return null;
                  
                  return (
                    <div key={colorName} className="p-3">
                      <div className="aspect-w-1 aspect-h-1 w-full mb-2 overflow-hidden rounded-md">
                        <img 
                          src={colorObj.images[0]} 
                          alt={`${product.name} in ${colorName}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: colorObj.hex }}
                        />
                        <span className="text-sm font-medium">{colorName}</span>
                      </div>
                    </div>
                  );
                })}
                
                {/* Empty placeholders */}
                {Array.from({ length: 3 - selectedColors.length }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="p-3 bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Select a color</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorComparison;
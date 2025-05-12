import React, { useState } from 'react';
import { useProduct } from '../context/ProductContext';
import SizeChart from './SizeChart';
import ColorComparison from './ColorComparison';
import { Heart, Share2 } from 'lucide-react';

const ProductInfo: React.FC = () => {
  const { 
    product, 
    selectedColor, 
    selectedSize, 
    setSelectedColor, 
    setSelectedSize 
  } = useProduct();
  
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isColorComparisonOpen, setIsColorComparisonOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const handleAddToCart = () => {
    alert(`Added to cart: ${product.name} - ${selectedColor} - ${selectedSize} - Quantity: ${quantity}`);
    // In a real app, this would add the product to the cart
  };

  return (
    <div className="space-y-6">
      {/* Product title and price */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <div className="flex items-baseline mt-2 space-x-2">
          <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
          {product.compareAtPrice && (
            <p className="text-lg text-gray-500 line-through">
              ${product.compareAtPrice.toFixed(2)}
            </p>
          )}
        </div>
        
        {/* Ratings */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {'★★★★☆'}
          </div>
          <p className="ml-2 text-sm text-gray-600">43 reviews</p>
        </div>
      </div>
      
      {/* Color options */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Color: {selectedColor}</h2>
          <button 
            className="text-sm text-primary hover:underline"
            onClick={() => setIsColorComparisonOpen(true)}
          >
            Compare Colors
          </button>
        </div>
        
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <div 
              key={color.name}
              className={`relative rounded-full w-8 h-8 cursor-pointer ${
                selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-900' : ''
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
            />
          ))}
        </div>
      </div>
      
      {/* Size options */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Size: {selectedSize}</h2>
          <button 
            className="text-sm text-primary hover:underline"
            onClick={() => setIsSizeChartOpen(true)}
          >
            Size Chart
          </button>
        </div>
        
        <div className="grid grid-cols-5 gap-2 mt-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`py-2 px-3 text-sm font-medium rounded-md ${
                selectedSize === size
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      {/* Quantity and add to cart */}
      <div className="flex items-end space-x-4">
        <div className="w-1/3">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        
        <button
          className="flex-1 bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        
        <button
          className="p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={20} />
        </button>
        
        <button
          className="p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Share product"
        >
          <Share2 size={20} />
        </button>
      </div>
      
      {/* Product description preview */}
      <div className="prose prose-sm max-w-none">
        <p>{product.shortDescription}</p>
      </div>
      
      {/* Free shipping notice */}
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-sm">
          <span className="font-semibold">Free shipping</span> on orders over $100
        </p>
      </div>
      
      {/* Size chart modal */}
      {isSizeChartOpen && (
        <SizeChart onClose={() => setIsSizeChartOpen(false)} />
      )}
      
      {/* Color comparison modal */}
      {isColorComparisonOpen && (
        <ColorComparison onClose={() => setIsColorComparisonOpen(false)} />
      )}
    </div>
  );
};

export default ProductInfo;
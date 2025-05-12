import React, { createContext, useContext, useState, ReactNode } from 'react';
import { productData } from '../data/productData';

// Types
type Color = {
  name: string;
  hex: string;
  images: string[];
};

type ProductDetails = {
  material: string;
  dimensions: string;
  careInstructions: string;
  origin: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  colors: Color[];
  sizes: string[];
  details: ProductDetails;
};

type ComplementaryProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type BundleProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  variant: string;
};

type RelatedProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  colors: string[];
};

type ProductContextType = {
  product: Product;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  complementaryProducts: ComplementaryProduct[];
  bundleProducts: BundleProduct[];
  relatedProducts: RelatedProduct[];
};

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const product = productData.product;
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  // Retrieve saved preferences from localStorage on mount
  React.useEffect(() => {
    try {
      const savedColor = localStorage.getItem('selectedColor');
      const savedSize = localStorage.getItem('selectedSize');
      
      if (savedColor && product.colors.some(c => c.name === savedColor)) {
        setSelectedColor(savedColor);
      }
      
      if (savedSize && product.sizes.includes(savedSize)) {
        setSelectedSize(savedSize);
      }
    } catch (error) {
      // Ignore localStorage errors
    }
  }, [product.colors, product.sizes]);

  // Save preferences to localStorage when they change
  React.useEffect(() => {
    try {
      localStorage.setItem('selectedColor', selectedColor);
      localStorage.setItem('selectedSize', selectedSize);
    } catch (error) {
      // Ignore localStorage errors
    }
  }, [selectedColor, selectedSize]);

  const value = {
    product,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    complementaryProducts: productData.complementaryProducts,
    bundleProducts: productData.bundleProducts,
    relatedProducts: productData.relatedProducts,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

// Hook for using the product context
export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
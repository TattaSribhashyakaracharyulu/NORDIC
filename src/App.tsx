import React from 'react';
import ProductPage from './components/ProductPage';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProductProvider>
        <ProductPage />
      </ProductProvider>
    </div>
  );
}

export default App;
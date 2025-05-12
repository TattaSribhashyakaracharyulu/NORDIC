import React from 'react';
import Header from './Header';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import PairWellWith from './PairWellWith';
import ProductBundle from './ProductBundle';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import Footer from './Footer';

const ProductPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Product Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductGallery />
            <ProductInfo />
          </div>
        </section>

        {/* Pair Well With Section */}
        <section className="container mx-auto px-4 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-medium mb-6">Pair Well With</h2>
          <PairWellWith />
        </section>

        {/* Bundle Section */}
        <section className="container mx-auto px-4 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-medium mb-6">Complete the Look</h2>
          <ProductBundle />
        </section>

        {/* Product Tabs */}
        <section className="container mx-auto px-4 py-8 border-t border-gray-200">
          <ProductTabs />
        </section>

        {/* Related Products */}
        <section className="container mx-auto px-4 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-medium mb-6">You May Also Like</h2>
          <RelatedProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ categories, onQuickView, onViewProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');

 
  const filteredCategories = categories.map((category) => ({
    ...category,
    products: category.products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto mb-5">
     <div className=' bg-zinc-600 w-screen left-0 absolute -mt-9  p-2'>
      <div className="pl-10   ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-1 border border-gray-300 rounded w-1/2"
        />
      </div>
      </div>

      {filteredCategories.map((category) => (
        <div key={category.id} className="my-8">
          
          <div className="flex flex-wrap">
            {category.products.length > 0 ? (
              category.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onViewProduct={onViewProduct}
                />
              ))
            ) : (
              <p className="text-gray-500">No products found</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

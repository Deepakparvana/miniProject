import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import QuickViewModal from './QuickViewModal';
import axios from 'axios';

function Man() {
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then((res) => {
        console.log(res.data); 
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  const handleViewProduct = (product) => {
    alert(`View Product: ${product.name}`);
  };

  return (
    <div className="App">
      <ProductList 
        categories={categories} 
        onQuickView={handleQuickView} 
        onViewProduct={handleViewProduct} 
      />
      {isQuickViewOpen && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseQuickView} />
      )}
    </div>
  );
}

export default Man;

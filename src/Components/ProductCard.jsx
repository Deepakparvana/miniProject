import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onQuickView }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div  
      className="mt-28 max-w-sm rounded overflow-hidden shadow-lg m-4 backdrop-blur-lg bg-white/30 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <img onClick={handleViewProduct}  className="w-full hover:scale-100 cursor-pointer" src={product.imageUrl} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
        <p className="text-gray-900 font-bold">
          ₹{typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {product.colors && product.colors.map((color, index) => (
          <span key={index} className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2">
            {color}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button 
          onClick={handleViewProduct} 
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
          View Product
        </button>
        <button 
          onClick={() => onQuickView(product)} 
          className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useContext } from 'react';
import { userContext } from './Functins';
import { useNavigate } from 'react-router-dom';





const QuickViewModal = ({ product, onClose  }) => {

  


  
  if (!product) return null;

  const navigate = useNavigate()
  const handleViewProduct = () => {
    navigate(`/product/${product.id}`);
  };

  


  // const {handleAddToCart } = useContext(userContext);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-red-500 font-bold">X</button>
        </div>
        <img onClick={handleViewProduct} className="w-full h-48 object-cover mt-4" src={product.imageUrl} alt={product.name} />
        <p className="mt-4">{product.description}</p>
        <p className="mt-2 font-bold text-lg">₹{product.price.toFixed(2)}</p>
        <div className="mt-4">
          {product.colors.map((color, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {color}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <button onClick={handleViewProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Product
          </button>
          <button  onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );

};

export default QuickViewModal;

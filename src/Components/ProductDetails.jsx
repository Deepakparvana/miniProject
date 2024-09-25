import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import checkout from './assest/checkout.png';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";



const ProductDetails = ({ onAddToCart, cartItems, setCartItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/categories');
        const categories = response.data;

       
        const allProducts = categories.flatMap((category) => category.products);
        const foundProduct = allProducts.find(
          (product) => product.id === parseInt(productId)
        
        );

        setProducts(allProducts);

        if (foundProduct) {
          setProduct(foundProduct);

       
          const similar = allProducts.filter(
            (item) =>
              item.category === foundProduct.category &&
              item.id !== foundProduct.id
          );
          setSimilarProducts(similar);
        } else {
          setError('Product not found!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product data!');
      }
    };

    fetchProducts();
    {console.log(product)}
  }, [productId]);

  const handleAddToCart = async () =>  {
    setIsLoading(true);

  
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
  
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCart);
    } else {
      
      await onAddToCart({ ...product, quantity });
    }

    setIsLoading(false);
    toast.success('Item added successfully!');
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleNavigation = (direction) => {
    const currentIndex = products.findIndex(
      (item) => item.id === parseInt(productId)
    );

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % products.length;
    } else {
      newIndex = (currentIndex - 1 + products.length) % products.length;
    }

    const newProductId = products[newIndex].id;
    navigate(`/product/${newProductId}`);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
   <div  className='bg-zinc-400'>

    <div className="container mx-auto my-8 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-zinc-300 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/5 p-4 overflow-hidden">
            <img
              className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>

          <div className="md:w-3/5 p-4 md:p-6">
          
          <div className="ml-60 flex space-x-1 mt-1 mb-5">
 
  <button
    className="w-14 bg-zinc-400 hover:bg-zinc-800 text-cyan-300 font-bold  py-2 px-4 rounded"
    onClick={() => handleNavigation('prev')}
  >
    <GrCaretPrevious />
  </button>
  <button
    className="w-14 bg-zinc-400 hover:bg-zinc-800 text-cyan-300 font-bold py-2 px-4 rounded  "
    onClick={() => handleNavigation('next')}
  >
    <GrCaretNext />
  </button>
</div>

            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold text-lg mb-4">
              ₹{typeof product.price === 'number' ? product.price.toFixed(2) : 'Price not available'}
            </p>

            <div className="mb-4">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="inline-block bg-zinc-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <button
                className={`bg-cyan-500 hover:bg-cyan-800 text-zinc-100 font-bold py-2 px-4 rounded flex items-center justify-center ${
                  isLoading ? 'cursor-not-allowed' : ''
                }`}
                onClick={handleAddToCart}
                disabled={isLoading}
              >
                {isLoading ? <div className="loader"></div> : 'Add to Cart'}
              </button>
              <Toaster />
            </div>

            <div className="flex items-center space-x-2">
              <button
                className="bg-zinc-400 hover:bg-zinc-300 text-gray-700 font-bold py-2 px-4 rounded-l"
                onClick={handleDecrement}
              >
                -
              </button>
              <p className="text-xl font-semibold bg-zinc-400 py-2 px-4 rounded-r">
                {quantity}
              </p>
              <button
                className="bg-zinc-400 hover:bg-zinc-300 text-gray-700 font-bold py-2 px-4 rounded-r"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>

            <p className="mt-1 border-t-2 border-gray-300 pt-4 text-base font-semibold">
              <span className="text-sm text-gray-500">Category:</span>{' '}
              {product.category}
            </p>

            
            
            <div className="-mt-3 ml-10">
              <img src={checkout} alt="Checkout" className="h-40 w-72" />
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 md:p-6 bg-zinc-300 rounded-lg shadow-lg">
          <div className="flex mb-4">
            <h3
              className={`text-xl font-semibold text-gray-800 cursor-pointer mr-6 pb-2 ${
                activeTab === 'description' ? 'border-b-2 border-blue-500' : ''
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </h3>
            <h3
              className={`text-xl font-semibold text-gray-800 cursor-pointer pb-2 ${
                activeTab === 'reviews' ? 'border-b-2 border-blue-500' : ''
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </h3>
          </div>

          <div className="h-80 bg-white p-4 rounded-lg shadow-md">
            {activeTab === 'description' ? (
              <div>
                {product.about ? (
                  <p className="text-gray-700 leading-relaxed">
                    {product.about}
                  </p>
                ) : (
                  <p className="text-gray-500 italic">
                    No additional information available.
                  </p>
                )}
              </div>
            ) : (
              <div>
                {product.reviews && product.reviews.length > 0 ? (
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li
                        key={index}
                        className="mb-2 text-gray-700 leading-relaxed"
                      >
                        {review}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No reviews available.</p>
                )}
              </div>
            )}
          </div>

     
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Similar Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarProducts.map((similarProduct) => (
                <div
                  key={similarProduct.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105"
                >
                  <img
                    src={similarProduct.imageUrl}
                    alt={similarProduct.name}
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {similarProduct.name}
                  </h4>
                  <p className="text-gray-700 mb-2">
                  ₹{typeof similarProduct.price === 'number' 
      ? similarProduct.price.toFixed(2) 
      : 'Price not available'}
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      onAddToCart({ ...similarProduct, quantity: 1 })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default ProductDetails;

import React from 'react';
import cartbg from './assest/cartbg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Checkout from './Checkout';



const Cart = ({ cartItems, setCartItems }) => {

  const id = localStorage.getItem('id');

   const navi=  useNavigate()
   const coNavi = useNavigate()

  
   const handleRemoveFromCart = (itemId) => {
    // Remove the item from local state
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);

    // Update the cart on the server
    axios
      .patch(`http://localhost:8000/users/${id}`, { cart: updatedCartItems })
      .then(() => {
        toast.success('Product removed from cart');
      })
      .catch((err) => {
        toast.error('Failed to remove product from cart', err.message);
      });
  };

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  console.log(totalPrice);
  
  const handleBackToShop = () => {
    
   navi('/collection')
    console.log('Back to Shop');
  };


   const HandleGoToChekOut = ()=>{
    coNavi('/Checkout')
   }



  return (
    <div
      style={{ backgroundImage: `url(${cartbg})` }}
      className="bg-cover bg-center min-h-screen flex items-center justify-center flex-col"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-400">Shopping Cart</h2>
      <div className="-mt-16 bg-white  bg-opacity-30 rounded-lg p-3 max-h-[30rem] overflow-y-auto shadow-lg w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-10/12 -inset-4">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <button
              className="mt-14 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors duration-300"
              onClick={handleBackToShop}
            >
              Back to Shop
            </button>
          </div>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center">
                  <img className="w-20 h-20 object-cover rounded" src={item.imageUrl} alt={item.name} />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-700">₹{item.price.toFixed(2)}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                    <div className="flex mt-2">
                      <button
                        className="bg-transparent text-cyan-500 border border-cyan-500 px-4 py-2 mr-2 rounded hover:bg-cyan-500 hover:text-zinc-700 transition-colors duration-300 h-9 flex items-center justify-center"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
  <div className="mt-4 p-4 bg-cyan-500 bg-opacity-30 rounded-lg shadow-md w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
    <h3 className="text-lg font-bold text-zinc-900">Total Price: ₹{totalPrice.toFixed(2)}</h3>
    <button
      className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors duration-300 w-full sm:w-auto"
      onClick={HandleGoToChekOut}
    >
      Proceed to Checkout
    </button>
  </div>
)}

    </div>
  );
};

export default Cart;

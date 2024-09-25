import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Checkout = ({ cartItems, setCartItems }) => {
  const id = localStorage.getItem('id');
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    const orderDetails = {
      cartItems,
      total: totalPrice,
      date: new Date().toLocaleDateString(),
    };

    axios
      .patch(`http://localhost:8000/users/${id}`, { orders: [...cartItems] })
      .then(() => {
        toast.success('Order placed successfully!');
        setCartItems([]); // Clear cart
        navigate('/home');
      })
      .catch((err) => toast.error('Failed to place order', err.message));
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" 
         style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <div className="bg-zinc-800 bg-opacity-70 p-8 rounded-lg shadow-lg max-w-3xl w-full text-white">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Checkout</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-cyan-200">Order Summary</h3>
          <ul className="mt-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-4 border-b border-zinc-600 pb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-cyan-500 pt-4">
          <h3 className="text-2xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h3>
        </div>

        <button
          className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600 w-full transition-colors duration-300 shadow-md"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const toggleCartDetails = (userId) => {
    setSelectedUser(selectedUser === userId ? null : userId);
  };

  const cancelOrder = (userId, orderId) => {
    axios.get(`http://localhost:8000/users/${userId}`)
      .then((response) => {
        const user = response.data;
        const updatedCart = user.cart.filter(order => order.id !== orderId);
        return axios.put(`http://localhost:8000/users/${userId}`, {
          ...user,
          cart: updatedCart,
        });
      })
      .then(() => {
        setUsers(users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              cart: user.cart.filter(order => order.id !== orderId),
            };
          }
          return user;
        }));
        console.log('Order canceled successfully');
      })
      .catch((error) => console.error('Error canceling order:', error));
  };

  return (
    <div className=" p-4 md:p-6 bg-cyan-950 bg-opacity-40 text-zinc-700 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Orders</h2>
      {users.map((user) => (
        <div key={user.id} className="mb-6 p-4 bg-zinc-300 rounded-lg shadow-lg max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
          <h3 className="text-lg font-bold mb-2">{user.name}'s Cart</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>

          <button
            onClick={() => toggleCartDetails(user.id)}
            className="bg-cyan-500 hover:bg-cyan-400 text-zinc-900 px-4 py-2 rounded mt-4"
          >
            {selectedUser === user.id ? 'Hide Cart Details' : 'Show Cart Details'}
          </button>

          {selectedUser === user.id && (
            <div className="mt-4 overflow-x-auto">
              {user.cart && user.cart.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto text-zinc-200 text-sm md:text-base">
                    <thead>
                      <tr className="bg-zinc-700">
                        <th className="px-2 md:px-4 py-2">Order ID</th>
                        <th className="px-2 md:px-4 py-2">Product</th>
                        <th className="px-2 md:px-4 py-2">Price</th>
                        <th className="px-2 md:px-4 py-2">Quantity</th>
                        <th className="px-2 md:px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.cart.map((order) => (
                        <tr key={order.id} className="bg-zinc-600">
                          <td className="border px-2 md:px-4 py-2">{order.id}</td>
                          <td className="border px-2 md:px-4 py-2">{order.name}</td>
                          <td className="border px-2 md:px-4 py-2">₹{order.price}</td>
                          <td className="border px-2 md:px-4 py-2">{order.quantity}</td>
                          <td className="border px-2 md:px-4 py-2">
                            <button
                              onClick={() => cancelOrder(user.id, order.id)}
                              className="bg-zinc-500 hover:bg-zinc-400 text-white px-3 py-2 rounded text-xs md:text-sm"
                            >
                              Cancel Order
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="mt-4 text-cyan-800">No orders found for this user.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderManagement;

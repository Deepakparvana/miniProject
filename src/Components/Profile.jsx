import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const [customer, setCustomer] = useState(null);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false); 
  const id = localStorage.getItem('id');

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/users/${id}`)
        .then((res) => {
          setCustomer(res.data);
          setPhone(res.data.phone);     
          setAddress(res.data.address); 
        })
        .catch((err) => toast.error('Failed to fetch customer details', err.message));
    }
  }, [id]);

  
  const handleUpdateDetails = () => {
    const updatedData = {
      ...customer,
      phone: phone,
      address: address,
    };

    axios
      .patch(`http://localhost:8000/users/${id}`, updatedData)
      .then(() => {
        toast.success('Customer details updated successfully');
        setCustomer(updatedData); // Update the local state
        setIsEditing(false);      // Exit edit mode
      })
      .catch((err) => toast.error('Failed to update details', err.message));
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  if (!customer) {
    return <p className="text-center text-zinc-400">Please login</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg border border-zinc-300 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-cyan-600 text-center">Customer Profile</h1>
      
      <div className="text-zinc-700 mb-6">
        <p className="mb-2"><strong>Name:</strong> {customer.name}</p>
        <p className="mb-2"><strong>Email:</strong> {customer.email}</p>
      </div>

   
      {isEditing ? (
        <>
         
          <div className="mt-4">
            <label className="block mb-1 font-semibold text-zinc-600">Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-zinc-300 rounded text-zinc-700 focus:outline-none focus:border-cyan-500"
            />
          </div>

         
          <div className="mt-4">
            <label className="block mb-1 font-semibold text-zinc-600">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border border-zinc-300 rounded text-zinc-700 focus:outline-none focus:border-cyan-500"
            />
          </div>

         
          <button 
            onClick={handleUpdateDetails} 
            className="mt-6 bg-cyan-500 text-white py-2 px-4 rounded shadow hover:bg-cyan-700 transition duration-300 w-full">
            Save Details
          </button>
        </>
      ) : (
        <>
         
          <div className="text-zinc-700 mb-6">
            <p><strong>Phone:</strong> {phone || 'Not provided'}</p>
            <p><strong>Address:</strong> {address || 'Not provided'}</p>
          </div>

     
          <button 
            onClick={handleEdit} 
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition duration-300 w-full">
            Edit Details
          </button>
        </>
      )}

      <h2 className="text-2xl font-semibold text-cyan-600 mt-10 mb-4">Order History</h2>
      <ul className="text-zinc-700">
        {customer.orders && customer.orders.length > 0 ? (
          customer.orders.map((order, index) => (
            <li key={index} className="border-b border-zinc-200 py-4">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Total:</strong> ${order.total}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p className="text-zinc-500">No orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default Profile;

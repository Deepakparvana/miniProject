import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const deleteUser = (userId) => {
    axios.delete(`http://localhost:8000/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
        console.log('User deleted successfully');
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  const viewUserDetails = (userId) => {
    axios.get(`http://localhost:8000/users/${userId}`)
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => console.error('Error fetching user details:', error));
  };

  const closeDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className='bg-cyan-950 bg-opacity-40'>
    <div className='ml-56 sm:w-full sm:ml-2 '>
      <div className="p-6 min-h-screen">
        <h2 className="text-xl font-bold h-16 p-4 text-center bg-zinc-500 bg-opacity-45 text-zinc-300">Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-cyan-300 bg-cyan-50 bg-opacity-45 shadow-md rounded-lg ">
            <thead className="bg-cyan-800 text-cyan-200">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.isAdmin ? 'Admin' : 'User'}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => viewUserDetails(user.id)}
                      className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition mr-2"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <div className="mt-6 p-4 bg-zinc-800 rounded-lg shadow-lg text-zinc-300 ">
           <p
              onClick={closeDetails}
              className="text-end text-cyan-800 px-4 py-2 rounded  mb-4  cursor-pointer "
            >
              X
            </p>

            <h3 className="text-lg font-bold mb-4">User Details</h3>
            
            <p><strong>ID:</strong> {selectedUser.id}</p>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>
            <p><strong>Role:</strong> {selectedUser.isAdmin ? 'Admin' : 'User'}</p>
            <p><strong>Additional Info:</strong> {selectedUser.additionalInfo || 'No additional information'}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default UserManagement;

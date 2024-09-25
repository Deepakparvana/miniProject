import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      const users = response.data;

      // Find user by email and password
      const user = users.find(
        (u) => u.email === data.email && u.password === data.password
      );

      if (user) {
        // Login successful
        console.log('Login successful');
        localStorage.setItem('id', user.id);

        // Check if the user is an admin
        if (user.isAdmin) {
          // Redirect to admin page if user is an admin
          navigate('/admin');
        } else {
          // Redirect to home page for regular users
          navigate('/home');
        }
      } else {
        // Invalid credentials
        setLoginError('Invalid email or password');
        toast.error('Invalid email or password!', {
          style: {
            backgroundColor: '#0E7490',
            color: '#F8FAFC',
          },
          icon: '❌',
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2461125.jpg')" }}>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md bg-opacity-90">
        <h1 className="text-2xl font-bold text-center text-cyan-600">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {loginError && <p className="text-red-500">{loginError}</p>}
          <div>
            <label htmlFor="email" className="block text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-zinc-400 rounded-md hover:bg-zinc-500 focus:outline-none">Login</button>
        </form>
        <ToastContainer />
        <p className="text-sm text-center">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
        <p className='text-sky-950 text-xs text-right text-opacity-70'>You can <a href="/home" className='text-m text-teal-500'>SKIP</a> this without Login</p>
      </div>
    </div>
  );
};

export default Login;

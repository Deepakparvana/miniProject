import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");


  
  const handleLogout = () => {
   
    localStorage.clear()
    

  
    navigate('/login'); 

   
   

  };

  return (
    <div className="bg-zinc-500 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-300">Welcome</h1>
      <h1 className="text-4xl font-serif text-zinc-400 text-center">
        PLASHOE
      </h1>
      <button
        onClick={handleLogout}
        className="text-sm bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;

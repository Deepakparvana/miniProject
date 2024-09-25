import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cart: [],
    order: [],
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    try {
      // Make a POST request to add the new user to the JSON Server
      const response = await axios.post(
        "http://localhost:8000/users",
        formData
      );
      console.log("Registered data:", response.data);

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2461125.jpg')",
      }}
    >
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md bg-opacity-90">
        <h1 className="text-2xl font-bold text-center text-cyan-600">
          Register
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-zinc-400 rounded-md hover:bg-zinc-500 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

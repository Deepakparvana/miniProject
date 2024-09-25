import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Man from "./Man";
import Collection from "./Collection";
import Example from "./Example";
import Women from "./Women";
import LookBook from "./LookBook";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Contact from "./Contact ";
import OurStory from "./OurStory";
// import Bottom from './Bottom';
import QuickViewModal from "./QuickViewModal";
import Checkout from "./Checkout";
import Profile from "./Profile";
import axios from "axios";
import toast from "react-hot-toast";
import AdminHome from "./Admin/Pages/AdminHome";
import UserManagement from "./Admin/Pages/UserManagement";
import ProductManagement from "./Admin/Pages/ProductManagement";
import OrderManagement from "./Admin/Pages/OrderManagement";

const Index = () => {
  const id = localStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    let newCart;

    if (existingProduct) {
   
      newCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
    } else {
     
      newCart = [...cartItems, product];
    }

    setCartItems(newCart);

   
    axios
      .patch(`http://localhost:8000/users/${id}`, { cart: newCart })
      .then(() => toast.success("Cart updated successfully"))
      .catch((err) => toast.error("Failed to update cart", err.message));
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8000/users/${id}`)
        .then((res) => {
          setCartItems(res.data.cart);
        })
        .catch((err) => toast.error("Something went wrong", err.message));
    }
  }, [id]);

  return (
    <div>
      <Router>
        <h1 className="text-center text-cyan-50">
          Free Express Shipping on all orders with all duties included
        </h1>
      
        <Routes>
          <Route
            path="/"
            element={
              <Example cartItems={cartItems} handleLogout={handleLogout} />
            }
          >
            <Route path="/Profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/men" element={<Man />} />
            <Route path="/women" element={<Women />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/lookbook" element={<LookBook />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/OurStory" element={<OurStory />} />
            <Route
              path="/product/:productId"
              element={
                <ProductDetails
                  onAddToCart={handleAddToCart}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/Quick" element={<QuickViewModal />} />
            <Route
              path="/Checkout"
              element={
                <Checkout cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
          </Route>

          <Route path="/admin" element={<AdminHome />}>
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>
        </Routes>

        {/* <Bottom/> */}
      </Router>
    </div>
  );
};

export default Index;

import React from "react";
import {  Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="h-20 bg-zinc-400 w-full flex flex-col md:flex-row top-0 fixed">
      <p className="text-cyan-950 bg-zinc-300 w-full md:w-screen   flex top-0 fixed justify-center md:justify-center p-2 md:p-0">
        Free Express Shipping on all orders with all duties included
      </p>
      <div className="w-full md:w-1/2 flex text-cyan-800 px-2 justify-between items-center pt-2 md:pt-5 mt-1 md:mt-3">
        <Link to="/Home">
          <h1 className="text-xl font-bold text-cyan-700 text-center md:text-start ">
            PLAYSHOE
          </h1>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/man">
            <h5>MEN</h5>
          </NavLink>
          <NavLink to="/women">
            <h5>WOMEN</h5>
          </NavLink>
          <NavLink to="/collection">
            <h5>COLLECTION</h5>
          </NavLink>
          <NavLink to="/lookbook">
            <h5>LOOK BOOK</h5>
          </NavLink>
          <NavLink to="/sale">
            <h5>SALE</h5>
          </NavLink>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden md:flex space-x-4  px-2 pt-2 md:pt-5 mt-1 justify-between md:justify-end text-cyan-800 items-center">
        <NavLink to="/ourstory" className="px-2">
          OUR STORY
        </NavLink>
        <NavLink to="/contact" className="px-2">
          CONTACT
        </NavLink>
        <NavLink to="/cart" className="px-2">
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
        <NavLink to="/login" className="px-2">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

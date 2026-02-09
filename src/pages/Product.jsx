import React from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="text-7xl">Product</h1>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/product/:id"
      >
        <p>ProductDetail</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/cart"
      >
        <p>Cart</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/checkout"
      >
        <p>Checkout</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
        to="/login"
      >
        <p>Login</p>
      </NavLink>
    </div>
  );
};

export default Product;

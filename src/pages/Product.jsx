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
    </div>
  );
};

export default Product;

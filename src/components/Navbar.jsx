import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10 justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/"
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/about"
        >
          <p>About</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/contact"
        >
          <p>Contact</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/faq"
        >
          <p>Faq</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/course"
        >
          <p>Course</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/course/:id"
        >
          <p>CourseDetail</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/blog"
        >
          <p>Blog</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/product"
        >
          <p>Product</p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/cart"
        >
          <p>Cart</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/checkout"
        >
          <p>Checkout</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/login"
        >
          <p>Login</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/pricing"
        >
          <p>Pricing</p>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

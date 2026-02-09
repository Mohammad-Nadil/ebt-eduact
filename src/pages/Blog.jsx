import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1 className="text-7xl">Blog</h1>
       <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/blog/:id"
        >
          <p>BlogDetail</p>
        </NavLink>
    </div>
  );
};

export default Blog;

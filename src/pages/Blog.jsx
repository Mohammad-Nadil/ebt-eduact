import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";

const Blog = () => {
  return (
    <div>

      <div className="bg-white py-[50px]"></div>
      <div className="bg-black py-[147px]">
        <Container>
          <div className="text-center">
            <h1 className="text-white text-7xl font-bold mb-4">BLOG</h1>
            <div className="flex items-center justify-center gap-2 text-white">
              <NavLink to="/" className="hover:text-secondary">
                Home
              </NavLink>
              <span>/</span>
              <span>Blog</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
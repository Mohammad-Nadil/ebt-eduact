import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";

const BlogDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-black pt-20 pb-32">
        <Container>
          <h1 className="text-white text-center text-7xl font-bold mb-4">BLOG DETAILS</h1>
          <p className="text-white text-center">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>

        </Container>
      </div>

      
    </div>
  );
};

export default BlogDetails;

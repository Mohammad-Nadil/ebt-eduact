import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { FaAngleRight } from "react-icons/fa";
import Card from "../components/card";

const Blog = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-black pt-20 pb-32">
        <Container>
          <h1 className="text-white text-center text-4xl md:text-5xl lg:text-7xl font-bold mb-4 px-4">
            BLOG
          </h1>
          <p className="text-white text-center text-sm md:text-base">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>
        </Container>
      </div>

      <div>
        <Container className="my-[60px] md:my-[80px] lg:my-[100px] px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-y-[50px] place-items-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8 md:mt-10 lg:mt-12">
            <button className="w-10 h-10 rounded-lg bg-secondary text-white hover:bg-opacity-90 transition-all">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border hover:border-secondary hover:text-secondary transition-all">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
              <FaAngleRight />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
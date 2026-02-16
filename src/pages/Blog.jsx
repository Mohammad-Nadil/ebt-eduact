import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { FaAngleRight } from "react-icons/fa";
import Card from "../components/card";

const Blog = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className=" font-bold text-2xl sm:text-3xl md:text-5xl">
          Blog
        </h2>
        <p className="sm:text-xl">Home / Blog</p>
      </div>

      <div>
        <Container className="my-15 md:my-20 lg:my-25 px-4 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12 place-items-center">
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

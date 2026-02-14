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
          <h1 className="text-white text-center text-7xl font-bold mb-4">BLOG</h1>
          <p className="text-white text-center">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>

        </Container>
      </div>
      <div>
        <Container className="my-[100px]">
           <div className="grid grid-cols-3 gap-y-[50px] ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
           </div>
            
           {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-secondary text-white">1</button>
            <button className="w-10 h-10 rounded-lg border">2</button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center"><FaAngleRight/></button>
          </div>
        </Container>
      </div>

    
       
          
         
  
    </div>

  );
};

export default Blog;
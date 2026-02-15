import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Container from "../components/Container";

const Course = () => {
  return (
    <div >
      <div className="bg-black pt-20 pb-32 text-white text-center">
      <h1 className=" text-7xl font-bold mb-4">Course</h1>
          <NavLink  to="/">Home</NavLink> / <span>Course</span>
    </div>

       <Container className="my-[100px]">
           <div className="grid grid-cols-3 gap-y-[50px] ">
  <CourseCard/>
  <CourseCard/>
  <CourseCard/>
  <CourseCard/>
  <CourseCard/>
  <CourseCard/>
</div>

       </Container>


     <div className="flex justify-center gap-2 my-12">
            <button className="w-10 h-10 rounded-lg bg-secondary text-white">1</button>
            <button className="w-10 h-10 rounded-lg border">2</button>
            <button className="w-10 h-10 rounded-lg border flex items-center justify-center"><FaAngleRight/></button>
         
      
      </div>
    </div>
  );
};

export default Course;

import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Container from "../components/Container";

const Course = () => {
  return (
    <div>
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className=" font-bold text-2xl sm:text-3xl md:text-5xl">
          Course
        </h2>
        <p className="sm:text-xl">Home / Course</p>
      </div>

      <Container className="my-[100px]">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-y-12 ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </Container>

      <div className="flex justify-center gap-2 my-12">
        <button className="w-10 h-10 rounded-lg bg-secondary text-white">
          1
        </button>
        <button className="w-10 h-10 rounded-lg border">2</button>
        <button className="w-10 h-10 rounded-lg border flex items-center justify-center">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Course;

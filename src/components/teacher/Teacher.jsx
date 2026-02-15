import React from "react";
import Container from "../Container";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import TeacherCard from "../TeacherCard";

const Teacher = () => {
  const teachers = [1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className="text-white font-bold text-5xl">Teacher</h2>
        <p className="sm:text-xl">Home / Teacher</p>
      </div>
      <Container className="px-5 lg:px-14 py-16 grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-25 ">
        {teachers.map((item, index) => (
          <TeacherCard key={index} />
        ))}
      </Container>
    </div>
  );
};

export default Teacher;

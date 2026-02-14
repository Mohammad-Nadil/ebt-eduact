import React from "react";
import Container from "../Container";
import bg from "/images/home-images/becomeBg.png";
import {
  FaAngleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import TeacherCard from "../TeacherCard";

const BecomeTeacher = () => {
  const teachers = [1, 1, 1];
  return (
    <div>
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className=" font-bold text-2xl sm:text-3xl md:text-5xl">Become A Teacher</h2>
        <p className="sm:text-xl">Home / Teacher</p>
      </div>
      <Container className="py-16 flex items-start justify-between gap-x-16 ">
        <div className="rules w-2/3 "></div>
        <div className="form w-1/3"></div>
      </Container>
      <section className="relative z-10 px-3 xs:px-5" >
        <img className="w-full h-1/3 object-cover absolute bottom-0 left-0 bg-neutral-200 opacity-45 z-0" src={bg} alt=" bg " />
        <Container className={`flex flex-col gap-y-8 sm:gap-y-10 lg:gap-y-20 py-20 relative z-10 `}>
          <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
            <p className="text-xl sm:text-2xl text-primary flex items-center">
              Our Teacher
              <span className="flex items-center text-secondary -space-x-2.5 text-lg ">
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
              </span>
            </p>
            <h2 className={`text-xl xs:text-2xl sm:text-4xl text-primaryText`}>
              Learn from the Best Teacher
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 xl:gap-30">
            {teachers.map((item, index) => (
             <TeacherCard key={index} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BecomeTeacher;

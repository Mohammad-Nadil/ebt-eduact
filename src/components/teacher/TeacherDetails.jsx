import React from "react";
import Container from "../Container";
import img from "/images/Men.png"

const TeacherDetails = () => {
  return (
    <section className="teacher-details">
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className=" font-bold text-2xl sm:text-3xl md:text-5xl">
          Teacher Details
        </h2>
        <p className="sm:text-xl">Home / Teacher</p>
      </div>
      <Container className={`flex justify-between`}>
        <div className="img 1/3">
            <img className="w-full aspect-7/9" src={img} alt="" />
        </div>
        <div className="main w-1/2">
        <h2>Hello</h2>
        <p></p>
        <p></p>
        <p></p>
        </div>
      </Container>
    </section>
  );
};

export default TeacherDetails;

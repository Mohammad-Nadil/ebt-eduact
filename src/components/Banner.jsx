import React from "react";
import Container from "./Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="bg-primary pt-40 pb-24">
      <Container className={`flex gap-x-40 `}>
        <div className=" text w-1/2 flex flex-col gap-y-10 text-white relative after:absolute after:top-1/2 after:right-1/2 after:-translate-y-5/11 after:translate-x-5/11 after:w-[130%] after:aspect-square after:rounded-full after:bg-linear-to-b after:from-[#ffffff15] after:to-[#ffffff00] after:z-[-1] z-10  ">
          <h1 className="font-extrabold text-7xl ">
            A Better Learning Journey Future Start Here
          </h1>
          <p className="w-3/4 leading-loose">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary,
          </p>
          <div className="btn flex items-center gap-x-5">
            <button className="text-lg flex items-center gap-x-3 py-4 px-8 rounded-md bg-none hover:bg-secondary border border-white hover:border-secondary duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer ">
              <p>Take Now</p>
              <FaArrowRightLong />
            </button>
            <button className="text-lg flex items-center gap-x-3 py-4 px-8 rounded-md bg-none hover:bg-secondary border border-white hover:border-secondary duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer ">
              <p>Find The Course</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="main w-1/2"></div>
      </Container>
    </div>
  );
};

export default Banner;

import React from "react";
import Container from "../Container";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Teacher = () => {
  const teachers = [1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className="w-full py-43 bg-[#04090F] flex items-center justify-center">
        <h2 className="text-white font-bold text-5xl">Teacher</h2>
      </div>
      <Container className="py-16 grid grid-cols-3 gap-25 ">
        {teachers.map((item, index) => (
          <div
            key={index}
            className="w-full group aspect-2/3 bg-neutral-400 rounded-full after:h-1/2 relative after:w-[115%]  after:bg-secondary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-[10%] after:z-[-1] hover:after:bg-primary   after:rounded-b-full after:duration-300 "
          >
            <div className="text opacity-0 group-hover:opacity-100 duration-300 h-full w-full rounded-full flex items-center justify-center flex-col gap-y-5 bg-black/20 ">
              <div className="member flex flex-col text-center ">
                <h2 className="name text-3xl lg:text-4xl"> Devon Lane</h2>
                <p className="title text-xl"> Web Designer </p>
              </div>
              <div className="social flex items-center gap-3">
                {[<FaFacebookF />, <FaLinkedinIn />, <FaYoutube />].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="icon w-7  aspect-square rounded-full border border-primary grid place-items-center"
                    >
                      {item}
                    </div>
                  ),
                )}{" "}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Teacher;

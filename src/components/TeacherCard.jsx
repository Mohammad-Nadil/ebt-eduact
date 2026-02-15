import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const TeacherCard = ({ key , className}) => {
  return (
    <div
      key={key}
      className={`w-full group aspect-2/3 bg-neutral-400 rounded-full after:h-1/2 relative after:w-[115%]  after:bg-secondary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-[10%] after:z-[-1] hover:after:bg-primary   after:rounded-b-full after:duration-300  ${className}`}
    >
      <div className="text xl:opacity-0 group-hover:opacity-100 duration-300 h-full w-full rounded-full flex items-center justify-center flex-col gap-y-3 md:gap-y-5 bg-black/20 ">
        <div className="member flex flex-col text-center ">
          <h2 className="name text-xs xs:text-sm sm:text-2xl md:text-3xl lg:text-4xl"> Devon Lane</h2>
          <p className="title text-[10px] xs:text-xs sm:text-lg md:text-xl"> Web Designer </p>
        </div>
        <div className="social flex items-center gap-1.5 sm:gap-3">
          {[<FaFacebookF />, <FaLinkedinIn />, <FaYoutube />].map(
            (item, index) => (
              <div
                key={index}
                className="icon w-3 xs:w-5 sm:w-7 text-[8px] xs:text-[10px] sm:text-base  aspect-square rounded-full border border-primary grid place-items-center"
              >
                {item}
              </div>
            ),
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;

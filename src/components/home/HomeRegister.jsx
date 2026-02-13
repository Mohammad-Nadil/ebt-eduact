import React from "react";
import Container from "../Container";
import leftImg from "/images/home-images/registerLeftImg.png";
import rightImg from "/images/home-images/registerRightImg.png";
import mainImg from "/images/home-images/registerImg.png";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeRegister = () => {
  const { theme } = useTheme();
  const list = [1, 2, 3, 4];
  return (
    <section
      id="register"
      className={` py-9 relative ${theme === "light" ? "bg-primary" : "bg-[#000324]"}`}
    >
      <img
        className="absolute top-1/4 sm:top-1/2 sm:-translate-y-1/2 left-0 h-1/3 sm:h-full"
        src={leftImg}
        alt="register left img"
      />
      <img
        className="absolute bottom-0 sm:top-1/2 sm:-translate-y-1/2 sm:right-0  xs:h-1/2 sm:h-full"
        src={rightImg}
        alt="register right img"
      />
      <Container className={`flex flex-col md:flex-row items-center justify-between gap-y-32 gap-x-16`}>
        <div className="left text-white font-bold flex flex-col gap-y-4 lg:gap-y-10 max-w-xl relative z-50 w-full md:w-1/2 xl:w-auto">
          <p className="text-3xl sm:text-4xl xl:text-[40px] ">Create Your free Account</p>
          <div className="text py-3 sm:py-4 xl:py-10 px-5 xl:px-7 bg-white/20 rounded-xl relative after:w-1/5 after:h-[200%] after:bg-secondary z-0 after:-z-10  after:absolute after:top-[10%] after:-right-[10%] overflow-hidden after:rotate-40">
            <h2 className="font-normal leading-tight sm:text-xl">
              The generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic.
            </h2>
          </div>
          <div className="btn">
            <button className="text-base sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10 ">
              <p>Join Now</p>
              <FaArrowRightLong />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-3 sm:gap-5 absolute right-0 top-full -translate-y-1/2 ">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="w-1 sm:w-1 aspect-square bg-white rounded-full"
              />
            ))}
          </div>
        </div>
        <div className="right w-5/6 sm:w-2/3 md:w-2/5 lg:w-2/6 2xl:w-98 aspect-square rounded-full  relative bg-white z-20 border-white xl:mx-auto 2xl:mx-0  ">
          <div className="w-full h-full relative z-20 flex flex-col justify-center items-center gap-3  sm:gap-y-7.5 md:gap-y-4 lg:gap-y-7.5 ">
            <p className={`xs:text-xl  w-7/12 font-bold mx-auto text-center ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}>
              Register Now and Get a
              <span className="text-secondary">50% Discount</span>
            </p>
            <div className="grid grid-cols-2 gap-3 md:gap-x-2 md:gap-y-2  sm:gap-x-11 sm:gap-y-8 lg:gap-x-11 lg:gap-y-8">
              {list.map((item) => (
                <div
                  key={item}
                  className={`flex flex-col gap-x-3 items-center p-2 xs:py-2 xs:px-3  ${theme === "light" ? "bg-secondaryTextD" : "bg-primaryText"} rounded-lg `}
                >
                  <p className={`text-2xl font-bold ${theme === "light" ? "text-primary" : "text-secondary"}`}>50</p>
                  <p className={` text-sm ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}>sec</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`w-full h-full absolute top-0 left-0 z-10 rounded-full ${theme === "light" ? "bg-white" : "bg-primaryDark"}`}
          ></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-[150%] -z-10  ">
            <img
              className="w-full h-full"
              src={mainImg}
              alt="register main img"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeRegister;

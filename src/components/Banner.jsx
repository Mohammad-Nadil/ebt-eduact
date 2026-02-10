import React, { useRef, useState } from "react";
import Container from "./Container";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import bgImg from "/images/header-bg.png";
import bgDark from "/images/banner-bgDark.png";
import { useTheme } from "../context/ThemeContext";
import star from "/images/Star 1.png";
import hat from "/images/hat.png";
import earth from "/images/earth.png";
import bookLight from "/images/book.png";
import bookDark from "/images/bookDark.png";
import spring from "../../public/images/spring.svg";

const Banner = () => {
  const { theme } = useTheme();
  const bg = theme === "light" ? bgImg : bgDark;
  const book = theme === "light" ? bookLight : bookDark;

  const videoRef = useRef();
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <section
      id="hero"
      className={` pt-26 xl:pt-40 pb-20 xl:pb-24 bg-right bg-no-repeat bg-cover overflow-x-clip `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container
        className={`flex flex-col lg:flex-row gap-20 xl:gap-40 items-center overflow-x-clip xl:overflow-x-visible `}
      >
        <div
          className={`text w-full lg:w-1/2 flex flex-col gap-y-7 sm:gap-y-10 text-white relative z-10 before:absolute before:top-1/2 before:right-1/2 before:-translate-y-5/12 before:translate-x-[40%]  before:w-[140%] before:aspect-square before:rounded-full before:bg-linear-to-b before:from-[#ffffff15] before:to-[#ffffff00] before:z-[-1] after:absolute after:top-1/2 after:right-1/2 after:-translate-y-5/12 after:translate-x-[40%] after:w-[200%] after:aspect-square after:rounded-full after:bg-linear-to-b after:from-[#ffffff15] after:to-[#ffffff00] after:z-[-2]`}
        >
          <h1 className="font-extrabold text-[42px] leading-tight sm:text-5xl 2xl:text-7xl ">
            A Better Learning Journey Future Start Here
          </h1>
          <p className="w-3/4 sm:leading-loose">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary,
          </p>
          <div className="btn flex items-center gap-x-3 sm:gap-x-5">
            {["Take Now", "Find The Course"].map((item, index) => (
              <button className="text-base sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none hover:bg-secondary border border-white hover:border-secondary duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer ">
                <p>{item}</p>
                <FaArrowRightLong />
              </button>
            ))}
          </div>
          <img className="absolute right-0 top-1/2 translate-y-full w-16 xl:w-auto" src={spring} alt="spring" />
        </div>
        <div
          className={`hero_gallery w-[90%] sm:w-3/5 lg:w-1/2 aspect-square rounded-full bg-linear-to-br from-secondary to-primary flex items-center justify-center relative z-10 `}
        >
          <div className="img aspect-square rounded-full w-[90%] bg-gray-600"></div>
          <div
            onClick={() => handlePlay()}
            className={`video absolute  w-[28%] aspect-square rounded-full top-1/4 right-0 translate-x-1/5 after:w-[120%] sm:after:w-[125%] after:aspect-square after:rounded-full after:absolute after:top-1/2 after:right-1/2 after:-translate-y-1/2 after:translate-x-1/2 
            hover:cursor-pointer after:bg-linear-to-b after:border
            ${theme === "light" ? "after:border-white" : "after:border-primaryText"}
            `}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              loop
              preload="metadata"
              className=" w-full aspect-square rounded-full object-cover"
              src="/videos/car.mp4"
            ></video>
            <div
              onClick={handlePlay}
              className={`play w-1/3 aspect-square rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-opacity duration-300 z-50
                ${play ? "opacity-0 pointer-events-none" : "opacity-100"}
                ${theme === "light" ? "bg-white" : "bg-primaryText"} `}
            >
              <FaPlay className=" md:text-xl lg:text-2xl text-secondary" />
            </div>
          </div>
          <div
            className={`join_now xl:w-1/3 xl:aspect-210/135 rounded-xl absolute bottom-0 left-0 -translate-x-1/12 sm:-translate-x-1/2 translate-y-full sm:-translate-y-1/2 flex flex-col gap-y-1 py-2 2xl:py-0 px-5 sm:px-8 justify-center
            ${theme === "light" ? "bg-white" : "bg-primaryText"}
            `}
          >
            <h2 className={theme === "light" ? "text-black" : "text-white"}>
              Latest Work Shop
            </h2>
            <p className="text-xs text-[#b7b0b3]">Graphic Design</p>
            <div className="btn">
              <button className="text-xs sm:text-base py-2 px-3 sm:px-3.5 sm:py-2  rounded-md flex items-center gap-2 bg-secondary text-white hover:bg-primary duration-300">
                <p>Join Now</p>
                <FaArrowRightLong />
              </button>
            </div>
            <div
              className={`img aspect-square w-12 rounded-full border-4 sm:border-8 bg-gray-600 absolute bottom-full translate-y-1/4 ${theme === "light" ? "border-primary" : "border-primaryDark"}`}
            ></div>
          </div>
          <div className="hat w-16 sm:w-auto absolute top-0 left-0 -translate-x-1/4">
            <img src={hat} alt="hat" />
          </div>
          <div className="earth w-16 sm:w-auto absolute top-0 left-3/4 ">
            <img src={earth} alt="earth" />
          </div>
          <div className="star w-16 sm:w-auto absolute bottom-0 translate-1/2 ">
            <img src={star} alt="star" />
          </div>
          <div className="book w-16 sm:w-auto absolute bottom-0 left-3/4">
            <img src={book} alt="book" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

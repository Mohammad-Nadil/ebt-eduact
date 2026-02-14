import React, { useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Container from "../Container";
import brush from "/images/home-images/Brush.png";
import mainImg from "/images/home-images/feedbackShape.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import studentFeedback from "../../api/feedback.api";
import gsap from "gsap";

const HomeFeedback = () => {
  const { theme } = useTheme();
  const list = studentFeedback;

  const [index, setIndex] = useState(0);

  const cardRef = useRef(null);

  const animatePrev = () => {
    gsap.set(cardRef.current, { x: 0, opacity: 1 });
    gsap.timeline().to(cardRef.current, {
      x: -300,
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        setIndex((prev) => (prev - 1 + list.length) % list.length);
        gsap.fromTo(
          cardRef.current,
          {
            x: 300,
            opacity: 1,
            duration: 0.4,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
          },
        );
      },
    });
  };
  const animateNext = () => {
    gsap.timeline().to(cardRef.current, {
      x: 300,
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        setIndex((prev) => (prev + 1) % list.length);
        gsap.fromTo(
          cardRef.current,
          {
            x: -300,
            opacity: 1,
            duration: 0.4,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
          },
        );
      },
    });
  };

  return (
    <section
      id="feedback"
      className={` py-10 sm:py-20 xl:py-30 ${theme === "light" ? "" : "bg-[#121534]"}`}
    >
      <Container className={`flex flex-col gap-y-30`}>
        <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
          <p className="text-xl sm:text-2xl text-primary">Best Course</p>
          <h2
            className={`text-xl xs:text-2xl sm:text-4xl ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
          >
            Featured Course On This Month
          </h2>
        </div>
        <div className="main w-full rounded-xl sm:rounded-2xl lg:rounded-4xl border border-primary/40 p-3 xs:p-5 sm:p-6 lg:p-15 text-primaryDark relative">
          {[list[index]].map((item, index) => (
            <div
              key={index}
              ref={cardRef}
              id="card"
              className={`card leading-tight flex flex-col gap-y-5 sm:gap-y-10 sm:w-7/12 pt-16 relative ${
                theme === "light" ? "" : "text-secondaryTextD"
              }`}
            >
              <p className="text text-xl">{item.feedback}</p>
              <div className="author">
                <h2 className="text-xl sm:text-2xl font-bold">{item.name}</h2>
                <p className="text-xs text-secondaryText">{item.title}</p>
              </div>
              <div className="img absolute h-3/5 sm:h-[65%] rounded-full aspect-square bg-neutral-500 top-0 left-0 -translate-y-4/5 "></div>
            </div>
          ))}
          <div className="imgDiv hidden sm:flex absolute w-1/3 md:w-69 lg:w-75 xl:w-100 aspect-square rounded-full right-0 top-1/2 -translate-y-1/2 z-20 ">
            <div className="h-full w-full  rounded-full bg-neutral-400 relative z-20"></div>
            <img
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 h-full md:h-auto"
              src={brush}
              alt="brush"
            />
            <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[140%] aspect-square  z-10 brightness-75">
              <img
                className="h-full w-full object-contain"
                src={mainImg}
                alt="feedback img"
              />
            </div>
          </div>
          <div className="btn flex items-center gap-2 xs:gap-3 absolute bottom-4 right-0 -translate-x-1/5 sm:right-1/2 sm:translate-x-1/2">
            <button
              onClick={animatePrev}
              className=" w-10 xs:w-12 aspect-square grid place-content-center bg-primary/20 text-primary rounded-full hover:cursor-pointer hover:text-xl duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={animateNext}
              className=" w-10 xs:w-12 aspect-square grid place-content-center bg-primary/20 text-primary rounded-full hover:cursor-pointer hover:text-xl duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeFeedback;

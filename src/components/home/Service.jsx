import React from "react";
import Container from "../Container";
import education from "/images/home-images/education.png";
import video from "/images/home-images/video.png";
import bulb from "/images/home-images/bulb.png";
import record from "/images/home-images/record.png";
import { FaAngleRight } from "react-icons/fa6";
import shape from "/images/home-images/service-shape.png";
import imgShape from "/images/home-images/service-hover.png";
import { useTheme } from "../../context/ThemeContext";
const Service = () => {
  const { theme } = useTheme();
  const service = [
    {
      img: education,
      title: "Exclusive Coaching",
      text: "Learn directly from industry experts with practical guidance.",
    },
    {
      img: bulb,
      title: "Creative Learning",
      text: "Build skills through innovative and interactive learning methods.",
    },
    {
      img: video,
      title: "Video Tutorials",
      text: "Watch high-quality lessons anytime, anywhere.",
    },
    {
      img: record,
      title: "Proven Results",
      text: "Trusted by learners with real, measurable outcomes.",
    },
  ];

  return (
    <section id="service" className={theme === "light" ? "" : "bg-primaryDark"}>
      <Container className=" pt-14 sm:pt-20 2xl:pt-30 grid sm:grid-cols-2 xl:grid-cols-4 gap-9">
        {service.map((item, index) => (
          <div
            key={index}
            className={`card w-9/10 mx-auto sm:mx-0 sm:w-auto py-5 xl:py-10 px-5 xl:px-7 flex flex-col gap-y-3 md:gap-y-5  border rounded-2xl group hover:cursor-pointer relative overflow-hidden z-50 drop-shadow-xl ${theme === "light" ? "border-[#E0E3FD]" : "border-primaryText"} `}
          >
            <div className="img w-20 aspect-square rounded-3xl bg-secondary flex justify-center items-center hover:bg-primary  group-hover:bg-primary duration-300">
              <img className="w-1/2" src={item.img} alt="img" />
            </div>
            <h2
              className={`text-lg font-bold ${theme === "light" ? "text-primaryDark" : "text-white"}`}
            >
              {item.title}
            </h2>
            <p
              className={`text-sm  ${theme === "light" ? "text-[#697585]" : "text-white"}`}
            >
              {item.text}
            </p>
            <div className="btn w-full">
              <button className="flex items-center gap-x-2 ">
                <p className="text-secondary font-bold">Read More</p>
                <FaAngleRight className="text-primary group-hover:scale-150 duration-300 " />
              </button>
            </div>
            <img
              className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity z-10 "
              src={shape}
              alt="shape"
            />
            <img
              className={`absolute bottom-0 right-0 group-hover:opacity-0 duration-300 transition-opacity z-0 ${theme === "light" ? "opacity-100 " : "opacity-10"}`}
              src={imgShape}
              alt="shape"
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Service;

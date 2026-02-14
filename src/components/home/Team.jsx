import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Container from "../Container";
import bg from "/images/home-images/teamBg.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Team = () => {
  const { theme } = useTheme();
  const item = [1, 2, 3];
  return (
    <section
      id="team"
      className={` py-10 sm:py-20 xl:py-30 ${theme === "light" ? "bg-secondaryTextD" : "bg-[#F1F2FD] "} `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Container className={`flex flex-col gap-y-8 sm:gap-y-10 lg:gap-y-16 xl:gap-y-24`}>
        <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
          <p className="text-lg sm:text-2xl text-primary">Team Members</p>
          <h2
            className={` xs:text-xl sm:text-4xl ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
          >
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className="main grid sm:grid-cols-3 gap-5 lg:gap-10 2xl:gap-12">
          {item.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-3xl relative group hover:cursor-pointer flex even:flex-row-reverse ${theme === "light" ? "bg-white text-primaryText" : "bg-primaryDark text-secondaryTextD"} `}
            >
              <div className="absolute aspect-11/12 w-1/2 rounded-3xl  top-0 left-0 -translate-1/12 bg-secondary group-hover:bg-primary transition-all duration-300 hidden sm:block"></div>
              <div className="img w-4/12 sm:w-full sm:h-full aspect-400/480  rounded-xl sm:rounded-3xl bg-neutral-500 relative z-10"></div>
              <div className="info sm:absolute sm:text-white w-3/5 sm:w-auto sm:inset-0 flex flex-col items-center justify-center gap-y-5 lg:opacity-0  sm:rounded-3xl group-hover:opacity-100 transition-all duration-300 sm:bg-black/40 z-20   ">
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
        </div>
      </Container>
    </section>
  );
};

export default Team;

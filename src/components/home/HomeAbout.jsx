import React from "react";
import Container from "../Container";
import classIcon from "/images/aboutClass.png";
import liveIcon from "/images/aboutLive.png";
import knowIcon from "/images/Headphone Women.png";
import { useTheme } from "../../context/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import element from "/images/aboutElement.png";

const HomeAbout = () => {
  const { theme } = useTheme();

  const item = [
    {
      image: classIcon,
      title: "Flexible Classes",
      description:
        "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      image: liveIcon,
      title: "Live Classes from anywhere",
      description:
        "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];

  return (
    <section id="about" className={theme === "light" ? "" : "bg-primaryDark"}>
      <Container className={`py-20 xl:py-30 flex flex-col lg:flex-row items-center gap-13`}>
        <div className="image w-[90%] sm:w-3/4 lg:w-1/2  aspect-square rounded-full bg-primaryText relative z-10">
          <div className="bg-linear-to-br from-secondary/20 to-secondary/0 rounded-full w-1/2 aspect-square  top-1/2 left-1/2 absolute -translate-1/2 z-30"></div>
          <div
            className={`absolute flex flex-col gap-y-3 sm:gap-y-5 py-3 sm:py-7 px-7 sm:px-16 bottom-0 2xl:left-0 left-1/12  2xl:-translate-1/2 z-40  opacity-80 rounded-xl ${theme === "light" ? "bg-white" : "bg-primaryText"}`}
          >
            <p
              className={`${theme === "light" ? "text-secondaryText" : "text-secondaryTextD"}`}
            >
              Need to Know More Details
            </p>
            <h2 className="text-2xl text-primary font-bold">
              +(00) 123 456 789
            </h2>
            <div className="icon absolute top-1/2 left-0 -translate-1/2  bg-secondary rounded-full p-2 sm:p-5 aspect-square md:w-auto flex justify-center items-center">
              <img className="w-2/3 md:w-auto" src={knowIcon} alt="icon" />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3 sm:gap-6 absolute -z-10 top-0 left-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1 sm:w-2 aspect-square bg-primary rounded-full" />
            ))}
          </div>
          <img className="absolute bottom-0 right-0 w-26 sm:w-auto" src={element} alt="" />
        </div>
        <div className="main w-full lg:w-1/2 flex flex-col gap-y-8">
          <p className="text-2xl font-bold leading-tight text-primary">
            About Us
          </p>
          <h2
            className={`text-4xl sm:text-[40px] sm:leading-12 font-bold  ${theme === "light" ? "text-primaryText" : "text-white"}`}
          >
            Creating a Lifelong Learning Best Community
          </h2>
          <p
            className={`text-sm sm:text-base ${theme === "light" ? "text-secondaryText" : "text-secondaryTextD"}`}
          >
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks
          </p>
          {item.map((item, index) => (
            <div
              key={index}
              className="card_border p-px sm:p-0.5 bg-linear-to-br from-secondary to-[#ffffff00] rounded-xl md:rounded-3xl overflow-hidden leading-tight"
            >
              <div
                className={`card p-2 sm:p-4  flex items-center gap-x-3 sm:gap-x-8 w-full h-full rounded-xl md:rounded-3xl ${theme === "light" ? "bg-white" : "bg-primaryDark"}`}
              >
                <div
                  className={`icon  p-2 sm:p-5 rounded-md sm:rounded-2xl  aspect-square bg-[#8089E1]/20`}
                >
                  <img className=" w-16 sm:w-auto" src={item.image} alt="icon" />
                </div>
                <div className="text flex flex-col gap-2">
                  <h2
                    className={`text-xl  font-bold ${theme === "light" ? "text-primaryText" : "text-white"}`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`text-xs sm:text-sm leading-tight ${theme === "light" ? "text-secondaryText" : "text-secondaryTextD"}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="btn">
            <button className="text-base sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md text-white bg-primary  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:after:w-full hover:after:rotate-0 hover:after:-top-1/2 after:duration-300 hover:cursor-pointer ">
              <p>Discover More</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;

import React, { useEffect, useState } from "react";
import Container from "../Container";
import analysis from "/images/home-images/Analysis.png";
import bgLight from "/images/home-images/categoryBg.png";
import bgDark from "/images/home-images/categoryBgDark.png";
import texture from "/images/home-images/Texture.png";
import { useTheme } from "../../context/ThemeContext";

import Slider from "react-slick";

const Category = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(4);
      else if (width >= 640) setSlidesToShow(3);
      else setSlidesToShow(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const list = [1, 1, 1, 1, 1, 1];

  const settings = {
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className=" relative z-1 bg-transparent rounded-lg ">
        <ul
          className="flex absolute top-full md:translate-y-full left-1/2 -translate-x-1/2 "
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={` after:w-[200%] after:aspect-square relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-primary after:rounded-full hover:after:border after:duration-300 after:z-[-1]  ${
          active == i
            ? ` bg-secondary `
            : `${theme === "light" ? " bg-primary/30" : " bg-primary/60 "}`
        } w-2.5  aspect-square rounded-full `}
      ></div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
  };
  return (
    <section
      id="category"
      className={` relative ${theme === "light" ? "" : "bg-primaryDark"}`}
    >
      <img
        className="w-full h-1/2 absolute top-0 left-0"
        src={theme === "light" ? bgLight : bgDark}
        alt="category-bg"
      />
      <Container
        className={`pb-20 md:pb-30 xl:pb-40 xl:py-40 flex flex-col gap-y-10 lg:gap-y-20  `}
      >
        <div className="heading mx-auto flex flex-col items-center gap-y-2 md:gap-y-3 font-bold">
          <p className="text-xl sm:text-2xl text-primary">Category</p>
          <h2
            className={`text-2xl xs:text-3xl sm:text-4xl ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
          >
            Favorite Topics to Learn
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            {list.map((item, index) => (
              <div key={index} className="p-0.5 xs:p-1 sm:p-3 lg:p-5">
                <div className="aspect-300/370 rounded-2xl bg-gray-500 relative group hover:cursor-pointer overflow-hidden">
                  <img
                    className="hidden relative z-10"
                    src={texture}
                    alt="placeholder"
                  />
                  <div
                    className={`overlay absolute top-1/2 group-hover:top-full duration-300 -translate-x-1/12 z-20 w-[250%] aspect-square rounded-full overflow-hidden ${theme === "light" ? " bg-secondaryTextD" : " bg-primaryText "} `}
                  >
                    <img className={`absolute top-0 left-1/12 rotate-45 z-30 ${theme === "light" ? " " : " brightness-500 " }  `} src={texture} alt=" texture" />
                  </div>
                  <div className="category py-10 flex flex-col items-center sm:gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 -translate-y-1/2 xl:-translate-y-1/5 duration-300 z-30 w-full">
                    <div className="icon p-3 sm:p-5 lg:p-0 lg:w-25 aspect-square rounded-full bg-secondary group-hover:bg-primary duration-300 flex flex-col items-center justify-center  ">
                      <img
                        className="w-9 sm:w-10 lg:w-auto"
                        src={analysis}
                        alt="placeholder"
                      />
                    </div>
                    <h2
                      className={`name xs:text-lg sm:text-xl font-bold pt-4 sm:pt-0 ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
                    >
                      Business Analysis
                    </h2>
                    <p className="quantity text-secondary group-hover:text-secondaryTextD duration-300">
                      8 Courses
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Category;

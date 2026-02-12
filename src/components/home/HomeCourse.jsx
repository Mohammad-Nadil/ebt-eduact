import React, { useState } from "react";
import Container from "../Container";
import bgLight from "/images/home-images/courseBg.png";
import bgDark from "/images/home-images/courseBgDark.png";
import placeImg from "/images/coursePlaceholder.png";
import { useTheme } from "../../context/ThemeContext";
import courses from "../../api/course.api";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";

const HomeCourse = () => {
  const { theme } = useTheme();
  const [likes, setLikes] = useState({});
  let bgImg;
  if (theme === "light") {
    bgImg = bgLight;
  } else {
    bgImg = bgDark;
  }

  let list = courses.slice(0, 6);
   const toggleLike = (index) => {
    setLikes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="course"
      className="bg-no-repeat bg-cover bg-center py-30"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Container className={`flex flex-col gap-y-10 lg:gap-y-20`}>
        <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
          <p className="text-xl sm:text-2xl text-primary">Best Course</p>
          <h2
            className={`text-xl xs:text-2xl sm:text-4xl ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
          >
            Featured Course On This Month
          </h2>
        </div>
        <div className="main grid sm:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-y-12">
          {list.map((item, index) => (
            <div
              className={`card capitalize  relative  group  w-full p-3 lg:p-7.5 rounded-2xl flex flex-col gap-y-2 md:gap-y-4 xl:gap-y-7.5 border group duration-300 mt-16 sm:mt-20  ${theme === "light" ? "bg-white  border-primary/40 hover:border-primary  text-primaryText" : "bg-primaryDark border-secondaryTextD/40 hover:border-secondaryTextD text-secondaryTextD"}`}
            >
              <div className=" w-auto flex items-center">
                <p className="font-semibold py-2 px-3 rounded-xl bg-primary text-sm text-white">
                  {item.duration}
                </p>
              </div>
              <div className="rating&title flex flex-col flex-1  w-3/4 ">
                <div className="flex items-center gap-1">
                  <div className="icon text-orange-500 flex gap-x-1 text-sm">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < item.rating ? "text-orange-500" : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="review text-sm  ">
                    ( {item.reviews.length} Reviews)
                  </p>
                </div>
                <h2 className="  xs:text-lg lg:w-[4/5] lg:text-xl font-bold flex-1 ">
                  {item.name}
                </h2>
              </div>
              <div
                className={`author py-2 px-3 md:px-5 md:py-3 rounded-md  flex items-center xs:justify-between ${theme === "light" ? "bg-secondaryTextD" : "text-secondaryTextD bg-[#121745]"}`}
              >
                <div className="detail flex items-center gap-x-2.5">
                  <div
                    className={`img w-11 aspect-square rounded-full ${theme === "light" ? "img w-11 aspect-square rounded-full bg-primaryDark" : "bg-secondaryText"}`}
                  ></div>
                  <div className="author_info leading-0 flex flex-col gap-y-5">
                    <div className="name font-bold leading-0">
                      {item.teacher.name}
                    </div>
                    <div className="title uppercase text-xs text-secondaryText leading-0">
                      {item.teacher.title}
                    </div>
                  </div>
                </div>
                <div className="course_info flex flex-col items-end gap-5">
                  <p className="price leading-0 text-primary text-xl font-bold">
                    ${item.price}
                  </p>
                  <p className="lessons leading-0 font-medium text-sm w-max xs:w-auto text-secondary">
                    {item.lessons} lessons
                  </p>
                </div>
              </div>
              <div className={`img absolute w-[45%] aspect-square top-0 right-0 -translate-y-1/2 border-4 md:border-8  rounded-full ${theme === "light" ? "border-secondaryTextD" : "border-primary"}`}>
                <img className=" w-full h-full  " src={placeImg} alt="course" />
                <div
                  onClick={() => toggleLike(index)}
                  className="heart text-2xl absolute top-1/9 left-0 text-white -translate-1/2 bg-secondary p-2 rounded-full group-hover:bg-primary duration-300 "
                >
                  {likes[index] ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeCourse;

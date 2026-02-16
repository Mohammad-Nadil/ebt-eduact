import React from "react";
import Container from "../Container";
import { useTheme } from "../../context/ThemeContext";
import courses from "../../api/course.api";
import bg from "/images/home-images/blogBg.png";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";

const HomeBlog = () => {
  const { theme } = useTheme();
  const item = courses.slice(4, 6);

  return (
    <section
      id="blog"
      className={`py-10 sm:py-20 xl:py-30 ${theme === "light" ? "bg-white" : "bg-primaryDark   "}`}
    >
      <Container
        className={`flex flex-col gap-y-8 sm:gap-y-10 lg:gap-y-16 xl:gap-y-24`}
      >
        <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
          <p className="text-lg sm:text-2xl text-primary">Latest Blog</p>
          <h2
            className={` xs:text-xl sm:text-4xl ${theme === "light" ? "text-primaryText" : "text-secondaryTextD"}`}
          >
            Latest Updates & Articles
          </h2>
        </div>
        <div class="parent flex flex-col md:grid  sm:grid-cols-3 sm:grid-rows-2 gap-5 xl:gap-8 2xl:gap-10">
          {item.map((item, index) => (
            <div
              class={`div1 col-span-2 w-full h-full  rounded-xl overflow-hidden flex flex-col sm:flex-row  drop-shadow-xl ${theme === "light" ? "bg-white text-primaryText" : "bg-primaryText text-secondaryTextD drop-shadow-secondaryTextD/5"}`}
            >
              <div
                className={`img sm:w-2/5 aspect-video sm:aspect-auto  ${theme === "light" ? "bg-primaryDark" : "bg-secondaryTextD/50"}`}
              ></div>
              <div className="info sm:w-3/5 flex flex-col gap-y-5 2xl:gap-y-10 pt-5 sm:py-5 px-2 xs:px-4 xl:py-8 xl:px-7.5 ">
                <div className=" w-auto flex items-center">
                  <p className="font-semibold py-2 px-3 rounded-xl bg-primary text-sm text-white">
                    Development
                  </p>
                </div>

                <h2 className="  xs:text-lg lg:w-[4/5] lg:text-3xl font-bold flex-1 ">
                  {item.name}
                </h2>
                <div
                  className={`author py-2 px-3 md:px-5 md:py-3 rounded-md  flex items-center justify-between ${theme === "light" ? "bg-secondaryTextD" : "text-secondaryTextD bg-[#121745]"}`}
                >
                  <div className="detail flex items-center gap-x-2.5">
                    <div
                      className={`img w-11 aspect-square rounded-full ${theme === "light" ? "img w-11 aspect-square rounded-full bg-primaryDark" : "bg-secondaryText"}`}
                    ></div>
                    <div className="author_info leading-0 flex flex-col gap-y-5">
                      <div className="name font-bold leading-0">
                        {item.teacher.name}
                      </div>
                      <div className=" uppercase text-xs text-secondaryText leading-0">
                        {item.teacher.title }
                      </div>
                    </div>
                  </div>
                  <div className="course_info flex flex-col items-end gap-5">
                    <p className="lessons leading-0 font-medium text-sm w-max xs:w-auto text-secondary">
                      {item.lessons} lessons
                    </p>
                  </div>
                </div>
                <div className="auth0r"></div>
              </div>
            </div>
          ))}

          <div
            class={`div3 relative rounded-xl md:row-span-2 md:row-start-1 md:col-start-3 overflow-hidden h-full flex flex-col gap-y-5 drop-shadow-xl p-5 xl:p-10 2xl:p-14 ${theme === "light" ? "bg-primaryDark  " : "bg-[#152B4A] text-secondaryTextD drop-shadow-secondaryTextD/5"}`}
          >
            <div className="msg flex-1  flex flex-col items-center  justify-center gap-y-5">
              <div className="icon text-white text-6xl p-5 rounded-full bg-primary ">
                <LiaEnvelopeOpenTextSolid />
              </div>
              <p className="text-3xl font-bold text-white xl:w-4/5 text-center ">
                Subscribe to our newsletter for daily updates
              </p>
            </div>
            <div className="input flex flex-col gap-y-5 relative z-20">
              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className={` py-5 px-6 rounded-xl w-full ${theme === "light" ? "bg-white text-primaryDark" : "bg-primaryText text-secondaryTextD"} `}
              />
              <button className="py-6 text-center font-bold text-lg bg-primary rounded-xl text-white hover:text-2xl duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-center text-lg text-white ">
              Get Latest News and keep Update
            </p>
            <img
              className="absolute w-full h-1/3 bottom-0 left-0 z-0"
              src={bg}
              alt="blog"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBlog;

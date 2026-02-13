import React from "react";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import Category from "../components/home/Category";
import HomeAbout from "../components/home/HomeAbout";
import HomeCourse from "../components/home/HomeCourse";
import { useTheme } from "../context/ThemeContext";
import bgLight from "/images/home-images/serviceBg.png";
import bgDark from "/images/home-images/serviceBgDark.png";
import HomeRegister from "../components/home/HomeRegister";
import HomeFeedback from "../components/home/HomeFeedback";
import Team from "../components/home/Team";

const Home = () => {
  const { theme } = useTheme();
  let bg;
  if (theme === "light") {
    bg = bgLight;
  } else {
    bg = bgDark;
  }
  return (
    <div>
      <Banner />
      <div className="relative overflow-hidden">
        <img
          className="absolute top-0 left-0 -translate-y-1/4 w-full"
          src={bg}
          alt="bg"
        />
        <Service />
        <HomeAbout />
      </div>
      <Category />
      <HomeCourse />
      <HomeRegister />
      <HomeFeedback />
      <Team />
    </div>
  );
};

export default Home;

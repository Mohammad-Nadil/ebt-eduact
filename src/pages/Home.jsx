import React from "react";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import HomeAbout from "../../public/images/home-images/HomeAbout";
import Category from "../components/home/Category";
import SimpleSlider from "../components/home/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <HomeAbout />
      <SimpleSlider />
    </div>
  );
};

export default Home;

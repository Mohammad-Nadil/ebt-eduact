import React from "react";
import Banner from "../components/home/Banner";
import Service from "../components/home/Service";
import HomeAbout from "../components/home/HomeAbout";
import Category from "../components/home/Category";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <HomeAbout />
      <Category />
    </div>
  );
};

export default Home;

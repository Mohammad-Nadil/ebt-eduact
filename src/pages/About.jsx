import React from "react";
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <>
      <div className="w-full font-urbanist">
        {/* Spacer for Absolute Navbar */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>

        {/* Your FAQ Section */}
        <div className="bg-black text-white h-[397px] flex items-center justify-center  font-urbanist">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            About
            <p className="font-normal text-[16px] text-center mt-2">Home  /  About </p>
          </h1>

        </div>
      </div>
      {/* banner section start */}
      <AboutSection/>
      {/* banner section end */}


    </>
  );
};

export default About;

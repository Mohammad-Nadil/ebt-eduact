import React from "react";
import AboutSection from "../components/about/AboutSection";
import Container from "../components/Container";
import PopularCourse from "../components/about/PopularCourse";
import TestimonialSection from "../components/about/TestimonialSection";
import TeamSection from "../components/about/TeamSection";
import SubscribeBanner from "../components/about/SubscribeBanner";

const About = () => {
  return (
    <>
      <div className="w-full font-urbanist">
        {/* Top Section */}
        <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            About
            <p className="font-normal text-[16px] text-center mt-2">
              Home / About{" "}
            </p>
          </h1>
        </div>
      </div>

      <AboutSection />
      <PopularCourse />
      <TestimonialSection />
      <TeamSection />
      <SubscribeBanner />
    </>
  );
};

export default About;

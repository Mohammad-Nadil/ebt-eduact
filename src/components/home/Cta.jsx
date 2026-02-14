import React from "react";
import Container from "../Container";
import bg from "/images/home-images/CTA.png";
import imageBg from "/images/home-images/ctaBg.png";
import girlVector from "/images/home-images/ctaImg.png";
import vector from "/images/home-images/ctaVector.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Cta = () => {
  return (
    <section id="cta" className="bg-secondaryTextD py-10 sm:py-20 xl:py-30 overflow-x-clip px-3">
      <Container
        className="flex items-center justify-between bg-cover xl:bg-contain  bg-no-repeat bg-center px-5 lg:px-40 py-5 xl:py-0 sm:rounded-3xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text flex flex-col i gap-y-7 lg:gap-y-10 text-white pt-12 relative">
          <p className="absolute top-0 right-0  text-3xl lg:text-5xl text-secondary font-waterBrush">
            Get your quality
          </p>
          <p className=" text-3xl lg:text-4xl xl:text-5xl font-bold">
            Skills certificate <br /> from the edulerns
          </p>
          <div className="btn">
            <button className="text-base sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10 ">
              <p>Join Now</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="img  relative hidden sm:block border w-2/5 md:w-1/3  aspect-square rounded-full">
          <div className="bgImg w-[130%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
            <img className="h-full w-full relative z-10" src={imageBg} alt="" />
          </div>
          <div className="h-full w-full relative rounded-full bg-primaryText z-20"></div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;

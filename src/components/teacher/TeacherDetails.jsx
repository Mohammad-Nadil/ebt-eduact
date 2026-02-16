import React from "react";
import Container from "../Container";
import img from "/images/Men.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const TeacherDetails = () => {
  return (
    <section className="teacher-details">
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl">
          TEACHER DETAILS
        </h2>
        <p className="sm:text-xl">Home / Teacher</p>
      </div>

      <Container className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 py-12 lg:py-20">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            className="w-full object-cover rounded-lg"
            src={img}
            alt="William Ketty"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#04090F] mb-2">
            Hello, I'm William Ketty
          </h2>
          <p className="text-[#FF6634] font-semibold mb-6">UI/UX Designer</p>

          <p className="text-gray-700 leading-relaxed mb-4">
            There are many variations of passages of Lorem Ipsum avagtilable, but the majority have suffered alteration in some form, by injected hudfdfmour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent pe
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolo
          </p>

          {/* Skills Progress Bars */}
          <div className="space-y-4 mb-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">
                  UI / UX Design
                </span>
                <span className="font-semibold text-gray-700">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#4F5DE4] h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-[#FF6634] hover:text-white hover:border-[#FF6634] transition-colors rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-[#FF6634] hover:text-white hover:border-[#FF6634] transition-colors rounded"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-[#FF6634] hover:text-white hover:border-[#FF6634] transition-colors rounded"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-[#FF6634] hover:text-white hover:border-[#FF6634] transition-colors rounded"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Get in Touch Button */}
          <NavLink to="/teacher-register" className="mt-8 w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10">
            Get In Touch
            <span>
                <IoIosArrowRoundForward className="text-[30px]"/>
            </span>
          </NavLink>
        </div>
      </Container>

      {/* Courses Section */}
      <div className="bg-gray-50 py-12">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-10">
            <p className="text-[#4F5DE4] mb-1 font-bold text-[18px] flex items-center justify-center font-urbanist">
              Checkout Now
              <span className="flex items-center text-[#F57005] ml-1">
                <RiArrowRightSFill size={20} />
                <RiArrowRightSFill size={20} className="-ml-3" />
                <RiArrowRightSFill size={20} className="-ml-3" />
                <RiArrowRightSFill size={20} className="-ml-3" />
              </span>
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1D2044] font-urbanist">
              My All Courses
            </h3>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 pb-6"
              >
                {/* Card Image Area with Double Curve Shape */}
                <div className="relative bg-[#152946] h-52 flex items-end justify-center overflow-hidden">
                  {/* Heart Icon */}
                  <button className="absolute top-4 left-4 w-8 h-8 bg-[#F57005] rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <FaHeart size={14} />
                  </button>

                  {/* The Orange Curve Layer */}
                  <div className="absolute bottom-0 w-[110%] h-20 bg-[#F57005] rounded-[100%] translate-y-8"></div>
                  {/* The Main Dark Blue Curve Layer */}
                  <div className="absolute bottom-0 w-[110%] h-24 bg-[#152946] rounded-[100%] translate-y-[-10px]"></div>
                </div>

                {/* Content Area */}
                <div className="px-5 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#1D2044] text-white px-3 py-1 text-[12px] rounded font-medium">
                      20 Hours
                    </span>
                    <div className="text-right">
                      <p className="text-[#F57005] font-bold text-lg leading-none">
                        $473.00
                      </p>
                      <p className="text-gray-400 text-[10px] uppercase font-semibold">
                        15 Lessons
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-[#F57005] text-xs">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="text-gray-500 text-[12px]">
                      (25 Reviews)
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-[18px] text-[#1D2044] leading-tight hover:text-[#4F5DE4] cursor-pointer transition-colors pr-10">
                    Management Consultants in Competitive Markets
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TeacherDetails;

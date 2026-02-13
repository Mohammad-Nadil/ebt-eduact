import React from "react";
import Container from "./Container";
import logo from "/images/Dark Logo.png";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BsEnvelopeOpen, BsTwitter, BsYoutube } from "react-icons/bs";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import vector from "/images/Vector.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundImage: `url(${vector})` }}
        className={`bg-primaryText py-10 sm:py-16 xl:py-32 `}
      >
        <Container
          className={`flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:flex flex-col xl:flex-row items-start justify-between  text-white px-3 gap-y-12 `}
        >
          <div
            className="main max-w-66 flex flex-col gap-y-7 col-span-4
         "
          >
            <div className="img">
              <img className="w-full" src={logo} alt="logo" />
            </div>
            <p className="text-lg text-[#b3ade1]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <div className="links flex gap-x-4 items-center">
              <div className="text-lg w-7 aspect-square grid place-content-center bg-primary/20 rounded-full">
                <FaFacebook />
              </div>
              <div className="text-lg w-7 aspect-square grid place-content-center bg-primary/20 rounded-full">
                <LiaLinkedin />
              </div>
              <div className="text-lg w-7 aspect-square grid place-content-center bg-primary/20 rounded-full">
                <BsTwitter />
              </div>
              <div className="text-lg w-7 aspect-square grid place-content-center bg-primary/20 rounded-full">
                <BsYoutube />
              </div>
            </div>
          </div>
          <div className="links col-span-1 flex flex-col gap-y-8">
            <div className="relative">
              <p className="text-2xl font-semibold  ">Quick Links</p>
              <div className="blue absolute top-[120%] left-0 w-11 h-1 bg-primary">
                <div className="orange absolute top-1/2 -bg-conic-120translate-y-1/2 left-full w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>

            <ul className="flex flex-col gap-y-2 text-lg text-[#b3ade1] font-normal">
              <li>Latest Courses</li>
              <li>Mission & Vision</li>
              <li>Our Approach</li>
              <li>Exclusive Advisors</li>
              <li>Join a Carrer</li>
            </ul>
          </div>
          <div className="explore col-span-1 flex flex-col gap-y-8">
            <div className="relative">
              <p className="text-2xl font-semibold  ">Explore</p>
              <div className="blue absolute top-[120%] left-0 w-11 h-1 bg-primary">
                <div className="orange absolute top-1/2 -bg-conic-120translate-y-1/2 left-full w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>

            <ul className="flex flex-col gap-y-2 text-lg text-[#b3ade1] font-normal">
              <li>About Us</li>
              <li>Upcoming Events</li>
              <li>Blog & News</li>
              <li>FAQ & Question</li>
              <li>Testimonial</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="contact col-span-1 flex flex-col gap-y-8">
            <div className="relative">
              <p className="text-2xl font-semibold  ">Contact Us</p>
              <div className="blue absolute top-[120%] left-0 w-11 h-1 bg-primary">
                <div className="orange absolute top-1/2 -bg-conic-120translate-y-1/2 left-full w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 text-lg text-[#b3ade1] font-normal">
              <div className="address flex items-center gap-x-4">
                <CiLocationOn className="text-2xl text-secondary" />
                <p>27 Division St, New York, NY 10002, USA</p>
              </div>
              <div className="number flex items-center gap-x-4">
                <CiPhone className="text-2xl text-secondary" />
                <p>(303) 555-0107</p>
              </div>
              <div className="mail flex items-center gap-x-4">
                <BsEnvelopeOpen className="text-2xl text-secondary" />
                <p>example@gmail.com</p>
              </div>
              <div className="input border-primary/20 border rounded-md w-full flex">
                <input
                  type="text"
                  className="p-3 sm:p-5 placeholder:text-[#b3ade1] placeholder:text-lg w-3/4 sm:w-auto"
                  placeholder="Email Address"
                />
                <button className="p-3 sm:p-5 bg-secondary  text-white font-bold rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <p className="copyright text-[#b3ade1] text-center py-3 text-sm md:py-8 bg-[#1F1944]">
        © Copyright 2023 by Company.com
      </p>
    </>
  );
};

export default Footer;

import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-black pt-20 pb-32">
        <Container>
          <h1 className="text-white text-center text-7xl font-bold mb-4">BLOG DETAILS</h1>
          <p className="text-white text-center">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>

        </Container>
      </div>
      <div>
        <Container className="my-[100px]">
          <div className="flex justify-between">
            <div className="left">
           <div className="w-[868px] h-[449px] bg-[#152B4A] rounded-2xl"></div>
           <div className="flex gap-[40px] items-center mt-[40px] ">
            <h2 className="text-white text-[14px] leading-[26px] font-semibold bg-[#4F5DE4] p-[2px] rounded-lg">Development</h2>
           <div className="flex items-center gap-[10px]">
             <span className="text-[#F57005]"><CiClock2 /></span>
             <h3 className="font-semibold font-urbanist text-[16px] leading-[26px] text-[#697585]">26 Mar, 2023</h3>
           </div>
           </div>
            <h1 className="font-bold font-urbanist text-[32px] leading-[47px] text-[#2A254D] mt-[20px] mb-[30px]">The Complete Web Developer Guideline 2023</h1>
            <p className="font-urbanist font-semibold text-[16px] leading-[32px] spacing-[2%] text-[#697585]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a <br /> passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br /> Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum <br /> lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum <br /> accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit <br /> amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor

          </p>
          <p className="font-urbanist font-semibold text-[16px] leading-[32px] spacing-[2%] text-[#697585] py-[50px]">
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi <br /> non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. <br /> Mauris gravida lacus metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget nulla in pharetra. Vestibulum <br />vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum. Nam erat felis, mattis ac massa 
          </p>
          <div className="flex justify-between items-center border-t border-b py-[40px] border-[#E4E4E4]">
            <div className="flex gap-2 items-center">
              <h1 className="font font-urbanist font-bold text-[24px] text-[#2A254D] leading-[26px] ">Tags</h1>
              <div className="flex gap-[8px]  ml-[20px]">
                <button className="py-[14px] px-[16px] bg-[#F6F6F6] text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Marketing</button>
                <button className="py-[14px] px-[16px] bg-[#F6F6F6] text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Development</button>
                <button className="py-[14px] px-[16px] bg-[#F6F6F6] text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Design</button>
              </div>

            </div>
            <div className="flex gap-[21px] items-center ">
             <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center"><FaFacebookF /></div>
             <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center"> <FaLinkedinIn /></div>
              <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center"><FaTwitter /></div>
              <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center"><FaYoutube /></div>
            </div>
          </div>
          </div>
          <div className="right">
            <input className="bg-[#F57005] w-[416px] h-[80px] rounded-lg text-white"  type="text" placeholder="Type here" />
          </div>
          </div>
        </Container>
    </div>
  </div>
  );
};

export default BlogDetails;

import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import { CiClock2, CiSearch } from "react-icons/ci";
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

              {/* Tags */}
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
          
              {/* Comments  */}
              <div className="pt-[50px]">
                <span className="text-[24px] font-bold font-urbanist text-[#2A254D]">2 Comments</span>
                <div className="border-b-2 border-[#E4E4E4] flex gap-[30px] items-center mt-[60px] pb-[66px]">
                  <div className="h-[165px] w-[165px] bg-[#152B4A] rounded-full"></div>
                  <div>
                    <h1 className="font-bold font-urbanist text-[24px] leading-[26px] text-[#2A254D]">David Shon</h1>
                    <p className="font-semibold font-urbanist text-[#697585] text-[16px] leading-[32px] mt-[20px] mb-[30px]">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna <br /> hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id <br /> hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
                    <button className="text-[#697585] py-[10px] px-[23px] bg-[#F6F6F6] font-bold font-urbanist text-[16px] leading-[47px] rounded-2xl ">Reply</button>
                  </div>
                </div>
                <div className="border-b-2 border-[#E4E4E4] flex gap-[30px] items-center mt-[60px] pb-[66px]">
                  <div className="h-[165px] w-[165px] bg-[#152B4A] rounded-full"></div>
                  <div>
                    <h1 className="font-bold font-urbanist text-[24px] leading-[26px] text-[#2A254D]">Jhon Watchson</h1>
                    <p className="font-semibold font-urbanist text-[#697585] text-[16px] leading-[32px] mt-[20px] mb-[30px]">Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna <br /> hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id <br /> hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
                    <button className="text-[#697585] py-[10px] px-[23px] bg-[#F6F6F6] font-bold font-urbanist text-[16px] leading-[47px] rounded-2xl ">Reply</button>
                  </div>
                </div>
              </div>

              {/* input */}
              <div >
                <h1 className="mt-[50px] text-[24px] font-bold font-urbanist text-[#2A254D]">Leave a Comment</h1>
                <div className="flex justify-between mt-[40px] mb-[20px]">
                  <input type="text" placeholder="Your Name" className="w-[424px] h-[60px] bg-[#F6F6F6] text-[#697585] text-[16px] font-urbanist font-semibold border-none pl-[30px] outline-0"/>
                  <input type="email" placeholder="Email Address" className="w-[424px] h-[60px] bg-[#F6F6F6] text-[#697585] text-[16px] font-urbanist font-semibold border-none pl-[30px] outline-0" />
                </div>
                <input type="text" placeholder="Write a message" className="w-full h-[211px] bg-[#F6F6F6] text-[#697585] text-[16px] font-urbanist font-semibold border-none pl-[30px] outline-0" />
                <div className="mt-[40px]">
                  <button className="py-[19px] px-[32px] bg-[#F57005] text-white rounded-2xl ">Submit Comment </button>
                </div>



              </div>
          
            </div>
            {/* search */}
          <div className="right">
            <div className="relative">
                <input className=" bg-[#F57005] w-[416px] h-[80px] rounded-lg text-white pl-[59px] text-[16px] font-urbanist outline-0"  type="text" placeholder="Type here" />
                <div className="absolute h-[20px] w-[20px] top-[33px] left-[30px] text-white"><CiSearch /></div>
            </div>
            {/* latest part */}
            <div>
              
            </div>

          </div>
        </div>
        </Container>
    </div>
  </div>
  );
};

export default BlogDetails;

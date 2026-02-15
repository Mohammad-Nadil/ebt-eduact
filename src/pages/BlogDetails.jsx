import React from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import { CiClock2, CiSearch } from "react-icons/ci";
import {FaAngleDoubleRight, FaFacebookF, FaLinkedinIn, FaRegCommentDots, FaTwitter, FaYoutube } from "react-icons/fa";

const BlogDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="bg-black pt-20 pb-32">
        <Container>
          <h1 className="text-white text-center text-4xl md:text-5xl lg:text-7xl font-bold mb-4 px-4">BLOG DETAILS</h1>
          <p className="text-white text-center text-sm md:text-base">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>
        </Container>
      </div>

      <div className="py-12 md:py-20 lg:py-[120px]">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[32px] px-4 lg:px-0">
            {/* Left Content */}
            <div className="left w-full lg:w-auto">
              <div className="w-full lg:w-[868px] h-[250px] md:h-[350px] lg:h-[449px] bg-[#152B4A] rounded-2xl"></div>
              
              <div className="flex flex-wrap gap-4 md:gap-[40px] items-center mt-[40px]">
                <h2 className="text-white text-[14px] leading-[26px] font-semibold bg-[#4F5DE4] p-[2px] px-4 rounded-lg">Development</h2>
                <div className="flex items-center gap-[10px]">
                  <span className="text-[#F57005]"><CiClock2 /></span>
                  <h3 className="font-semibold font-urbanist text-[16px] leading-[26px] text-[#697585]">26 Mar, 2023</h3>
                </div>
              </div>

              <h1 className="font-bold font-urbanist text-2xl md:text-3xl lg:text-[32px] leading-tight lg:leading-[47px] text-[#2A254D] mt-[20px] mb-[30px]">
                The Complete Web Developer Guideline 2023
              </h1>

              <p className="font-urbanist font-semibold text-[14px] md:text-[16px] leading-7 md:leading-[32px] text-[#697585]">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor
              </p>

              <p className="font-urbanist font-semibold text-[14px] md:text-[16px] leading-7 md:leading-[32px] text-[#697585] py-[30px] md:py-[50px]">
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Mauris gravida lacus metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget nulla in pharetra. Vestibulum vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum. Nam erat felis, mattis ac massa 
              </p>

              {/* Tags */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-b py-[30px] md:py-[40px] border-[#E4E4E4] gap-6">
                <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
                  <h1 className="font font-urbanist font-bold text-[20px] md:text-[24px] text-[#2A254D] leading-[26px]">Tags</h1>
                  <div className="flex flex-wrap gap-[8px] md:ml-[20px]">
                    <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Marketing</button>
                    <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Development</button>
                    <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] rounded-2xl">Design</button>
                  </div>
                </div>
                
                <div className="flex gap-[15px] md:gap-[21px] items-center">
                  <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300"><FaFacebookF /></div>
                  <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300"><FaLinkedinIn /></div>
                  <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300"><FaTwitter /></div>
                  <div className="h-[40px] w-[40px] rounded-full bg-[#F6F6F6] text-[#2A254D] flex justify-center items-center cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300"><FaYoutube /></div>
                </div>
              </div>
          
              {/* Comments */}
              <div className="pt-[40px] md:pt-[50px]">
                <span className="text-[20px] md:text-[24px] font-bold font-urbanist text-[#2A254D]">2 Comments</span>
                
                <div className="border-b-2 border-[#E4E4E4] flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-start md:items-center mt-[40px] md:mt-[60px] pb-[40px] md:pb-[66px]">
                  <div className="h-[100px] w-[100px] md:h-[165px] md:w-[165px] bg-[#152B4A] rounded-full flex-shrink-0"></div>
                  <div className="w-full">
                    <h1 className="font-bold font-urbanist text-[20px] md:text-[24px] leading-[26px] text-[#2A254D]">David Shon</h1>
                    <p className="font-semibold font-urbanist text-[#697585] text-[14px] md:text-[16px] leading-7 md:leading-[32px] mt-[15px] md:mt-[20px] mb-[20px] md:mb-[30px]">
                      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    </p>
                    <button className="text-[#697585] py-[8px] md:py-[10px] px-[18px] md:px-[23px] bg-[#F6F6F6] font-bold font-urbanist text-[14px] md:text-[16px] leading-[47px] rounded-2xl hover:bg-[#F57005] hover:text-white transition duration-300">Reply</button>
                  </div>
                </div>

                <div className="border-b-2 border-[#E4E4E4] flex flex-col md:flex-row gap-[20px] md:gap-[30px] items-start md:items-center mt-[40px] md:mt-[60px] pb-[40px] md:pb-[66px]">
                  <div className="h-[100px] w-[100px] md:h-[165px] md:w-[165px] bg-[#152B4A] rounded-full flex-shrink-0"></div>
                  <div className="w-full">
                    <h1 className="font-bold font-urbanist text-[20px] md:text-[24px] leading-[26px] text-[#2A254D]">Jhon Watchson</h1>
                    <p className="font-semibold font-urbanist text-[#697585] text-[14px] md:text-[16px] leading-7 md:leading-[32px] mt-[15px] md:mt-[20px] mb-[20px] md:mb-[30px]">
                      Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    </p>
                    <button className="text-[#697585] py-[8px] md:py-[10px] px-[18px] md:px-[23px] bg-[#F6F6F6] font-bold font-urbanist text-[14px] md:text-[16px] leading-[47px] rounded-2xl hover:bg-[#F57005] hover:text-white transition duration-300">Reply</button>
                  </div>
                </div>
              </div>

              {/* Leave Comment Form */}
              <div>
                <h1 className="mt-[40px] md:mt-[50px] text-[20px] md:text-[24px] font-bold font-urbanist text-[#2A254D]">Leave a Comment</h1>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-5 mt-[30px] md:mt-[40px] mb-[15px] md:mb-[20px]">
                  <input type="text" placeholder="Your Name" className="w-full md:w-[48%] lg:w-[424px] h-[60px] bg-[#F6F6F6] text-[#697585] text-[14px] md:text-[16px] font-urbanist font-semibold border-none pl-[20px] md:pl-[30px] outline-0 rounded-lg"/>
                  <input type="email" placeholder="Email Address" className="w-full md:w-[48%] lg:w-[424px] h-[60px] bg-[#F6F6F6] text-[#697585] text-[14px] md:text-[16px] font-urbanist font-semibold border-none pl-[20px] md:pl-[30px] outline-0 rounded-lg" />
                </div>
                <textarea placeholder="Write a message" className="w-full h-[150px] md:h-[211px] bg-[#F6F6F6] text-[#697585] text-[14px] md:text-[16px] font-urbanist font-semibold border-none p-[20px] md:pl-[30px] outline-0 rounded-lg resize-none" />
                <div className="mt-[30px] md:mt-[40px]">
                  <button className="py-[15px] md:py-[19px] px-[24px] md:px-[32px] bg-[#F57005] text-white rounded-2xl font-semibold hover:bg-[#d65f04] transition duration-300">Submit Comment</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="right w-full lg:w-auto">
              {/* Search */}
              <div className="relative">
                <input className="bg-[#F57005] w-full lg:w-[416px] h-[70px] md:h-[80px] rounded-lg text-white pl-[50px] md:pl-[59px] text-[14px] md:text-[16px] font-urbanist outline-0 placeholder:text-white" type="text" placeholder="Type here" />
                <div className="absolute h-[20px] w-[20px] top-[26px] md:top-[33px] left-[20px] md:left-[30px] text-white text-xl"><CiSearch /></div>
              </div>

              {/* Latest Post */}
              <div className="mt-[30px] p-[20px] md:p-[30px] bg-white rounded-2xl hover:shadow-lg transition duration-300">
                <h1 className="font-bold font-urbanist text-[20px] md:text-[24px] leading-[26px] text-[#2A254D] mb-[30px]">Latest Post</h1>

                <div className="flex gap-[15px] md:gap-[20px] items-center border-t-2 border-dotted border-[#F57005] pt-[20px] md:pt-[30px]">
                  <div className="h-[70px] w-[70px] md:h-[89px] md:w-[89px] bg-[#152B4A] rounded-2xl flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-[8px] md:gap-[10px]">
                      <span className="text-[#F57005]"><CiClock2 /></span>
                      <h3 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">26 Mar, 2023</h3>
                    </div>
                    <h1 className="font-bold font-urbanist text-[16px] md:text-[20px] lg:text-[24px] leading-tight md:leading-[26px] text-[#2A254D] mt-[12px] md:mt-[20px]">The Complete Web Developer Guideline 2023</h1>
                  </div>
                </div>

                <div className="flex gap-[15px] md:gap-[20px] items-center border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px]">
                  <div className="h-[70px] w-[70px] md:h-[89px] md:w-[89px] bg-[#152B4A] rounded-2xl flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-[8px] md:gap-[10px]">
                      <span className="text-[#F57005]"><CiClock2 /></span>
                      <h3 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">26 Mar, 2023</h3>
                    </div>
                    <h1 className="font-bold font-urbanist text-[16px] md:text-[20px] lg:text-[24px] leading-tight md:leading-[26px] text-[#2A254D] mt-[12px] md:mt-[20px]">The Complete Web Developer Guideline 2023</h1>
                  </div>
                </div>

                <div className="flex gap-[15px] md:gap-[20px] items-center border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px]">
                  <div className="h-[70px] w-[70px] md:h-[89px] md:w-[89px] bg-[#152B4A] rounded-2xl flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-[8px] md:gap-[10px]">
                      <span className="text-[#F57005]"><CiClock2 /></span>
                      <h3 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">26 Mar, 2023</h3>
                    </div>
                    <h1 className="font-bold font-urbanist text-[16px] md:text-[20px] lg:text-[24px] leading-tight md:leading-[26px] text-[#2A254D] mt-[12px] md:mt-[20px]">The Complete Web Developer Guideline 2023</h1>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="p-[20px] md:p-[30px] bg-white rounded-2xl mt-[30px]">
                <h1 className="font-bold font-urbanist text-[20px] md:text-[24px] leading-[26px] text-[#2A254D] mb-[20px] md:mb-[30px]">Categories</h1>

                <div className="border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 md:px-4 py-2 -mx-3 md:-mx-4 rounded-lg">
                  <div className="flex gap-[8px] items-center">
                    <span className="text-[#F57005]"><FaAngleDoubleRight /></span>
                    <h2 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">Web Development</h2>
                  </div>
                </div>

                <div className="border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 md:px-4 py-2 -mx-3 md:-mx-4 rounded-lg">
                  <div className="flex gap-[8px] items-center">
                    <span className="text-[#F57005]"><FaAngleDoubleRight /></span>
                    <h2 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">Social Marketing</h2>
                  </div>
                </div>

                <div className="border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 md:px-4 py-2 -mx-3 md:-mx-4 rounded-lg">
                  <div className="flex gap-[8px] items-center">
                    <span className="text-[#F57005]"><FaAngleDoubleRight /></span>
                    <h2 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">Technology</h2>
                  </div>
                </div>

                <div className="border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 md:px-4 py-2 -mx-3 md:-mx-4 rounded-lg">
                  <div className="flex gap-[8px] items-center">
                    <span className="text-[#F57005]"><FaAngleDoubleRight /></span>
                    <h2 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">Business & Finance</h2>
                  </div>
                </div>

                <div className="border-t-2 border-[#E4E4E4] pt-[20px] md:pt-[30px] mt-[20px] md:mt-[30px] hover:shadow-lg transition-all duration-300 cursor-pointer px-3 md:px-4 py-2 -mx-3 md:-mx-4 rounded-lg">
                  <div className="flex gap-[8px] items-center">
                    <span className="text-[#F57005]"><FaAngleDoubleRight /></span>
                    <h2 className="font-semibold font-urbanist text-[14px] md:text-[16px] leading-[26px] text-[#697585]">Digital Solution</h2>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="p-[20px] md:p-[30px] bg-white rounded-2xl mt-[30px] hover:shadow-lg transition duration-300">
                <h1 className="font font-urbanist font-bold text-[20px] md:text-[24px] text-[#2A254D] leading-[26px] mb-[20px] md:mb-[30px]">Tags</h1>
                <div className="border-t-2 border-[#F57005] border-dotted pt-[20px] md:pt-[30px]">
                  <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300 mb-2">Marketing</button>
                  <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] mx-[7px] cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300 mb-2">Development</button>
                  <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300 mb-2">Design</button>
                  <br />
                  <button className="py-[10px] md:py-[14px] px-[12px] md:px-[16px] bg-[#F6F6F6] text-[14px] md:text-[16px] font-semibold font-urbanist leading-[26px] text-[#697585] mt-[5px] md:mt-[10px] cursor-pointer hover:bg-[#F57005] hover:text-white transition duration-300">Digital</button>
                </div>
              </div>

              {/* Comments */}
              <div className="p-[20px] md:p-[30px] bg-white rounded-2xl mt-[30px] hover:shadow-lg transition duration-300">
                <h1 className="mb-[20px] md:mb-[30px] text-[20px] md:text-[24px] font-bold font-urbanist text-[#2A254D]">Comments</h1>
                <div className="border-t-2 border-dotted border-[#F57005] pt-[20px] md:pt-[30px]">
                  <div className="flex gap-[12px] md:gap-[14px] items-center mb-[20px] md:mb-[30px]">
                    <span className="bg-[#F6F6F6] p-[12px] md:p-[15px] rounded-full flex-shrink-0"><FaRegCommentDots /></span>
                    <h2 className="text-[14px] md:text-[16px] text-[#697585] font-semibold font-urbanist">There are many variations of Lorem available Here</h2>
                  </div>
                  <div className="flex gap-[12px] md:gap-[14px] items-center mb-[20px] md:mb-[30px]">
                    <span className="bg-[#F57005] p-[12px] md:p-[15px] text-white rounded-full flex-shrink-0"><FaRegCommentDots /></span>
                    <h2 className="text-[14px] md:text-[16px] text-[#697585] font-semibold font-urbanist">There are many variations of Lorem available Here</h2>
                  </div>
                  <div className="flex gap-[12px] md:gap-[14px] items-center mb-[20px] md:mb-[30px]">
                    <span className="bg-[#F6F6F6] p-[12px] md:p-[15px] rounded-full flex-shrink-0"><FaRegCommentDots /></span>
                    <h2 className="text-[14px] md:text-[16px] text-[#697585] font-semibold font-urbanist"><span className="font-bold text-[#2A254D]">Watson Doe on</span> Template:variations of Lorem available, but</h2>
                  </div>
                  <div className="flex gap-[12px] md:gap-[14px] items-center mb-[20px] md:mb-[30px]">
                    <span className="bg-[#F6F6F6] p-[12px] md:p-[15px] rounded-full flex-shrink-0"><FaRegCommentDots /></span>
                    <h2 className="text-[14px] md:text-[16px] text-[#697585] font-semibold font-urbanist">There are many variations of Lorem available Here</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
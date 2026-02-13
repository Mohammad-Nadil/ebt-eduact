import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";

const Blog = () => {
  return (
    <div>
    
      <div className="bg-white h-24"></div>

      {/* Banner */}
      <div className="bg-black pt-20 pb-32">
        <Container>
          <h1 className="text-white text-center text-7xl font-bold mb-4">BLOG</h1>
          <p className="text-white text-center">
            <NavLink to="/">Home</NavLink> / <span>Blog</span>
          </p>
        </Container>
      </div>

      {/* Blog Cards */}
      <div className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-3 gap-[36px]">
            
            {/* Card 1 */}
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[330px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs">Development</span>
                  <span className="text-orange-500 text-sm">26 Mar, 2023</span>
                </div>
                <h3 className="text-lg font-bold mb-4">The Complete Web Developer Guideline 2023</h3>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">June 14, 2012</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center">→</div>
                </div>
              </div>
            </div>

          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg bg-secondary text-white">1</button>
            <button className="w-10 h-10 rounded-lg border">2</button>
            <button className="w-10 h-10 rounded-lg border">→</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
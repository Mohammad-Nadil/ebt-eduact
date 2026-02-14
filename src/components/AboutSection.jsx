import React from "react";
import {
  FaTrophy,
  FaBullseye,
  FaLightbulb,
  FaGreaterThan,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-16 font-urbanist overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT DESIGN SIDE */}
          <div className="relative flex justify-center lg:justify-start lg:ml-20">
            {/* ------------------ MOBILE & TABLET VERSION ------------------ */}
            <div
              className="relative w-[280px] sm:w-[340px] md:w-[400px] 
                  h-[420px] sm:h-[480px] md:h-[540px] 
                  flex items-center justify-center lg:hidden"
            >
              {/* Big Shape */}
              <div className="absolute inset-0 bg-[#1f3556] rounded-[250px]"></div>

              {/* Small Shape */}
              <div
                className="absolute 
                    w-[180px] h-[260px] sm:w-[200px] sm:h-[300px]
                    bg-[#162b49] rounded-[120px]
                    border-4 border-amber-50
                    flex items-center justify-center
                    -translate-x-1/2 translate-y-6"
              >
                <div className="border-2 border-blue-500 w-20 h-20 rotate-45 flex items-center justify-center">
                  <div className="border-2 border-blue-500 w-12 h-12"></div>
                </div>
              </div>

              {/* Award Box */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-5 pb-4 pt-5 flex items-center gap-3">
                <div className="bg-indigo-500 text-white p-3 rounded-md absolute left-4 -top-5">
                  <FaTrophy />
                </div>

                <div className="text-center">
                  <h3 className="text-orange-500 font-semibold text-lg">
                    +230
                  </h3>
                  <p className="text-sm text-gray-500">Awesome Awards</p>
                </div>
              </div>
            </div>

            {/* ------------------ LARGE SCREEN VERSION (YOUR ORIGINAL CODE) ------------------ */}
            <div className="hidden lg:block relative">
              {/* Big Rounded Shape */}
              <div className="w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] bg-[#1f3556] rounded-[250px] relative">
                {/* Small Inner Shape */}
                <div className="absolute left-[-130px] top-[150px] w-[220px] h-[330px] bg-[#162b49] rounded-[120px] flex items-center justify-center border-6 border-amber-50">
                  <div className="border-2 border-blue-500 w-28 h-28 rotate-45 flex items-center justify-center">
                    <div className="border-2 border-blue-500 w-16 h-16"></div>
                  </div>
                </div>

                {/* Bottom Icon Box */}
                <div className="absolute bottom-[25px] left-10 bg-indigo-500 p-3 rounded-xl shadow-lg">
                  <FaLightbulb className="text-white text-xl" />
                </div>
              </div>

              {/* Award Box */}
              <div className="absolute top-12 left-[-100px] bg-white shadow-lg rounded-xl px-5 pb-4 pt-5 flex items-center gap-3">
                <div className="bg-indigo-500 text-white p-3 rounded-md absolute left-4 top-[-20px]">
                  <FaTrophy />
                </div>
                <div className="justify-center items-center">
                  <h3 className="text-orange-500 font-semibold text-lg text-center">
                    +230
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    Awesome Awards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div className="text-center lg:text-left">
            <p className="text-blue-600 font-bold flex justify-center lg:justify-start gap-x-2 text-sm sm:text-base">
              About Us
              <span className="text-[#F57005] flex items-center">
                <FaGreaterThan />
                <FaGreaterThan />
                <FaGreaterThan />
                <FaGreaterThan />
                <FaGreaterThan />
              </span>
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f3556] leading-snug mb-6">
              Establishing a community that encourages lifelong learning
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks. The generated Lorem Ipsum is therefore always free
              from repetition.
            </p>

            {/* Mission */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center sm:items-start text-center sm:text-left">
              <div className="text-indigo-500 text-xl sm:text-2xl mt-1">
                <FaBullseye />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#1f3556]">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
              <div className="text-indigo-500 text-xl sm:text-2xl mt-1">
                <FaLightbulb />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#1f3556]">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Statistical Information  */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
          {/* Grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Box 1 */}
            <div
              className="bg-white shadow-2xl border-dashed border-[#4F5DE4] border-4 rounded-xl
                    px-8 sm:px-12 lg:px-[76px] py-8 sm:py-12 lg:py-[56px] flex items-center justify-center"
            >
              <div className="text-center leading-10">
                <h3 className="text-[#F57005] font-bold text-3xl sm:text-4xl lg:text-[50px] font-urbanist">
                  +230
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] font-semibold text-[#697585] font-urbanist">
                  Awesome Awards
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div
              className="bg-white shadow-2xl border-dashed border-[#4F5DE4] border-4 rounded-xl
                    px-8 sm:px-12 lg:px-[76px] py-8 sm:py-12 lg:py-[56px] flex items-center justify-center"
            >
              <div className="text-center leading-10">
                <h3 className="text-[#F57005] font-bold text-3xl sm:text-4xl lg:text-[50px] font-urbanist">
                  +180
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] font-semibold text-[#697585] font-urbanist">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div
              className="bg-white shadow-2xl border-dashed border-[#4F5DE4] border-4 rounded-xl
                    px-8 sm:px-12 lg:px-[76px] py-8 sm:py-12 lg:py-[56px] flex items-center justify-center"
            >
              <div className="text-center leading-10">
                <h3 className="text-[#F57005] font-bold text-3xl sm:text-4xl lg:text-[50px] font-urbanist">
                  +120
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] font-semibold text-[#697585] font-urbanist">
                  Projects Done
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div
              className="bg-white shadow-2xl border-dashed border-[#4F5DE4] border-4 rounded-xl
                    px-8 sm:px-12 lg:px-[76px] py-8 sm:py-12 lg:py-[56px] flex items-center justify-center"
            >
              <div className="text-center leading-10">
                <h3 className="text-[#F57005] font-bold text-3xl sm:text-4xl lg:text-[50px] font-urbanist">
                  +50
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] font-semibold text-[#697585] font-urbanist">
                  Team Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

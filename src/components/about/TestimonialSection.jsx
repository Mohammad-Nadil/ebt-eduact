import React, { useRef } from "react";
import { FaStar, FaGreaterThan } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Container from "../Container";

const testimonials = [
  {
    name: "Savannah Nguyen",
    role: "UI/UX DESIGNER",
    text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet",
  },
  {
    name: "Darrell Steward",
    role: "UI/UX DESIGNER",
    text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet",
  },
  {
    name: "Wade Warren",
    role: "UI/UX DESIGNER",
    text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet",
  },
  {
    name: "Darrell Steward",
    role: "UI/UX DESIGNER",
    text: "Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet",
  },
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="relative bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg border border-gray-200 h-full">
      <div className="flex gap-1 text-orange-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>

      <p className="text-gray-500 text-sm sm:text-base leading-6 mb-6">
        {item.text}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
          <p className="text-xs text-gray-400">{item.role}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-6 sm:h-8 bg-indigo-600 rounded-b-2xl"></div>
    </div>
  );
};

export default function TestimonialSection() {
  const swiperRef = useRef(null);

  return (
    <section className="relative">

      {/* Top Background Image (hidden on mobile) */}
      <div className="w-full hidden sm:block">
        <img
          src="/images/teamBg.png"
          alt="team background"
          className="w-full h-[300px] sm:h-[350px] md:h-[250px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="-mt-0 sm:-mt-40 md:-mt-48 pb-16">
        <Container>
          <div className="text-center">

            {/* Heading */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-x-2 mb-4">
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase">
                  Popular Course
                </p>
                <span className="text-[#F57005] flex items-center text-xs sm:text-sm">
                  <FaGreaterThan />
                  <FaGreaterThan />
                  <FaGreaterThan />
                  <FaGreaterThan />
                  <FaGreaterThan />
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                What Our Student Feedback
              </h2>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Autoplay]}
              loop={true}
              spaceBetween={24}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 bg-orange-500 text-white rounded-md flex items-center justify-center shadow hover:opacity-90 transition"
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center shadow hover:opacity-90 transition"
              >
                <FiArrowRight />
              </button>
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}




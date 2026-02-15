import React, { useRef } from "react";
import CourseCard from "./CourseCard";
import { FaArrowLeft, FaArrowRight, FaGreaterThan } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import Container from "../Container";

const courses = [
  {
    duration: "20 Hours",
    rating: 4.5,
    reviews: 25,
    title: "Management Consultants in Competitive Markets",
    instructorName: "Guy Hawkins",
    instructorRole: "Project Manager",
    price: "473.00",
    lessons: 15,
    isFavorite: true,
  },
  {
    duration: "15 Hours",
    rating: 4,
    reviews: 18,
    title: "Advanced React Development",
    instructorName: "Esther Howard",
    instructorRole: "Frontend Engineer",
    price: "299.00",
    lessons: 12,
    isFavorite: false,
  },
  {
    duration: "18 Hours",
    rating: 5,
    reviews: 40,
    title: "UI/UX Design Masterclass",
    instructorName: "Robert Fox",
    instructorRole: "UI Designer",
    price: "399.00",
    lessons: 20,
    isFavorite: false,
  },
  {
    duration: "22 Hours",
    rating: 4.8,
    reviews: 55,
    title: "Fullstack Web Development Bootcamp",
    instructorName: "Jenny Wilson",
    instructorRole: "Software Engineer",
    price: "599.00",
    lessons: 30,
    isFavorite: false,
  },
];

const PopularCourse = () => {
  const swiperRef = useRef(null);

  return (
    <Container>
      <section className=" py-12 ">
        <div className="">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-x-2">
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

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
              Featured Courses This Month
            </h2>
          </div>

          {/* Swiper with navigation */}
          <div className="relative">
            {/* Navigation buttons - flex container */}
            <div className="flex justify-end mb-4 gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4F5DE4] text-white
                         shadow-lg flex items-center justify-center
                         hover:bg-white hover:text-blue-600
                         transition duration-300"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4F5DE4] text-white
                         shadow-lg flex items-center justify-center
                          hover:bg-white hover:text-blue-600
                         transition duration-300"
              >
                <FaArrowRight />
              </button>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                0: { slidesPerView: 1, centeredSlides: true },
                480: { slidesPerView: 1.2, centeredSlides: true },
                640: { slidesPerView: 2, centeredSlides: false },
                768: { slidesPerView: 2.5, centeredSlides: false },
                1024: { slidesPerView: 3, centeredSlides: false },
                1280: { slidesPerView: 3.5, centeredSlides: false },
              }}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <CourseCard {...course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PopularCourse;

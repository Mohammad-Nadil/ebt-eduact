import React from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  const circle = [1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className="text-white font-bold text-5xl">Gallery</h2>
        <p className="sm:text-xl">Home / Gallery</p>
      </div>

      <Container className="grid grid-cols-3 gap-3 sm:gap-10 md:gap-16 xl:gap-30 py-10 sm:py-16 md:py-20">
        {circle.map((item, index) => (
          <NavLink
            to="/become-teacher"
            key={index}
            className="group relative w-full group aspect-2/3 bg-neutral-400 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#3E4DB7] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
              <span className="text-white text-6xl font-light">+</span>
            </div>
          </NavLink>
        ))}
      </Container>
    </div>
  );
};

export default Gallery;

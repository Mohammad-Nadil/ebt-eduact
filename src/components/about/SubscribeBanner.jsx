import React from "react";
import Container from "../Container";

const SubscribeBanner = () => {
  return (
    <Container>
      <div className="w-full  my-10">
        {/* Banner */}
        <div className="relative overflow-hidden bg-indigo-600 rounded-2xl px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.15)_0,rgba(255,255,255,0.15)_10px,transparent_10px,transparent_20px)]" />

          {/* Text */}
          <h2 className="relative z-10 text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-center md:text-left">
            Subscribe to our newsletter <br className="hidden md:block" />
            for daily updates
          </h2>

          {/* Email + Button */}
          <div className="relative z-10 w-full md:w-auto max-w-md">
            <div className="flex w-full bg-white rounded-md overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-gray-700 outline-none text-sm md:text-base"
              />

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-7 font-medium text-sm md:text-base transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscribeBanner;

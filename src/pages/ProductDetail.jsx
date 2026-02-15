import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(2);
  const stars = Array(5).fill(0);

  return (
    <section className="overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#0b0d17] text-white pt-16 pb-12 md:pt-24 md:pb-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
          Product Details
        </h1>
        <p className="text-base md:text-lg font-normal mt-2 font-urbanist opacity-80">
          Home / Shop
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 mb-20">
        {/* Upper Part: Image and Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">
          
          {/* Product Image Placeholder */}
          <div className="bg-[#1a2b42] aspect-square rounded-xl shadow-lg w-full max-w-2xl mx-auto lg:mx-0"></div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Boss Sofa</h2>
              <span className="text-2xl md:text-3xl font-bold text-orange-500">$10.33</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
              <div className="flex text-orange-500 text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <span className="text-gray-500 text-sm font-medium">
                (2 Customer Reviews)
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit.
            </p>

            <div className="text-sm space-y-1">
              <p className="font-urbanist">
                <span className="text-gray-500 font-semibold">REF:</span> 305/639
              </p>
              <p className="text-green-600 font-semibold italic">In Stock</p>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold text-[#2A254D] font-urbanist">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-6 py-2 font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <NavLink
                  to="#"
                  className="flex-1 w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10"
                >
                  Wishlist <FaArrowRight className="text-xs" />
                </NavLink>
                <NavLink
                  to="/cart"
                  className="flex-1 w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10"
                >
                  Add to Cart <FaArrowRight className="text-xs" />
                </NavLink>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-gray-100">
              <span className="text-lg font-bold text-[#2A254D]">Share with friends:</span>
              <div className="flex gap-3">
                {[FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all text-gray-600">
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2A254D] border-b-2
           border-orange-500 inline-block mb-8 pb-2">
            Description
          </h3>
          <div className="text-gray-600 space-y-6 text-base
          md:text-lg leading-relaxed">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Nibh. Nam nec eros id magna hendrerits", "Vitae nibh. Nam nec eros id magna",
               "Nam nec eros id magna hendrerits"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center
                   text-white shrink-0">
                    <AiOutlineCheck className="text-sm" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2A254D] mb-10">
            2 Reviews
            </h3>
          <div className="space-y-10">
            {[1, 2].map((review) => (
              <div key={review} className="flex flex-col sm:flex-row gap-6 items-start pb-8 border-b border-gray-100">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-full shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-gray-800 text-lg">David Shon</h4>
                    <div className="flex text-orange-500 text-xs">
                      {stars.map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Form */}
        <div className="mt-16 lg:mt-24 bg-gray-50 p-6 md:p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Add a Review</h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <h3 className="text-gray-700 font-semibold">Rate this Product:</h3>
            <div className="flex gap-1 text-orange-300">
              {stars.map((_, index) => (
                <FaRegStar key={index} className="text-2xl cursor-pointer hover:text-orange-500 transition-colors" />
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-gray-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Write your review here..."
              className="w-full bg-white border border-gray-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            ></textarea>
            <button className="w-full sm:w-59.5 mt-8 mx-auto lg:mx-0 text-base sm:text-lg flex items-center justify-center lg:justify-start gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondary text-white font-urbanist duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-11 after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10">
              Submit Review <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
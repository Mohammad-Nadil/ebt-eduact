import React from "react";
import { FaStar,
  FaRegStar,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowRight } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <section className="bg-white py-25 font-urbanist">
      {/* Header Section */}
      <div className="bg-[#0b0d17] text-white pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-widest">
          Product Details
        </h1>
        <p className="text-lg font-normal mt-4 opacity-80">
          Home / <span className="text-orange-500">Shop</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16">
        {/* Upper Part: Image and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image Placeholder */}
          <div className="bg-[#1a2b42] aspect-square rounded-md shadow-lg">

          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Boss Sofa</h2>
              <span className="text-2xl font-bold text-orange-500">$510.33</span>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 pb-4 border-b border-[#E4E4E4] w-full">
                    <div className="flex text-orange-500 text-sm">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm leading-none">
                      (2 Customer Review)
                    </span>
                  </div>
              </div>

            <p className="text-secondaryText leading-8 pr-7.5 font-urbanist text-[16px]">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
            </p>

            <div className="text-sm ">
              <p className="text-secondaryText text-[20px] font-semibold leading-6.5 pb-3">
                <span className=" text-secondaryText">
                  REF:
                </span> 305/639
              </p>
              <p className="text-[#F57005] font-semibold ">In Stock</p>
            </div>

            {/* Quantity and Cart */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center border border-gray-200 rounded">
                <button className="px-4 py-2 border-r hover:bg-gray-100">-</button>
                <span className="px-6 py-2">2</span>
                <button className="px-4 py-2 border-l hover:bg-gray-100">+</button>
              </div>
              <button className="bg-[#2a2d3e] text-white px-6 py-3 rounded text-sm font-medium flex items-center gap-2 hover:bg-black transition">
                Add to Wishlist <FaArrowRight className="text-xs" />
              </button>
              <button className="bg-orange-500 text-white px-8 py-3 rounded text-sm font-medium flex items-center gap-2 hover:bg-orange-600 transition">
                Add to Cart <FaArrowRight className="text-xs" />
              </button>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <span className="text-sm font-bold text-gray-700">Share with friend</span>
              <div className="flex gap-3 text-gray-600">
                <FaFacebookF className="cursor-pointer hover:text-orange-500" />
                <FaLinkedinIn className="cursor-pointer hover:text-orange-500" />
                <FaTwitter className="cursor-pointer hover:text-orange-500" />
                <FaYoutube className="cursor-pointer hover:text-orange-500" />
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default ProductDetail;
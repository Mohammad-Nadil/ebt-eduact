import React from "react";
import {
  FaStar,
  FaRegStar,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ProductDetail = () => {
  const stars = Array(5).fill(0);
  return (
    <section className="bg-white py-25 font-urbanist">
      {/* Header Section */}
      <div className="bg-[#0b0d17] text-white pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase">
          Product Details
        </h1>
        <p className="text-lg font-normal mt-2 font-urbanist">Home / Shop</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16">
        {/* Upper Part: Image and Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image Placeholder */}
          <div className="bg-[#1a2b42] aspect-square rounded-md shadow-lg"></div>

          {/* Product Info */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Boss Sofa</h2>
              <span className="text-2xl font-bold text-orange-500">$10.33</span>
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

            <p className="text-secondaryText leading-8 text-[16px] font-semibold pr-5">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
            </p>

            <div className="text-sm space-y-1">
              <p className="font-urbanist">
                <span className="font-bold font-urbanist text-gray-700">
                  REF:
                </span>{" "}
                305/639
              </p>
              <p className="text-orange-500 font-semibold italic">In Stock</p>
            </div>

            {/* Quantity and Cart */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <h3 className="text-[20px] text-[#2A254D] font-bold font-urbanist leading-6.5">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-200 rounded">
                <button className="px-4 py-2 border-r hover:bg-gray-100">
                  <FaMinus />
                </button>
                <span className="px-6 py-2">2</span>
                <button className="px-4 py-2 border-l hover:bg-gray-100">
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <NavLink
                to=""
                className="bg-[#2A254D] text-white px-6 py-3
               rounded text-[18px] font-bold font-urbanist flex 
               items-center gap-2 hover:bg-black transition"
              >
                Add to Wishlist <FaArrowRight className="text-xs" />
              </NavLink>
              <NavLink
                to="/cart"
                className="bg-orange-500 text-white px-8 py-3
               rounded text-[18px] font-bold font-urbanist flex 
               items-center gap-2 hover:bg-orange-600 transition"
              >
                Add to Cart <FaArrowRight className="text-xs" />
              </NavLink>
            </div>
            {/* Social Share */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <span className="text-[20px] font-bold text-[#2A254D] leading-6.5 pr-5">
                Share with friend
              </span>
              <div className="flex gap-5.25">
                {/* Facebook */}
                <div
                  className="w-10 h-10 bg-[#F6F6F6] rounded-full flex items-center
                  justify-center cursor-pointer hover:bg-orange-100"
                >
                  <FaFacebookF className="text-gray-600 hover:text-orange-500" />
                </div>
                {/* LinkedIn */}
                <div
                  className="w-10 h-10 bg-[#F6F6F6] rounded-full flex items-center
                  justify-center cursor-pointer hover:bg-orange-100"
                >
                  <FaLinkedinIn className="text-gray-600 hover:text-orange-500" />
                </div>
                {/* Twitter */}
                <div
                  className="w-10 h-10 bg-[#F6F6F6] rounded-full flex items-center
                  justify-center cursor-pointer hover:bg-orange-100"
                >
                  <FaTwitter className="text-gray-600 hover:text-orange-500" />
                </div>
                {/* YouTube */}
                <div
                  className="w-10 h-10 bg-[#F6F6F6] rounded-full flex items-center
                  justify-center cursor-pointer hover:bg-orange-100"
                >
                  <FaYoutube className="text-gray-600 hover:text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-10">
          <h3
            className="text-[32px] font-bold text-[#2A254D]
             font-urbanist leading-11.75
          mb-6 pb-2 inline-block"
          >
            Description
          </h3>
          <div
            className="text-secondaryText space-y-4
           text-[16px] leading-8 font-semibold"
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum sollicitudin varius
              mauris non dignissim. Sed quis iaculis est. Nulla quam neque,
              interdum vitae fermentum lacinia, interdum eu magna. Mauris non
              posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl
              bibendum accumsan vitae vitae nibh. Nam nec eros id magna
              hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit
              amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus,
              ac dapibus dolor
            </p>
            <ul className="space-y-2">
              <li
                className="flex items-center gap-3 text-[20px] font-medium
               font-urbanist leading-11.75 text-[#2A254D]"
              >
                <span
                  className="w-6 h-6 rounded-full bg-orange-500 flex 
                items-center justify-center text-[10px] text-white"
                >
                  <AiOutlineCheck className="text-[20px]" />
                </span>{" "}
                Nibh. Nam nec eros id magna hendrerits
              </li>
              <li
                className="flex items-center gap-3 text-[20px] font-medium
               font-urbanist leading-11.75 text-[#2A254D]"
              >
                <span
                  className="w-6 h-6 rounded-full bg-orange-500 flex 
                items-center justify-center text-[10px] text-white"
                >
                  <AiOutlineCheck className="text-[20px]" />
                </span>{" "}
                Vitae nibh. Nam nec eros id magna hendrerits
              </li>
              <li
                className="flex items-center gap-3 text-[20px] font-medium 
              font-urbanist leading-11.75 text-[#2A254D]"
              >
                <span
                  className="w-6 h-6 rounded-full bg-orange-500 flex
                 items-center justify-center text-[10px] text-white"
                >
                  <AiOutlineCheck className="text-[20px]" />
                </span>{" "}
                Nam nec eros id magna hendrerits
              </li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#2A254D] leading-11.75 mb-8">
            2 Reviews
          </h3>
          <div className="space-y-8">
            {[1, 2].map((review) => (
              <div
                key={review}
                className="flex gap-6 items-start pb-8 border-b border-gray-100"
              >
                <div className="w-35 h-35 bg-[#1a2b42] rounded-full shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">David Shon</h4>
                    <div className="flex text-orange-500 text-xs">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit amet nec elit. Maecenas id
                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor.
                    Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh.
                    Nam nec eros id magna hendrerit sagittis. Nullam sed mi non
                    odio feugiat volutpat sit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Form */}
        <div className="mt-20 bg-white">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Add a Review
          </h3>
          <div
            className="flex gap-1 text-orange-300 mb-6 text-lg
           cursor-pointer items-center"
          >
            <h3
              className="text-secondaryText text-[20px] font-semibold
             font-urbanist leading-6.5 pe-3"
            >
              Rate this Product
            </h3>
            {stars.map((_, index) => (
              <FaRegStar key={index} className="text-[30px]" />
            ))}
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-50 border-none p-4 rounded
                 text-sm focus:ring-1
                 focus:ring-orange-500 outline-none font-urbanist"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-50 border-none p-4 rounded 
                text-sm focus:ring-1
                 focus:ring-orange-500 outline-none font-urbanist"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Write a Message"
              className="w-full bg-gray-50 border-none p-4 rounded
               text-sm focus:ring-1
               focus:ring-orange-500 outline-none font-urbanist"
            ></textarea>
            <button
              className="bg-orange-500 text-white px-8 py-3
            rounded text-sm font-medium flex items-center gap-2
             hover:bg-orange-600 transition font-urbanist"
            >
              Leave a Review <FaArrowRight className="text-xs" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

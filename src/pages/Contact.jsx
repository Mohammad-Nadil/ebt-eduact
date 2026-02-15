

import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="w-full font-urbanist">

        {/* Your FAQ Section */}
        <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            contact us
            <p className="font-normal text-[16px] text-center mt-2">Home  /  About </p>
          </h1>

        </div>
      </div>
      <div className="w-full bg-gray-100 py-20 px-4 font-urbanist">
        <div className="max-w-5xl mx-auto text-center">

          {/* Top Heading */}
          <p className="text-blue-600 font-medium flex items-center justify-center gap-x-2">
            Contact with Us <span className="text-[#F57005] font-bold flex justify-center items-center">
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
            Feel free to write us anytime
          </h2>

          {/* Form */}
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-gray-200 rounded-md outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Write a Message"
              className="w-full p-3 bg-gray-200 rounded-md outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#F57005] hover:bg-orange-600 text-white px-8 py-3 rounded-md transition duration-300"
            >
              Send a Message →
            </button>
          </form>

          {/* Contact Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 rounded-xl overflow-hidden shadow-lg">

            {/* Phone */}
            <div className="bg-white p-8 text-center">
              <FiPhoneCall className="text-3xl mx-auto text-blue-600 mb-3" />
              <p className="text-gray-500">Have any question?</p>
              <h4 className="font-semibold mt-2">Free + 23 (000)-8050</h4>
            </div>

            {/* Email (Highlighted Center) */}
            <div className="bg-indigo-600 text-white p-8 text-center">
              <FiMail className="text-3xl mx-auto mb-3" />
              <p className="opacity-80">Send Email</p>
              <h4 className="font-semibold mt-2">Demo@gmail.com</h4>
            </div>

            {/* Address */}
            <div className="bg-white p-8 text-center">
              <FiMapPin className="text-3xl mx-auto text-blue-600 mb-3" />
              <p className="text-gray-500">Visit Anytime</p>
              <h4 className="font-semibold mt-2">
                6391 Elgin St. Delaware 10299
              </h4>
            </div>

          </div>
        </div>
      </div>
      <img className="mx-auto w-full aspect-video md:aspect-4/1" src="/public/images/map.png" alt="map" />
    </>
  );


};

export default Contact;


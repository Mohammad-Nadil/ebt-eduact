import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="w-full font-urbanist">
        {/* Spacer for Absolute Navbar */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24"></div>

        {/* Your FAQ Section */}
        <div className="bg-black text-white h-[397px] flex items-center justify-center  font-urbanist">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            contact us
            <p className="font-normal text-[16px] text-center mt-2">
              Home / About{" "}
            </p>
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-20 px-4 font-urbanist">
        <div className="max-w-5xl mx-auto text-center">
          {/* Top Heading */}
          <p className="text-blue-600 font-medium flex items-center justify-center gap-x-2">
            Contact with Us{" "}
            <span className="text-[#F57005] font-bold flex justify-center items-center">
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
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="VIVASOFT OFFICE Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6988237312307!2d90.40223947511655!3d23.79373687864084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a4786893f%3A0x44b1abfd9c303bd1!2sVivasoft%20Limited!5e0!3m2!1sen!2sbd!4v1771093302049!5m2!1sen!2sbd"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;

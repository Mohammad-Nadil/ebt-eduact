import React, { useState } from "react";
import { FaPlus, FaMinus, FaGreaterThan } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const faqData = [
  {
    question: "What Happens to my data if I cancel?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    question: "What Happens to my data if I recruit?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  },
  {
    question: "What Happens to my data if I cancel?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
  },
  {
    question: "What Happens to my data if I cancel?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
  },
  {
    question: "What Happens to my data if I cancel?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full">

        {/* Your FAQ Section */}
        <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold font-urbanist">
            FAQ Page
          </h1>
        </div>
      </div>

      <section className="bg-gray-100 py-16 px-4 font-urbanist">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Heading */}
          <p className="text-[#4F5DE4] font-bold  mb-2 flex justify-center items-center gap-x-2">
            Our Recent FAQs{" "}
            <span className="text-[#F57005] font-bold flex justify-center items-center">
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
              <FaGreaterThan />
            </span>
          </p>

          <h2 className="text-[40px] font-bold text-gray-800 mb-10 font-urbanist">
            Frequently asked Question & <br /> Answers Here
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-gray-700 font-medium"
                >
                  {item.question}
                  {activeIndex === index ? (
                    <FaMinus className="text-orange-500" />
                  ) : (
                    <FaPlus className="text-gray-500" />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Contact Box */}
          <div className="mt-12 md:mt-16 bg-[#4F5DE4] text-white rounded-xl pt-20 md:pt-24 pb-8 px-4 sm:px-6 relative text-center">
            {/* Floating Icon */}
            <div
              className="absolute top-7 md:top-7 left-1/2 -translate-x-1/2 bg-white text-[#F57005] 
                  w-12 h-12 md:w-15 md:h-15 rounded-full 
                  flex items-center justify-center shadow-md text-lg"
            >
              <FiPhoneCall />
            </div>

            {/* Heading */}
            <h3
              className="font-urbanist 
                 text-2xl sm:text-3xl md:text-[35px] 
                 font-semibold mb-3 md:mb-2 leading-snug"
            >
              Do you still have question?
            </h3>

            {/* Text */}
            <p className="text-sm sm:text-base font-semibold opacity-80">
              Call Anytime
            </p>

            <p className="text-lg sm:text-xl md:text-[20px] font-bold">
              (303) 555-0105
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

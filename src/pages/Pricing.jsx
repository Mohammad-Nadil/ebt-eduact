import React, { useState } from "react";
import Container from "../components/Container";
import { AiOutlineCheck } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import { FaCheck } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const { theme } = useTheme();

  const plans = [
    {
      title: "Website Design",
      monthly: "$325",
      yearly: "$3900",
      popular: false,
    },
    {
      title: "Website Design 3",
      monthly: "$325",
      yearly: "$3900",
      popular: true,
    },
    {
      title: "Website Design 2",
      monthly: "$325",
      yearly: "$3900",
      popular: false,
    },
  ];

  return (
    <section
      className={` ${theme === "light" ? " bg-white" : "bg-primaryDark"}
      relative after:w-full after:h-101 after:bg-[#F6F6F6] after:absolute after:bottom-0 after:-z-10 z-0 after:hidden after:md:block
      `}
    >
      
      <Container>
        <div className="py-30">
          <div className="mx-auto hedding text-center max-w-118">
            <p className="text-[#4F5DE4] relative  font-bold font-urbanist text-[24px] leading-6.5  mb-7.5">
              Our Pricing Plan
            </p>
            <h2
              className={`mb-10 text-[#2A254D] font-bold font-urbanist text-[40px] leading-11.75 tracking-[0%] ${theme === "light" ? " bg-white" : "bg-primaryDark text-white"}`}
            >
              Select a plan according to your requirements
            </h2>
            <div className="flex justify-center gap-3.5 mb-12">
              <button
                onClick={() => setBilling("monthly")}
                className={`py-[14.5px] px-8 rounded-[10px] font-semibold font-urbanist text-[16px] leading-6.5 ${
                  billing === "monthly"
                    ? "bg-[#F57005] text-white"
                    : "bg-[#E4E4E4] text-[#2A254D]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`py-[14.5px] px-7.5 rounded-[10px] font-semibold font-urbanist text-[16px] leading-6.5 ${
                  billing === "yearly"
                    ? "bg-[#F57005] text-white"
                    : "bg-[#E4E4E4] text-[#2A254D]"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-9">
           {plans.map((plan, index) => ( 
            <div
                key={index}
              className={`pt-12.5 pb-7.5 shadow-[0px 0px 60px  #0000000] bg-[#FFFFFF] text-center rounded-[10px] relative after:w-[160%] after:aspect-square  after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:-translate-y-9/12 after:bg-[#F6F6F6]  group hover:after:bg-secondary after:-z-10 z-0 overflow-hidden after:duration-300  items-center `}
            >
              <div className=" text-primaryText group-hover:text-white duration-300">
                <h3
                  className={`mb-7 font-urbanist font-medium text-[24px] leading-6.5 `}
                >
                 {plan.title}
                </h3>
                <p
                  className={`mb-22.5 font-urbanist font-bold text-[40px] leading-11.75 `}
                >
                  { billing === "monthly" ? plan.monthly : plan.yearly}
                </p>
              </div>
              <div className=" pricing-card flex flex-col gap-7.5 pb-10 border-b border-[#E4E4E4]">
                <h4
                  className={`font-urbanist font-bold text-[20px] leading-6.5 text-[#2A254D]`}
                >
                  All Services include:
                </h4>
                <div
                  className="flex  items-center justify-center gap-4
                    "
                >
                  <FaCheckCircle className="text-[#F57005]" /> <p>10 Days Time</p>
                </div>
                <div
                  className="flex  items-center justify-center gap-4
                    "
                >
                  <FaCheckCircle className="text-[#F57005]" /> <p>Interview Training</p>
                </div>
                <div
                  className="flex  items-center justify-center gap-4
                    "
                >
                  <FaCheckCircle className="text-[#F57005]" />
                  <p>Guarantee Approval</p>
                </div>
                <div
                  className="flex  items-center justify-center gap-4
                    "
                >
                  <FaCheckCircle className="text-[#F57005]" />
                  <p>Documents Submission</p>
                </div>
              </div>
              <div className="btn pt-7.5 ">
                <button className="text-base font-urbanist font-bold text-[18px]  text-white sm:text-lg  gap-x-3 py-2 sm:py-4.75 px-5 sm:px-12 rounded-lg bg-none bg-secondary  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 group-hover:cursor-pointer group-hover:after:h-[500%] group-hover:after:rotate-0 group-hover:after:w-full after:duration-300 group-hover:after:-top-10 border mx-auto  ">
                  <p>Apply Now</p>
                </button>
              </div>
            </div>))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

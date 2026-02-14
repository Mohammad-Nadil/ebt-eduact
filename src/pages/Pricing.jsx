import React, { useState } from "react";
import Container from "../components/Container";
 import pricecard from '../../public/images/price-highlighted.png'

import arrow from "../../public/images/arrow.png";
import { useTheme } from "../context/ThemeContext";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const {theme} = useTheme()

  const plans = [
    {
      title: "Website Design",
      monthly: "$325",
      yearly: "$3000",
      popular: false,
    },
    {
      title: "Website Design",
      monthly: "$325",
      yearly: "$3000",
      popular: true,
    },
    {
      title: "Website Design",
      monthly: "$325",
      yearly: "$3000",
      popular: false,
    },
  ];

  return (
    <section className={` ${theme === "light" ? " bg-white" : "bg-primaryDark"}`}>
      <div></div>
      <Container>
        <div className="py-30">
          <div className="mx-auto hedding text-center max-w-118">
            <p className="text-[#4F5DE4] relative  font-bold font-urbanist text-[24px] leading-6.5  mb-7.5">
              Our Pricing Plan 
            </p>
            <h2 className={`mb-10 text-[#2A254D] font-bold font-urbanist text-[40px] leading-11.75 tracking-[0%] ${theme === "light" ? " bg-white" : "bg-primaryDark text-white"}`}>
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
              <div className={`pt-12.5 pb-7.5 bg-[#cf9898] text-center rounded-[10px]`}>

                  <div className="">
                    <h3 className={`mb-7 font-urbanist font-medium text-[24px] leading-6.5 text-primaryText`}> Website Design</h3>
                  <p className={`mb-22.5 font-urbanist font-bold text-[40px] leading-11.75 text-primaryText`}>
                      $325
                  </p>
                  </div>
                  <div className="flex flex-col gap-7.5">
                    <h4 className={`font-urbanist font-bold text-[20px] leading-6.5 text-primaryText`}>All Services include:</h4>
                     <p>10 Days Time</p>
                    <p>Interview Training</p>
                    <p>Guarantee Approval</p>
                    <p>Documents Submission</p>
                    
                  </div>

              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

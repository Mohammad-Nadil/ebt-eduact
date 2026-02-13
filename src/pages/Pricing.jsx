import React, { useState } from "react";
import Container from "../components/Container";
 import pricecard from '../../public/images/price-highlighted.png'

import arrow from "../../public/images/arrow.png";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

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
    <section>
      <div></div>
      <Container>
        <div className="py-30">
          <div className="mx-auto hedding text-center max-w-118">
            <p className="text-[#4F5DE4] relative  font-bold font-urbanist text-[24px] leading-6.5  mb-7.5">
              Our Pricing Plan 
            </p>
            <h2 className="mb-10 text-[#2A254D] font-bold font-urbanist text-[40px] leading-11.75 tracking-[0%]">
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
          {/* <div className="grid md:grid-cols-3 gap-9">
              <div className={`pt-12.5 pb-7.5 bg-amber-400 `}>

                  <h3 className={`pl-[125px] pr-[130px] mb-7`}> Website Design</h3>
                  <p>

                  </p>

              </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

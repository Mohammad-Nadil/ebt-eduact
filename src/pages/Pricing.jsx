import React, { useState } from "react";
import Container from "../components/Container";

import arrow from '../../public/images/arrow.png'

const Pricing = () => {
  const [billing,setBilling] = useState("monthly");

  const plans = [
    {
      title: "Website Design",
      price: "$325",
      popular: false,
    },
    {
      title: "Website Design",
      price: "$325",
      popular: true, 
    },
    {
      title: "Website Design",
      price: "$325",
      popular: false,
    },
  ];

  return (

    <section>
      <div></div>
      <Container>
        <div className="py-30">
          <div className="mx-auto hedding text-center max-w-[472px]">
            <p className="text-[#4F5DE4] font-bold font-urbanist text-[24px] leading-6.5  mb-7.5">
              Our Pricing Plan 
            </p>
            <h2 className="mb-10 text-[#2A254D] font-bold font-urbanist text-[40px] leading-11.75 tracking-[0%]">Select a plan according to your requirements</h2>
            <div className="flex justify-center gap-3 mb-12">
              <button
              onClick={ () => setBilling("monthly")}
              className= {`py-[14.5px] px-8 rounded-[10px] font-semibold font-urbanist text-[16px] leading-6.5 ${ 
              billing === "monthly" ? "bg-[#F57005] text-white" :
              "bg-[#E4E4E4] etxt-black"
            }`} 
              >
                Monthly
              </button>
              <button
              onClick={ () => setBilling("yearly")}
              className= {`py-[14.5px] px-7.5 rounded-[10px] font-semibold font-urbanist text-[16px] leading-6.5 ${ 
              billing === "yearly" ? "bg-[#F57005] text-white" :
              "bg-[#E4E4E4] etxt-black"
            }`} 
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

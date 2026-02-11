import React from "react";
import texture from "../../public/images/home-images/Texture.png";
import analysis from "../../public/images/home-images/analysis.png";

const Test = () => {
    //  appendDots: (dots) => (
    //   <div
    //     className=" "
    //     style={{
    //       position: "relative",
    //       zIndex: 1,
    //       backgroundColor: "transparent",
    //       borderRadius: "10px",
    //       padding: "10px",
    //     }}
    //   >
    //     <ul
    //       className="flex absolute top-full translate-y-full left-1/2 -translate-x-1/2 "
    //       style={{ margin: "0px" }}
    //     >
    //       {dots}
    //     </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     className={` after:w-[200%] after:aspect-square relative after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-primary after:rounded-full hover:after:border after:duration-300 after:z-[-1]  ${
    //       active == i
    //         ? ` bg-secondary `
    //         : `${theme === "light" ? " bg-primary/30" : " bg-primary/60 "}`
    //     } w-2.5  aspect-square rounded-full `}
    //   ></div>
    // ),
    // beforeChange: (a, b) => {
    //   setActive(b);
    // },
  return (
    <div  className="p-5">
      <div className="aspect-300/370 rounded-2xl bg-gray-500 relative group hover:cursor-pointer overflow-hidden">
        <img className="hidden relative z-10" src={texture} alt="placeholder" />
        <div className="overlay absolute top-1/2 group-hover:top-full duration-300 -translate-x-1/12 z-20 bg-primary w-[250%] aspect-square rounded-full "></div>
        <div className="category py-10 flex flex-col items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 -translate-y-1/5 duration-300 z-30 w-full">
          <div className="icon w-25 aspect-square rounded-full bg-secondary group-hover:bg-primary duration-300 flex flex-col items-center justify-center  ">
            <img src={analysis} alt="placeholder" />
          </div>
          <h2 className="name text-xl font-bold text-white">
            Business Analysis
          </h2>
          <p className="quantity text-secondary group-hover:text-secondaryTextD duration-300">
            8 Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;

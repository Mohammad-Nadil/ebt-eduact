import React from "react";

const Container = ({ children, className }) => {
  return <div className={`max-w-330 mx-auto relative px-2 font-urbanist ${className}`}>{children}</div>;
};

export default Container;

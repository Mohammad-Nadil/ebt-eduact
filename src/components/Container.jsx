import React from "react";

const Container = ({ children, className, style }) => {
  return (
    <div
      style={style}
      className={`max-w-330 mx-auto relative px-2 font-urbanist ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

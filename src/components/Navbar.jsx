import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown, FaBars, FaRegUser } from "react-icons/fa";
import Container from "./Container";
import logo from "../assets/logo.png";
import darkLogo from "../assets/Dark Logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useTheme } from "../context/ThemeContext";

const LinkTag = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? `text-secondary  ${className}` : `  ${className}`
    }
  >
    <p>{children}</p>
  </NavLink>
);

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const { theme } = useTheme();

  const aboutLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Faq", path: "/faq" },
  ];

  return (
    <nav className="absolute  w-full  ">
      <Container
        className={`flex justify-between items-center py-2 overflow-x-clip
          ${theme === "light" ? "bg-white" : "bg-primary"}
          `}
      >
        <div className="w-32 md:w-40 xl:w-48 ">
          {theme === "light" ? (
            <img src={logo} alt="logo" className="w-full " />
          ) : (
            <img src={darkLogo} alt="logo" className="w-full " />
          )}
        </div>
        <ul
          className={`flex absolute sm:static top-full right-3 text-right flex-col sm:flex-row sm:items-center justify-center gap-y-4 sm:gap-y-0 gap-x-4 md:gap-6 xl:gap-10  font-semibold  text-3xl sm:text-sm md:text-base duration-300 sm:translate-x-0
            ${open ? "translate-x-0 " : "translate-x-[150%]"}
            ${theme === "light" ? "text-primaryText" : "text-white"}
            `}
        >
          <LinkTag to="/">Home</LinkTag>

          <li
            onClick={() => setShow(!show)}
            className="relative cursor-pointer items-center gap-1 hidden sm:flex"
          >
            <span>About</span>
            <FaAngleDown
              className={`transition-transform duration-300 ${
                show ? "rotate-180" : ""
              }`}
            />

            <div
              className={`absolute top-full right-full sm:right-0 flex flex-col gap-2 rounded-md border border-primary bg-white p-2 text-nowrap transition-all duration-300
              ${show ? "visible opacity-100" : "invisible opacity-0"}`}
            >
              {aboutLinks.map((item) => (
                <LinkTag key={item.path} to={item.path}>
                  {item.name}
                </LinkTag>
              ))}
            </div>
          </li>
          <LinkTag className={`sm:hidden`} to="/about">
            About
          </LinkTag>
          <LinkTag className={`sm:hidden`} to="/contact">
            Contact us
          </LinkTag>
          <LinkTag className={`sm:hidden`} to="/faq">
            Faq
          </LinkTag>
          <LinkTag to="/course">Course</LinkTag>
          <LinkTag to="/blog">Blog</LinkTag>
          <LinkTag to="/product">Product</LinkTag>
          <LinkTag to="/pricing">Pricing</LinkTag>
          <div className="icon text-xl hidden sm:flex items-center gap-x-3 md:px-2.5">
            <FaMagnifyingGlass />
            <FaRegUser />
          </div>
        </ul>
        <div
          className={`call p-3 xl:p-4 hidden lg:flex items-center gap-x-4  rounded-l-full ${theme === "light" ? "bg-primary" : "bg-secondary"} `}
        >
          <div className={`icon w-8 md:w-10 :w-13 aspect-square flex items-center justify-center bg-white rounded-full  text-2xl xl:text-3xl ${theme === "light" ? "text-primary" : "text-secondary"}`}>
            <BiPhoneCall />
          </div>
          <div className="number text-white font-semibold 2xl:pr-9">
            <p className="num text-lg">(303) 555-0105</p>
            <p className="text-sm">Call to Question</p>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className={`sm:hidden text-xl ${theme === "light" ? "text-primary" : "text-white"}`}>
          {open ? <ImCross /> : <FaBars />}
        </div>
      </Container>

      
    </nav>
  );
};

export default Navbar;

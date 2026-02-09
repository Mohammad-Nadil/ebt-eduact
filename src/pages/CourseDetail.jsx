import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const CourseDetail = () => {
  return (
    <div>
      <h1 className="text-7xl">CourseDetail</h1>

      <ul className="flex items-center gap-10 justify-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="overview"
        >
          <p>Overview</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="review"
        >
          <p>Review</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="instruction"
        >
          <p>Instruction</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="curriculum"
        >
          <p>Curriculum</p>
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
};

export default CourseDetail;

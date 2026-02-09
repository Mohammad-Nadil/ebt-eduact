import React from "react";
import { NavLink } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <h1 className="text-7xl">Course</h1>
       <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to="/course/:id"
        >
          <p>CourseDetail</p>
        </NavLink>
    </div>
  );
};

export default Course;

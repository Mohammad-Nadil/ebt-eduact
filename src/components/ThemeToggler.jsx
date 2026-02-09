import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="absolute top-1/2 right-4 translate-y-1/2">
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default ThemeToggler;

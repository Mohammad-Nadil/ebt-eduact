import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import Courses from "./pages/Course.jsx";
import Course from "./pages/Course.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CourseOverview from "./components/CourseOverview.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course-detail" element={<CourseDetail />}>
          <Route path="overview" element={<CourseOverview />} />
          <Route path="overview" element={<CourseOverview />} />
          <Route path="overview" element={<CourseOverview />} />
          <Route path="overview" element={<CourseOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>,
);

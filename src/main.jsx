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
import CourseReview from "./components/CourseReview.jsx";
import CourseCurriculum from "./components/CourseCurriculum.jsx";
import CourseInstruction from "./components/CourseInstruction.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course-detail" element={<CourseDetail />}>
          <Route index element={<CourseOverview />} />
          <Route path="overview" element={<CourseOverview />} />
          <Route path="review" element={<CourseReview />} />
          <Route path="curriculum" element={<CourseCurriculum />} />
          <Route path="instruction" element={<CourseInstruction />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);

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
import Product from "./pages/Product.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Pricing from "./pages/Pricing.jsx";
import Error from "./pages/Error.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";
import LenisProvider from "./hooks/useLenis.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LenisProvider>
        <ThemeProvider>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
          <ThemeToggler />
        </ThemeProvider>
      </LenisProvider>
    </BrowserRouter>
  </StrictMode>,
);

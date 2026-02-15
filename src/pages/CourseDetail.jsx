import React, { useState } from "react";
import {
  FaStar,
  FaClock,
  FaBook,
  FaUsers,
  FaVideo,
  FaCertificate,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import CourseCurriculum from "../components/courses/CourseCurriculum.jsx";
import CourseReviews from "../components/courses/CourseReviews.jsx";
import CourseInstructor from "../components/courses/CourseInstructor.jsx";
import { NavLink } from "react-router-dom";
const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courseFeatures = [
    { icon: FaClock, label: "Duration", value: "20 Hours" },
    { icon: FaBook, label: "Lessons", value: "15" },
    { icon: FaUsers, label: "Students", value: "Max 15" },
    { icon: FaVideo, label: "Videos", value: "10 Hours" },
    { icon: FaCertificate, label: "Skill Level", value: "Advanced" },
    { icon: FaGlobe, label: "Language", value: "English" },
  ];

  const latestPosts = [
    {
      id: 1,
      author: "Robert Fox",
      title: "The Complete Web...",
      rating: 4,
      reviews: 452,
    },
    {
      id: 2,
      author: "Robert Fox",
      title: "The Complete Web...",
      rating: 5,
      reviews: 452,
    },
    {
      id: 3,
      author: "Robert Fox",
      title: "The Complete Web ...",
      rating: 4,
      reviews: 452,
    },
  ];

  const learningPoints = [
    "Nibh, Itern nec eras sit magnis hendrerit s",
    "Vitae nibh, Itern nec eras sit magnis hendrerit s",
    "Itern nec eras sit magnis hendrerit s",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black pt-20 pb-32 text-white text-center">
        <h1 className=" text-7xl font-bold mb-4">COURSE DETAILS</h1>
        <NavLink to="/">Home</NavLink> / <span>Course</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="relative h-[280px] bg-[#2d4356]">
                <div className="w-10 h-10 bg-[#ff8534] rounded-full absolute top-4 left-4" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#2d4356] rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#2d4356]">
                        Guy Hawkins
                      </p>
                      <p className="text-sm font-semibold text-[#697585]">
                     Project Manager
                      </p>
                    </div>
                     <span className="inline-block ml-6 bg-[#5B7FDB] text-white text-[9px] font-semibold px-2 py-0.5 rounded mt-1">
                      Development
                      </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#ff8534]" size={12} />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      (25 Reviews)
                    </span>
                  </div>
                  <div className="mb-6">
                  <span className="text-2xl font-bold text-[#ff8534]">
                    $473.00
                  </span>
                </div>
                </div>

                <h2 className="text-xl font-bold text-[#2d4356] mb-1">
                  The Complete Web Developer Guideline 2023
                </h2>

                

                <div className="flex gap-2 mb-6 ">
                  {["Overview", "Curriculum", "Reviews", "Instructor"].map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-5 py-2.5 text-sm font-semibold transition-colors relative ${
                          activeTab === tab.toLowerCase()
                            ? "text-white bg-[#ff8534] rounded-lg"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>

                <div className="mt-6">
                  {activeTab === "overview" && (
                    <div className="space-y-4">
                      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                        <p>
                          lorem sit lacus ex nisl lobortum accumsan vitae vitae
                          nibh. Itern nec eras sit magnis hendrerit sagittis.
                          Rutrum sed mi non vitae feugiat vulputat sit amet nec
                          elit. Rlasellus id hendrerit quam. Sed eget suscipit
                          massa, ac eleifend dolor. lorem sit lacus ex nisl
                          lobortum accumsan vitae vitae nibh.
                        </p>

                        <p>
                          Ullamcorper. Vestibulum sollicitudin verius mauris non
                          dignissim. Sed quis varius ex. Nulla quam verius,
                          interdum varius fermentum ac, eleifend eu magna.
                          Rutrum sed mi non vitae feugiat vulputat sit amet nec
                          elit. Rlasellus id hendrerit quam. Sed eget suscipit
                          massa, ac eleifend dolor. lorem sit lacus ex nisl
                          lobortum accumsan vitae vitae nibh. Ullamcorper.
                          Vestibulum sollicitudin verius mauris non dignissim.
                          lorem sit lacus ex nisl lobortum accumsan vitae vitae
                          nibh. Ullamcorper. Vestibulum sollicitudin verius
                          mauris non dignissim. Sed eget suscipit massa, ac
                          eleifend dolor.
                        </p>

                        <p>
                          lorem sit lacus ex nisl lobortum accumsan vitae vitae
                          nibh. Itern nec eras sit magnis hendrerit sagittis.
                          Rutrum sed mi non vitae feugiat vulputat sit amet nec
                          elit. Rlasellus id hendrerit quam. Sed eget suscipit
                          massa, ac eleifend dolor. lorem sit lacus ex nisl
                          lobortum accumsan vitae vitae nibh. Ullamcorper.
                          Vestibulum sollicitudin verius mauris non dignissim.
                          Sed quis varius ex. Nulla quam verius, interdum varius
                          fermentum ac, eleifend eu magna. Rutrum sed mi non
                          vitae feugiat vulputat sit amet nec elit.
                        </p>

                        <div className="pt-4 space-y-2">
                          {learningPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#ff8534] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaCheckCircle
                                  className="text-white"
                                  size={12}
                                />
                              </div>
                              <span className="text-sm text-gray-700">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && <CourseCurriculum />}

                  {activeTab === "reviews" && <CourseReviews />}

                  {activeTab === "instructor" && <CourseInstructor />}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#2d4356] mb-5">
                Course Features
              </h3>
              <div className="space-y-4">
                {courseFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-[#ff8534]" size={16} />
                        <span className="text-sm text-gray-600">
                          {feature.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#2d4356]">
                        {feature.value}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-[#ff8534] hover:bg-[#e67529] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Buy This Course
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#2d4356] mb-5">
                Latest Post
              </h3>
              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-16 h-16 bg-[#2d4356] rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-[10px] text-[#ff8534] font-semibold mb-1">
                        By {post.author}
                      </p>
                      <h4 className="text-sm font-bold text-[#2d4356] mb-2 leading-tight">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < post.rating
                                ? "text-[#ff8534]"
                                : "text-gray-300"
                            }
                            size={10}
                          />
                        ))}
                        <span className="text-[9px] text-gray-400 ml-1">
                          ★ {post.rating} ({post.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default CourseDetail;

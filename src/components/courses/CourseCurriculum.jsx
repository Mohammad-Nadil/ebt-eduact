import React, { useState } from "react";
import {
  FaPlayCircle,
  FaFileAlt,
  FaAward,
  FaClock,
  FaLock,
} from "react-icons/fa";

const CourseCurriculum = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const curriculumData = [
    {
      id: "beginner",
      title: "Starting Beginners Level Course",
      description:
        "Lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh. Itern nec eras sit magnis hendrerit sagittis. Rutrum sed mi non vitae feugiat vulputat sit amet nec elit. Rlasellus id hendrerit quam. Sed eget suscipit massa, ac eleifend dolor. lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh.",
      lessons: [
        {
          id: 1,
          icon: FaPlayCircle,
          iconColor: "text-[#ff8534]",
          title: "Introduction of Editing",
          badge: "Preview",
          duration: "10 Minutes",
          isLocked: false,
        },
        {
          id: 2,
          icon: FaPlayCircle,
          iconColor: "text-[#ff8534]",
          title: "Overview of Editing",
          badge: "Preview",
          duration: "10 Minutes",
          isLocked: false,
        },
        {
          id: 3,
          icon: FaFileAlt,
          iconColor: "text-[#ff8534]",
          title: "Basic Editing Technology",
          badge: null,
          duration: null,
          isLocked: true,
        },
        {
          id: 4,
          icon: FaAward,
          iconColor: "text-[#FFD700]",
          title: "Quiz",
          badge: null,
          duration: "6 Questions",
          isLocked: true,
        },
      ],
    },
    {
      id: "intermediate",
      title: "Intermediate Level Course",
      description:
        "Lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh. Itern nec eras sit magnis hendrerit sagittis. Rutrum sed mi non vitae feugiat vulputat sit amet nec elit. Rlasellus id hendrerit quam. Sed eget suscipit massa, ac eleifend dolor. lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh.",
      lessons: [
        {
          id: 5,
          icon: FaPlayCircle,
          iconColor: "text-[#ff8534]",
          title: "Introduction of Editing",
          badge: "Preview",
          duration: "10 Minutes",
          isLocked: true,
        },
        {
          id: 6,
          icon: FaFileAlt,
          iconColor: "text-[#ff8534]",
          title: "Basic Editing Technology",
          badge: null,
          duration: null,
          isLocked: true,
        },
        {
          id: 7,
          icon: FaAward,
          iconColor: "text-[#FFD700]",
          title: "Quiz",
          badge: null,
          duration: "6 Questions",
          isLocked: true,
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {curriculumData.map((section) => (
        <div
          key={section.id}
          className="bg-white rounded-lg border border-gray-200"
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full text-left"
          >
            <div className="p-5">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          </button>

          <div className="border-t border-gray-200">
            {section.lessons.map((lesson, index) => {
              const Icon = lesson.icon;
              return (
                <div
                  key={lesson.id}
                  className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                    index !== section.lessons.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <Icon className={lesson.iconColor} size={18} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-[#1e3a5f]">
                          {lesson.title}
                        </h4>
                        {lesson.badge && (
                          <span className="text-[10px] font-semibold text-[#ff8534] bg-orange-50 px-2 py-0.5 rounded">
                            {lesson.badge}
                          </span>
                        )}
                        {lesson.isLocked && (
                          <FaLock className="text-gray-400" size={12} />
                        )}
                      </div>
                    </div>
                  </div>

                  {lesson.duration && (
                    <div className="flex items-center gap-1 text-gray-500">
                      {lesson.duration.includes("Minutes") ? (
                        <FaClock size={12} />
                      ) : null}
                      <span className="text-xs">{lesson.duration}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCurriculum;

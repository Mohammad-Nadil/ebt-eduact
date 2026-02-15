import React from "react";

const CourseInstructor = () => {
  const instructor = {
    name: "Guy Hawkins",
    role: "PRODUCT MANAGER",
    avatar: "",
    bio: "lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh. Itern nec eras sit magnis hendrerit sagittis. Rutrum sed mi non vitae feugiat vulputat sit amet nec elit. Rlasellus id hendrerit quam. Sed eget suscipit massa, ac eleifend dolor.",
  };

  return (
    <div className="py-4">
      <div className="flex gap-6 items-start">
        <div className="w-32 h-32 bg-[#2d4356] rounded-full flex-shrink-0" />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#2d4356] mb-1">
            {instructor.name}
          </h3>
          <p className="text-xs text-gray-400 font-semibold mb-4 tracking-wide">
            {instructor.role}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {instructor.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;

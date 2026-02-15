import React from "react";
import Container from "../Container";
import bg from "/images/home-images/becomeBg.png";
import {
  FaAngleRight,
  FaArrowRightLong,
  FaFacebookF,
  FaLinkedinIn,
  FaStar,
  FaYoutube,
} from "react-icons/fa6";
import TeacherCard from "../TeacherCard";

const BecomeTeacher = () => {
  const teachers = [1, 1, 1];
  const formFields = [
    { type: "text", name: "fullName", placeholder: "Full Name" },
    { type: "email", name: "email", placeholder: "Email Address" },
    { type: "tel", name: "phone", placeholder: "Phone Number" },
    { type: "url", name: "linkedin", placeholder: "LinkedIn Profile URL" },
  ];

  <div className="form w-1/3">
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primaryText mb-6">
          Job Application Form
        </h2>

        <form className="flex flex-col gap-y-4">
          {/* Mapped Inputs */}
          {formFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="bg-gray-100 text-gray-900 rounded-md p-3 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
            />
          ))}

          {/* Textarea */}
          <textarea
            name="coverLetter"
            rows="4"
            placeholder="Cover Letter"
            className="bg-gray-100 text-gray-900 rounded-md p-3 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
          ></textarea>

          {/* File Upload */}
          <input
            type="file"
            name="resume"
            className="bg-gray-100 text-gray-900 rounded-md p-3 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90 transition duration-200"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white font-semibold py-3 rounded-md mt-2 hover:bg-primary/90 transition duration-300"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  </div>;

  return (
    <div>
      <div className="w-full py-10 sm:py-16 md:py-20 xl:py-43 bg-[#04090F] flex flex-col sm:gap-y-3 items-center justify-center text-white">
        <h2 className=" font-bold text-2xl sm:text-3xl md:text-5xl">
          Become A Teacher
        </h2>
        <p className="sm:text-xl">Home / Teacher</p>
      </div>
      <Container className="py-16 flex flex-col lg:flex-row items-start justify-between gap-16 ">
        <div className=" w-full lg:w-1/2 xl:w-2/3 flex flex-col gap-y-10">
          <div className="rules flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold text-primaryText">
              Teacher Rules
            </h2>
            <div className="font-semibold text-secondaryText flex flex-col gap-y-4">
              <p className="flex items-center gap-x-4">
                <FaStar className="text-xs text-secondary" />
                There are many variations of passages of Lorem Ipsum available
              </p>
              <p className="flex items-center gap-x-4">
                <FaStar className="text-xs text-secondary" />
                suffered alteration in some form, by injected humour, or
                randomised words which don't look
              </p>
              <p className="flex items-center gap-x-4">
                <FaStar className="text-xs text-secondary" />
                ou need to be sure there isn't anything embarrassing hidden
              </p>
              <p className="flex items-center gap-x-4">
                <FaStar className="text-xs text-secondary" /> If you are going
                to use a passage of Lorem Ipsum,
              </p>
              <p className="flex items-center gap-x-4">
                <FaStar className="text-xs text-secondary" />
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
          <div className="areas flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold text-primaryText">
              Areas of Expertise
            </h2>
            <p className="font-semibold text-secondaryText leading-loose">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <div className="education flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold text-primaryText">Education</h2>
            <p className="font-semibold text-secondaryText leading-loose">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </div>
        <div className="form w-full lg:w-1/2  xl:w-1/3">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full lg:max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Job Application Form
              </h2>
              <form className="flex flex-col gap-y-3">
                {formFields.map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    className="bg-gray-100 text-gray-900 rounded-md p-4 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 text-lg"
                  />
                ))}
                <textarea
                  name="cover_letter"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2  focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Cover Letter"
                ></textarea>
                <input
                  type="file"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Resume"
                />
                <div className="btn">
                  <button type="submit" className="text-base sm:text-lg flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-secondary text-white hover:bg-secondary border border-white hover:border-secondary duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10 ">
                    <p>Become a Teacher</p>
                    <FaArrowRightLong />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <section className="relative z-10 px-3 xs:px-5">
        <img
          className="w-full h-1/3 object-cover absolute bottom-0 left-0 bg-neutral-200 opacity-45 z-0"
          src={bg}
          alt=" bg "
        />
        <Container
          className={`flex flex-col gap-y-8 sm:gap-y-10 lg:gap-y-20 py-10 md:py-20 relative z-10 `}
        >
          <div className="heading mx-auto flex flex-col items-center  md:gap-y-3 font-bold">
            <p className="text-xl sm:text-2xl text-primary flex items-center">
              Our Teacher
              <span className="flex items-center text-secondary -space-x-2.5 text-lg ">
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
                <FaAngleRight />
              </span>
            </p>
            <h2 className={`text-xl xs:text-2xl sm:text-4xl text-primaryText`}>
              Learn from the Best Teacher
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 xl:gap-30">
            {teachers.map((item, index) => (
              <TeacherCard key={index} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BecomeTeacher;

import React from "react";
import { FaTrophy, FaBullseye, FaLightbulb, FaGreaterThan } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section className="w-full bg-[#f3f4f6] py-16 font-urbanist">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 items-center">

                {/* LEFT DESIGN SIDE */}
                <div className="relative flex justify-center lg:justify-start">

                    {/* Big Rounded Shape */}
                    <div className="w-[320px] h-[420px] sm:w-[380px] sm:h-[500px] bg-[#1f3556] rounded-[250px] relative">

                        {/* Small Inner Shape */}
                        <div className="absolute left-[-130px] top-[150px] w-[220px] h-[330px] bg-[#162b49] rounded-[120px] flex items-center justify-center border-6 border-amber-50">

                            {/* Diamond Shape */}
                            <div className="border-2 border-blue-500 w-28 h-28 rotate-45 flex items-center justify-center">
                                <div className="border-2 border-blue-500 w-16 h-16"></div>
                            </div>

                        </div>

                        {/* Bottom Icon Box */}
                        <div className="absolute bottom-[25px] left-10 bg-indigo-500 p-3 rounded-xl shadow-lg">
                            <FaLightbulb className="text-white text-xl" />
                        </div>

                    </div>

                    {/* Award Box */}
                    <div className="absolute top-12 left-[-100px] bg-white shadow-lg rounded-xl px-5 pb-4 pt-5 flex items-center gap-3">
                        <div className="bg-indigo-500 text-white p-3 rounded-md absolute left-4 top-[-20px]">
                            <FaTrophy />
                        </div>
                        <div className="justify-center items-center">
                            <h3 className="text-orange-500 font-semibold text-lg text-center">
                                +230
                            </h3>
                            <p className="text-sm text-gray-500 text-center">Awesome Awards</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT SIDE */}
                <div >
                    <p className="text-blue-600 font-bold flex  gap-x-2 text-[16px] ">
                        About Us <span className="text-[#F57005] flex justify-center items-center">
                            <FaGreaterThan />
                            <FaGreaterThan />
                            <FaGreaterThan />
                            <FaGreaterThan />
                            <FaGreaterThan />
                        </span>
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1f3556] leading-snug mb-6">
                        Establishing a community that encourages lifelong learning
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        It uses a dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem Ipsum
                        which looks. The generated Lorem Ipsum is therefore always free
                        from repetition.
                    </p>

                    {/* Mission */}
                    <div className="flex gap-4 mb-6">
                        <div className="text-indigo-500 text-2xl mt-1">
                            <FaBullseye />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-[#1f3556]">
                                Our Mission
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                It uses a dictionary of over 200 Latin words, combined with a
                                handful of model sentence structures.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="flex gap-4">
                        <div className="text-indigo-500 text-2xl mt-1">
                            <FaLightbulb />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-[#1f3556]">
                                Our Vision
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                It uses a dictionary of over 200 Latin words, combined with a
                                handful of model sentence structures.
                            </p>
                        </div>
                    </div>
                </div>

                {/* statistical Information  */}


            </div>
            <div className="max-w-7xl mx-auto  items-center">
                <div className="flex justify-between items-center pt-20">
                    <div className="bg-white shadow-2xl border-dashed border-[#4F5DE4]
                     border-4 rounded-xl px-[76px] py-[56px] flex items-center gap-3">

                        <div className="justify-center items-center leading-10">
                            <h3 className="text-[#F57005] font-bold text-[50px] text-center  font-urbanist">
                                +230
                            </h3>
                            <p className="text-[16px] font-semibold text-[#697585] text-center  font-urbanist">Awesome Awards</p>
                        </div>
                    </div>
                     <div className="bg-white shadow-2xl border-dashed border-[#4F5DE4]
                     border-4 rounded-xl px-[76px] py-[56px] flex items-center gap-3">

                        <div className="justify-center items-center leading-10">
                            <h3 className="text-[#F57005] font-bold text-[50px] text-center  font-urbanist">
                                +230
                            </h3>
                            <p className="text-[16px] font-semibold text-[#697585] text-center  font-urbanist">Awesome Awards</p>
                        </div>
                    </div>
                     <div className="bg-white shadow-2xl border-dashed border-[#4F5DE4]
                     border-4 rounded-xl px-[76px] py-[56px] flex items-center gap-3">

                        <div className="justify-center items-center leading-10">
                            <h3 className="text-[#F57005] font-bold text-[50px] text-center  font-urbanist">
                                +230
                            </h3>
                            <p className="text-[16px] font-semibold text-[#697585] text-center  font-urbanist">Awesome Awards</p>
                        </div>
                    </div>
                     <div className="bg-white shadow-2xl border-dashed border-[#4F5DE4]
                     border-4 rounded-xl px-[76px] py-[56px] flex items-center gap-3">

                        <div className="justify-center items-center leading-10">
                            <h3 className="text-[#F57005] font-bold text-[50px] text-center  font-urbanist">
                                +230
                            </h3>
                            <p className="text-[16px] font-semibold text-[#697585] text-center  font-urbanist">Awesome Awards</p>
                        </div>
                    </div>
                   
                </div>
            </div>


        </section>
    );
};

export default AboutSection;

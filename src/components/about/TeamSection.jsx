import React from "react";
import "/css/TeamSection.css";
import {FaGreaterThan } from "react-icons/fa";
import Container from "../Container";

const teamMembers = [
  {
    name: "Devon Lane",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "John Smith",
    role: "Web Developer",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Sarah Khan",
    role: "Project Manager",
    image: "https://via.placeholder.com/300",
  },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="flex items-center justify-center gap-x-2 mb-4">
                      <p className="text-blue-600 font-bold text-xs sm:text-sm">
                       Our Team
                      </p>
                      <span className="text-[#F57005] flex items-center text-xs sm:text-sm">
                        <FaGreaterThan />
                        <FaGreaterThan />
                        <FaGreaterThan />
                        <FaGreaterThan />
                        <FaGreaterThan />
                      </span>
                    </div>
      <h2 className="title">Meet Our Professional Team Members</h2>
      <Container>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="card-shape">
                <img src={member.image} alt={member.name} />

                <div className="card-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>

                  <div className="social-icons">
                    <span>f</span>
                    <span>in</span>
                    <span>▶</span>
                  </div>
                </div>
              </div>

              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TeamSection;

const teachers = [
  {
    id: 1,
    name: "John Doe",
    title: "Frontend Developer",
    description: [
      "John has over 8 years of experience in building responsive web apps.",
      "He specializes in React, Tailwind CSS, and modern JavaScript frameworks.",
    ],
    skills: [
      { skill: "React", percent: 95 },
      { skill: "JavaScript", percent: 90 },
      { skill: "CSS/HTML", percent: 85 },
    ],
    courses: [
      { id: 1, name: "React for Beginners", price: 49.99, rating: 4.5 },
      { id: 2, name: "Advanced Node.js", price: 69.99, rating: 4.7 },
    ],
  },

  {
    id: 2,
    name: "Jane Smith",
    title: "UI/UX Designer",
    description: [
      "Jane creates intuitive and user-friendly designs for web and mobile apps.",
      "She has worked with top startups and design agencies worldwide.",
    ],
    skills: [
      { skill: "Figma", percent: 92 },
      { skill: "Adobe XD", percent: 88 },
      { skill: "User Research", percent: 85 },
    ],
    courses: [
      { id: 3, name: "UI Design Fundamentals", price: 39.99, rating: 4.6 },
      { id: 4, name: "Advanced UX Research", price: 59.99, rating: 4.8 },
    ],
  },

  {
    id: 3,
    name: "Michael Brown",
    title: "Backend Developer",
    description: [
      "Michael specializes in building scalable backend systems.",
      "He has deep knowledge of Node.js, Express, and databases.",
    ],
    skills: [
      { skill: "Node.js", percent: 93 },
      { skill: "MongoDB", percent: 89 },
      { skill: "Express.js", percent: 90 },
    ],
    courses: [
      { id: 5, name: "Node.js Mastery", price: 54.99, rating: 4.7 },
      { id: 6, name: "MongoDB Complete Guide", price: 44.99, rating: 4.6 },
    ],
  },

  {
    id: 4,
    name: "Emily Davis",
    title: "Full Stack Developer",
    description: [
      "Emily builds full stack applications using the MERN stack.",
      "She enjoys teaching practical, project-based development.",
    ],
    skills: [
      { skill: "React", percent: 90 },
      { skill: "Node.js", percent: 88 },
      { skill: "MongoDB", percent: 85 },
    ],
    courses: [
      { id: 7, name: "MERN Stack Bootcamp", price: 79.99, rating: 4.9 },
    ],
  },

  {
    id: 5,
    name: "Daniel Wilson",
    title: "DevOps Engineer",
    description: [
      "Daniel helps teams automate deployments and scale infrastructure.",
      "He works with AWS, Docker, and CI/CD pipelines.",
    ],
    skills: [
      { skill: "AWS", percent: 91 },
      { skill: "Docker", percent: 87 },
      { skill: "CI/CD", percent: 89 },
    ],
    courses: [{ id: 8, name: "Docker Essentials", price: 49.99, rating: 4.6 }],
  },

  {
    id: 6,
    name: "Sophia Martinez",
    title: "Mobile App Developer",
    description: [
      "Sophia develops cross-platform mobile apps.",
      "She focuses on performance and clean UI design.",
    ],
    skills: [
      { skill: "React Native", percent: 92 },
      { skill: "Flutter", percent: 85 },
      { skill: "JavaScript", percent: 88 },
    ],
    courses: [
      { id: 9, name: "React Native from Scratch", price: 59.99, rating: 4.7 },
    ],
  },

  {
    id: 7,
    name: "William Taylor",
    title: "Cybersecurity Expert",
    description: [
      "William specializes in application security and ethical hacking.",
      "He teaches secure coding practices for developers.",
    ],
    skills: [
      { skill: "Ethical Hacking", percent: 90 },
      { skill: "Network Security", percent: 88 },
      { skill: "JWT/Auth", percent: 85 },
    ],
    courses: [
      { id: 10, name: "Web Security Basics", price: 69.99, rating: 4.8 },
    ],
  },

  {
    id: 8,
    name: "Olivia Johnson",
    title: "Data Scientist",
    description: [
      "Olivia works with machine learning models and data analytics.",
      "She loves simplifying complex data concepts.",
    ],
    skills: [
      { skill: "Python", percent: 94 },
      { skill: "Machine Learning", percent: 90 },
      { skill: "Pandas", percent: 88 },
    ],
    courses: [
      { id: 11, name: "Intro to Machine Learning", price: 79.99, rating: 4.9 },
    ],
  },

  {
    id: 9,
    name: "James Anderson",
    title: "Cloud Engineer",
    description: [
      "James designs scalable cloud-based systems.",
      "He has experience with Azure and Google Cloud.",
    ],
    skills: [
      { skill: "Azure", percent: 89 },
      { skill: "Google Cloud", percent: 87 },
      { skill: "Terraform", percent: 84 },
    ],
    courses: [
      {
        id: 12,
        name: "Cloud Infrastructure Basics",
        price: 59.99,
        rating: 4.6,
      },
    ],
  },

  {
    id: 10,
    name: "Ava Thomas",
    title: "Frontend Mentor",
    description: [
      "Ava helps beginners master HTML, CSS, and JavaScript.",
      "She focuses on building strong fundamentals.",
    ],
    skills: [
      { skill: "HTML", percent: 95 },
      { skill: "CSS", percent: 93 },
      { skill: "JavaScript", percent: 90 },
    ],
    courses: [
      { id: 13, name: "HTML & CSS Bootcamp", price: 29.99, rating: 4.5 },
    ],
  },

  {
    id: 11,
    name: "Ethan Clark",
    title: "Next.js Developer",
    description: [
      "Ethan builds SEO-friendly web apps using Next.js.",
      "He focuses on performance optimization.",
    ],
    skills: [
      { skill: "Next.js", percent: 93 },
      { skill: "React", percent: 90 },
      { skill: "SSR/SSG", percent: 88 },
    ],
    courses: [
      { id: 14, name: "Next.js Complete Guide", price: 64.99, rating: 4.8 },
    ],
  },

  {
    id: 12,
    name: "Mia Rodriguez",
    title: "Graphic Designer",
    description: [
      "Mia creates visually stunning branding materials.",
      "She has experience with Photoshop and Illustrator.",
    ],
    skills: [
      { skill: "Photoshop", percent: 92 },
      { skill: "Illustrator", percent: 89 },
      { skill: "Branding", percent: 87 },
    ],
    courses: [
      { id: 15, name: "Brand Design Masterclass", price: 49.99, rating: 4.7 },
    ],
  },

  {
    id: 13,
    name: "Noah White",
    title: "Database Administrator",
    description: [
      "Noah manages large-scale database systems.",
      "He ensures data integrity and performance.",
    ],
    skills: [
      { skill: "MySQL", percent: 91 },
      { skill: "PostgreSQL", percent: 88 },
      { skill: "Database Optimization", percent: 85 },
    ],
    courses: [
      { id: 16, name: "SQL Advanced Queries", price: 39.99, rating: 4.6 },
    ],
  },

  {
    id: 14,
    name: "Liam Walker",
    title: "AI Engineer",
    description: [
      "Liam develops AI-powered applications.",
      "He works on NLP and deep learning projects.",
    ],
    skills: [
      { skill: "Deep Learning", percent: 90 },
      { skill: "TensorFlow", percent: 87 },
      { skill: "NLP", percent: 85 },
    ],
    courses: [{ id: 17, name: "AI Fundamentals", price: 89.99, rating: 4.9 }],
  },

  {
    id: 15,
    name: "Charlotte Harris",
    title: "Project Manager",
    description: [
      "Charlotte leads cross-functional development teams.",
      "She ensures timely delivery of software projects.",
    ],
    skills: [
      { skill: "Agile", percent: 92 },
      { skill: "Scrum", percent: 89 },
      { skill: "Team Leadership", percent: 90 },
    ],
    courses: [
      { id: 18, name: "Agile Project Management", price: 44.99, rating: 4.7 },
    ],
  },
];

export default teachers;

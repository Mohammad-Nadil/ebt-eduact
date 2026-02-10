const courses = [
  {
    id: 1,
    name: "React for Beginners",
    teacher: {
      name: "John Doe",
      title: "Senior Frontend Developer",
    },
    duration: "10h 30m",
    lessons: 12,
    students: 250,
    price: 49.99,
    overview: [
      "Learn the fundamentals of React",
      "Build interactive UIs",
      "Understand state management",
    ],
    features: {
      duration: "10h 30m",
      lessons: 12,
      studentCount: 250,
      videos: 40,
      skillLevel: "Beginner",
      language: "English",
    },
    highlights: [
      "✔ Hands-on Projects",
      "✔ Expert Teacher",
      "✔ Lifetime Access",
    ],
    reviews: [
      {
        name: "Alice Smith",
        star: 5,
        comment: "Great course! Very clear explanations.",
      },
      {
        name: "Bob Johnson",
        star: 4,
        comment: "Learned a lot, would recommend.",
      },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Advanced Node.js",
    teacher: {
      name: "Jane Williams",
      title: "Backend Engineer",
    },
    duration: "15h 0m",
    lessons: 20,
    students: 180,
    price: 69.99,
    overview: [
      "Deep dive into Node.js",
      "REST API development",
      "Authentication & Security",
    ],
    features: {
      duration: "15h 0m",
      lessons: 20,
      studentCount: 180,
      videos: 50,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: ["✔ Real-world Projects", "✔ Expert Teacher", "✔ Certificate"],
    reviews: [
      {
        name: "Charlie Brown",
        star: 5,
        comment: "Excellent course with practical examples.",
      },
      {
        name: "Dana Lee",
        star: 4,
        comment: "Challenging but rewarding.",
      },
    ],
    rating: 4.7,
  },
];

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
    socialLinks: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
    courses: [
      {
        id: 1,
        name: "React for Beginners",
        price: 49.99,
        rating: 4.5,
      },
      {
        id: 2,
        name: "Advanced Node.js",
        price: 69.99,
        rating: 4.7,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Williams",
    title: "UI/UX Designer",
    description: [
      "Jane creates intuitive and user-friendly designs for web and mobile apps.",
      "She has worked with top startups and design agencies worldwide.",
    ],
    skills: [
      { skill: "Figma", percent: 95 },
      { skill: "Adobe XD", percent: 90 },
      { skill: "Prototyping", percent: 85 },
    ],
    socialLinks: {
      facebook: "https://facebook.com/janewilliams",
      twitter: "https://twitter.com/janewilliams",
      linkedin: "https://linkedin.com/in/janewilliams",
      instagram: "https://instagram.com/janewilliams",
    },
    courses: [
      {
        id: 3,
        name: "UI/UX Design Basics",
        price: 39.99,
        rating: 4.6,
      },
      {
        id: 4,
        name: "Advanced Prototyping",
        price: 59.99,
        rating: 4.8,
      },
    ],
  },
];

const blogs = [
  {
    id: 1,
    category: "Development",
    title: "How to Become a Frontend Developer in 2026",
    date: "2026-02-10",
    author: {
      name: "John Doe",
      title: "Senior Frontend Developer",
      avatar: "/images/authors/john.png",
    },
    descriptions: [
      "Frontend development is one of the most in-demand skills in modern web development. It focuses on building user interfaces that are fast, responsive, and visually appealing.",
      "To become a successful frontend developer, you need strong fundamentals in HTML, CSS, and JavaScript, along with modern frameworks like React or Vue.",
      "Consistency, practice, and real-world projects are the key factors that help developers grow and stand out in the industry.",
    ],
    tags: ["Frontend", "React", "Career", "Web Development"],
    comments: [
      {
        name: "Alice Smith",
        comment: "Very helpful article! Clear roadmap for beginners.",
      },
      {
        name: "Bob Johnson",
        comment: "Loved the practical advice, thanks for sharing.",
      },
    ],
    socialLinks: {
      facebook: "https://facebook.com/share",
      twitter: "https://twitter.com/share",
      linkedin: "https://linkedin.com/share",
    },
  },
  {
    id: 2,
    category: "Design",
    title: "UI/UX Design Principles Every Designer Should Know",
    date: "2026-01-28",
    author: {
      name: "Jane Williams",
      title: "UI/UX Designer",
      avatar: "/images/authors/jane.png",
    },
    descriptions: [
      "UI/UX design is all about creating meaningful and intuitive user experiences for digital products.",
      "Understanding color theory, typography, and spacing plays a crucial role in making designs visually pleasing.",
      "Good UX design reduces user frustration and increases engagement and conversion rates.",
    ],
    tags: ["UI/UX", "Design", "Figma"],
    comments: [
      {
        name: "David Lee",
        comment: "This article helped me improve my design workflow.",
      },
    ],
    socialLinks: {
      facebook: "https://facebook.com/share",
      twitter: "https://twitter.com/share",
      linkedin: "https://linkedin.com/share",
    },
  },
];

export { courses, authors, blogs };

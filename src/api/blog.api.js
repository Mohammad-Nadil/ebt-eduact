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
  },

  {
    id: 2,
    category: "Development",
    title: "Mastering JavaScript Closures",
    date: "2026-01-25",
    author: {
      name: "Sarah Williams",
      title: "JavaScript Engineer",
      avatar: "/images/authors/sarah.png",
    },
    descriptions: [
      "Closures are one of the most powerful yet confusing concepts in JavaScript.",
      "Understanding lexical scope helps you unlock the real power of closures.",
      "Mastering closures allows you to write cleaner, modular, and efficient code.",
    ],
    tags: ["JavaScript", "Closures", "Programming"],
    comments: [
      {
        name: "David Lee",
        comment: "This made closures so easy to understand!",
      },
      { name: "Emma Brown", comment: "Great examples, really helped me." },
    ],
  },

  {
    id: 3,
    category: "Design",
    title: "UI/UX Principles Every Developer Should Know",
    date: "2026-01-18",
    author: {
      name: "Michael Chen",
      title: "UI/UX Designer",
      avatar: "/images/authors/michael.png",
    },
    descriptions: [
      "Good design improves usability and user satisfaction.",
      "Understanding spacing, typography, and color theory makes a huge difference.",
      "Developers who understand UX can build better digital products.",
    ],
    tags: ["UI", "UX", "Design", "Frontend"],
    comments: [
      { name: "Sophia White", comment: "Simple and practical advice!" },
      { name: "Daniel Green", comment: "Every dev should read this." },
    ],
  },

  {
    id: 4,
    category: "Career",
    title: "Building a Strong Developer Portfolio",
    date: "2026-01-12",
    author: {
      name: "Emma Johnson",
      title: "Tech Recruiter",
      avatar: "/images/authors/emma.png",
    },
    descriptions: [
      "A portfolio is your personal brand as a developer.",
      "Show real-world projects instead of tutorial clones.",
      "Keep the design clean and highlight your skills effectively.",
    ],
    tags: ["Portfolio", "Career", "Frontend"],
    comments: [
      { name: "Noah Wilson", comment: "Helped me improve my portfolio a lot!" },
    ],
  },

  {
    id: 5,
    category: "Development",
    title: "Getting Started with React Hooks",
    date: "2026-01-05",
    author: {
      name: "Olivia Martinez",
      title: "React Developer",
      avatar: "/images/authors/olivia.png",
    },
    descriptions: [
      "React Hooks simplify state and lifecycle management.",
      "useState and useEffect are the most commonly used hooks.",
      "Hooks make functional components more powerful and flexible.",
    ],
    tags: ["React", "Hooks", "Frontend"],
    comments: [
      { name: "Liam Anderson", comment: "Hooks finally make sense now!" },
    ],
  },

  {
    id: 6,
    category: "Development",
    title: "Understanding Async/Await in JavaScript",
    date: "2025-12-28",
    author: {
      name: "James Taylor",
      title: "Full Stack Developer",
      avatar: "/images/authors/james.png",
    },
    descriptions: [
      "Async/Await makes asynchronous code look synchronous.",
      "It improves readability compared to traditional promises.",
      "Error handling becomes easier with try/catch blocks.",
    ],
    tags: ["JavaScript", "Async", "Promises"],
    comments: [{ name: "Isabella Moore", comment: "Very clear explanation!" }],
  },

  {
    id: 7,
    category: "Backend",
    title: "Introduction to Node.js for Beginners",
    date: "2025-12-20",
    author: {
      name: "William Davis",
      title: "Backend Engineer",
      avatar: "/images/authors/william.png",
    },
    descriptions: [
      "Node.js allows JavaScript to run on the server.",
      "It is built on Chrome's V8 engine.",
      "Node.js is widely used for building scalable APIs.",
    ],
    tags: ["Node.js", "Backend", "JavaScript"],
    comments: [{ name: "Henry Thomas", comment: "Perfect intro to Node!" }],
  },

  {
    id: 8,
    category: "Career",
    title: "How to Prepare for a Frontend Interview",
    date: "2025-12-15",
    author: {
      name: "Ava Harris",
      title: "Software Engineer",
      avatar: "/images/authors/ava.png",
    },
    descriptions: [
      "Focus on JavaScript fundamentals and problem-solving.",
      "Be ready to explain your past projects clearly.",
      "Practice coding challenges and system design basics.",
    ],
    tags: ["Interview", "Career", "Frontend"],
    comments: [{ name: "Lucas Clark", comment: "This boosted my confidence!" }],
  },

  {
    id: 9,
    category: "Development",
    title: "CSS Grid vs Flexbox: When to Use What",
    date: "2025-12-10",
    author: {
      name: "Mia Lewis",
      title: "Frontend Developer",
      avatar: "/images/authors/mia.png",
    },
    descriptions: [
      "Flexbox is ideal for one-dimensional layouts.",
      "CSS Grid is better for complex two-dimensional layouts.",
      "Understanding both gives you full control over layout design.",
    ],
    tags: ["CSS", "Flexbox", "Grid"],
    comments: [
      { name: "Ethan Walker", comment: "Finally understand the difference!" },
    ],
  },

  {
    id: 10,
    category: "Development",
    title: "Why TypeScript is Worth Learning",
    date: "2025-12-05",
    author: {
      name: "Charlotte Hall",
      title: "Software Engineer",
      avatar: "/images/authors/charlotte.png",
    },
    descriptions: [
      "TypeScript adds static typing to JavaScript.",
      "It helps catch errors during development.",
      "Large projects benefit greatly from TypeScript structure.",
    ],
    tags: ["TypeScript", "JavaScript", "Development"],
    comments: [
      { name: "Benjamin Allen", comment: "Convincing reasons to switch!" },
    ],
  },

  {
    id: 11,
    category: "Design",
    title: "Color Theory for Web Designers",
    date: "2025-11-28",
    author: {
      name: "Amelia Young",
      title: "Creative Designer",
      avatar: "/images/authors/amelia.png",
    },
    descriptions: [
      "Color combinations affect user emotions.",
      "Contrast improves accessibility and readability.",
      "Choose brand colors that align with your message.",
    ],
    tags: ["Design", "Color", "UI"],
    comments: [{ name: "Jack King", comment: "Helpful for improving my UI!" }],
  },

  {
    id: 12,
    category: "Backend",
    title: "REST API vs GraphQL Explained",
    date: "2025-11-20",
    author: {
      name: "Logan Scott",
      title: "API Architect",
      avatar: "/images/authors/logan.png",
    },
    descriptions: [
      "REST is resource-based and widely adopted.",
      "GraphQL allows clients to request exactly what they need.",
      "Both have strengths depending on project requirements.",
    ],
    tags: ["API", "GraphQL", "REST"],
    comments: [{ name: "Ella Adams", comment: "Very balanced comparison!" }],
  },

  {
    id: 13,
    category: "Development",
    title: "Improving Website Performance",
    date: "2025-11-15",
    author: {
      name: "Alexander Baker",
      title: "Performance Engineer",
      avatar: "/images/authors/alexander.png",
    },
    descriptions: [
      "Optimize images and lazy load assets.",
      "Minimize JavaScript bundles.",
      "Use caching strategies effectively.",
    ],
    tags: ["Performance", "Optimization", "Web"],
    comments: [{ name: "Grace Nelson", comment: "Great performance tips!" }],
  },

  {
    id: 14,
    category: "Career",
    title: "Freelancing as a Web Developer",
    date: "2025-11-10",
    author: {
      name: "Harper Carter",
      title: "Freelance Developer",
      avatar: "/images/authors/harper.png",
    },
    descriptions: [
      "Build a strong online presence.",
      "Communicate clearly with clients.",
      "Deliver quality work on time to build reputation.",
    ],
    tags: ["Freelance", "Career", "Web Development"],
    comments: [
      { name: "Sebastian Perez", comment: "Motivating and realistic advice." },
    ],
  },

  {
    id: 15,
    category: "Development",
    title: "Understanding the Virtual DOM",
    date: "2025-11-05",
    author: {
      name: "Evelyn Roberts",
      title: "React Specialist",
      avatar: "/images/authors/evelyn.png",
    },
    descriptions: [
      "The Virtual DOM improves performance by minimizing real DOM updates.",
      "React compares previous and current virtual DOM states.",
      "Efficient diffing makes UI updates faster.",
    ],
    tags: ["React", "Virtual DOM", "Frontend"],
    comments: [
      { name: "Matthew Turner", comment: "Now I understand how React works!" },
    ],
  },

  {
    id: 16,
    category: "Backend",
    title: "Authentication with JWT Explained",
    date: "2025-10-28",
    author: {
      name: "Daniel Phillips",
      title: "Security Engineer",
      avatar: "/images/authors/daniel.png",
    },
    descriptions: [
      "JWT stands for JSON Web Token.",
      "It is commonly used for secure authentication.",
      "Tokens must be stored securely to prevent attacks.",
    ],
    tags: ["JWT", "Authentication", "Backend"],
    comments: [
      { name: "Victoria Campbell", comment: "Security basics explained well!" },
    ],
  },

  {
    id: 17,
    category: "Design",
    title: "Responsive Design Best Practices",
    date: "2025-10-20",
    author: {
      name: "Lily Mitchell",
      title: "Frontend Designer",
      avatar: "/images/authors/lily.png",
    },
    descriptions: [
      "Mobile-first design ensures better scalability.",
      "Use flexible grids and media queries.",
      "Test your layout on multiple devices.",
    ],
    tags: ["Responsive", "CSS", "Design"],
    comments: [
      { name: "Owen Roberts", comment: "Very practical suggestions!" },
    ],
  },

  {
    id: 18,
    category: "Development",
    title: "Introduction to Next.js 15",
    date: "2025-10-15",
    author: {
      name: "Samuel Cooper",
      title: "Next.js Developer",
      avatar: "/images/authors/samuel.png",
    },
    descriptions: [
      "Next.js 15 introduces performance improvements.",
      "Server Components make rendering more efficient.",
      "Built-in routing simplifies application structure.",
    ],
    tags: ["Next.js", "React", "Framework"],
    comments: [
      { name: "Chloe Rivera", comment: "Excited to try these new features!" },
    ],
  },

  {
    id: 19,
    category: "Career",
    title: "Remote Work Tips for Developers",
    date: "2025-10-10",
    author: {
      name: "Zoe Murphy",
      title: "Remote Engineer",
      avatar: "/images/authors/zoe.png",
    },
    descriptions: [
      "Maintain a dedicated workspace.",
      "Communicate clearly with your team.",
      "Manage your time effectively to avoid burnout.",
    ],
    tags: ["Remote", "Career", "Productivity"],
    comments: [
      { name: "Nathan Ward", comment: "Helpful for staying productive!" },
    ],
  },

  {
    id: 20,
    category: "Development",
    title: "Clean Code Principles in JavaScript",
    date: "2025-10-05",
    author: {
      name: "Christopher Brooks",
      title: "Senior Software Engineer",
      avatar: "/images/authors/christopher.png",
    },
    descriptions: [
      "Write meaningful variable and function names.",
      "Keep functions small and focused.",
      "Refactor regularly to maintain code quality.",
    ],
    tags: ["Clean Code", "JavaScript", "Best Practices"],
    comments: [
      {
        name: "Hannah Price",
        comment: "Great reminders for writing better code!",
      },
    ],
  },
];

export default blogs;

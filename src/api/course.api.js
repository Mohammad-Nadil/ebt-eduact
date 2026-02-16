const courses = [
  {
    id: 1,
    name: "React for Beginners",
    teacher: { name: "John Doe", title: "Senior  Developer" },
    duration: "10h 30m",
    lessons: 12,
    students: 250,
    price: 49.99,
    overview: [
      "Learn the fundamentals of React",
      "Build interactive UIs",
      "Understand state management",
    ],
    description:
      "This beginner-friendly React course is designed to help you understand how modern user interfaces are built using components. You will start from JSX and component structure, then move into props, state management, hooks, and API integration. Throughout the course, you will build multiple mini projects and a final real-world application. By the end, you will confidently create scalable, reusable, and performance-optimized React applications suitable for professional development environments.",
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
      { name: "Alice Smith", star: 5, comment: "Perfect for beginners!" },
      { name: "Bob Johnson", star: 4, comment: "Clear and structured." },
    ],
    rating: 4.5,
  },

  {
    id: 2,
    name: "Advanced JavaScript Engineering",
    teacher: { name: "Sarah Williams", title: "JavaScript Architect" },
    duration: "18h 15m",
    lessons: 24,
    students: 410,
    price: 69.99,
    overview: [
      "Deep dive into JavaScript internals",
      "Master async programming",
      "Understand memory management",
    ],
    description:
      "This advanced JavaScript engineering course goes beyond basic syntax and dives into how JavaScript truly works under the hood. You will explore execution context, event loop, closures, prototypes, asynchronous behavior, performance optimization, and memory handling. Through real-world debugging scenarios and architecture discussions, you will gain the skills needed to write highly optimized and maintainable code for enterprise-level applications.",
    features: {
      duration: "18h 15m",
      lessons: 24,
      studentCount: 410,
      videos: 75,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: [
      "✔ Real-world Scenarios",
      "✔ Debugging Sessions",
      "✔ Performance Focus",
    ],
    reviews: [
      { name: "Daniel Green", star: 5, comment: "Next level JS knowledge!" },
    ],
    rating: 4.8,
  },

  {
    id: 3,
    name: "Full Stack MERN Professional",
    teacher: { name: "Emily Davis", title: "Full Stack Engineer" },
    duration: "22h 40m",
    lessons: 32,
    students: 520,
    price: 89.99,
    overview: [
      "Build full stack apps",
      "Authentication & Authorization",
      "Deploy to production",
    ],
    description:
      "This complete MERN stack course teaches you how to build professional-grade applications from scratch. You will create backend APIs using Node and Express, integrate MongoDB databases, and build dynamic frontends using React. The course also includes authentication systems, role-based access control, payment integration, and deployment strategies. It is designed to simulate real-world development environments so that you graduate job-ready.",
    features: {
      duration: "22h 40m",
      lessons: 32,
      studentCount: 520,
      videos: 110,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Real-world Projects",
      "✔ Payment Integration",
      "✔ Deployment Guide",
    ],
    reviews: [
      { name: "Lucas Clark", star: 5, comment: "Best full stack course!" },
    ],
    rating: 4.9,
  },

  {
    id: 4,
    name: "Next.js 15 Production Mastery",
    teacher: { name: "Ethan Clark", title: "Next.js Specialist" },
    duration: "14h 50m",
    lessons: 19,
    students: 330,
    price: 64.99,
    overview: ["Server Components", "SEO Optimization", "Performance Tuning"],
    description:
      "This Next.js 15 mastery course focuses on building production-ready web applications using modern features such as Server Components, Static Generation, and API Routes. You will learn advanced routing patterns, middleware usage, authentication strategies, and performance improvements. By the end of the course, you will confidently deploy scalable and SEO-optimized applications to real-world hosting environments.",
    features: {
      duration: "14h 50m",
      lessons: 19,
      studentCount: 330,
      videos: 60,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: ["✔ SEO Ready", "✔ Production Setup", "✔ Advanced Routing"],
    reviews: [{ name: "Chloe Rivera", star: 5, comment: "Very practical!" }],
    rating: 4.7,
  },
  {
    id: 5,
    name: "UI/UX Design Complete Guide",
    teacher: { name: "Jane Smith", title: "Senior UI/UX Designer" },
    duration: "16h 10m",
    lessons: 21,
    students: 295,
    price: 59.99,
    overview: [
      "Design Principles",
      "Wireframing & Prototyping",
      "User Research Methods",
    ],
    description:
      "This complete UI/UX design course teaches you how to create visually appealing and user-friendly interfaces from scratch. You will learn color theory, typography, layout systems, user research, wireframing, and prototyping using modern tools like Figma. The course includes practical case studies that simulate real product design challenges faced in startups and tech companies.",
    features: {
      duration: "16h 10m",
      lessons: 21,
      studentCount: 295,
      videos: 70,
      skillLevel: "Beginner",
      language: "English",
    },
    highlights: ["✔ Case Studies", "✔ Figma Projects", "✔ Design Systems"],
    reviews: [
      { name: "Emma Wilson", star: 5, comment: "Loved the design exercises!" },
    ],
    rating: 4.6,
  },

  {
    id: 6,
    name: "DevOps & Cloud Deployment Bootcamp",
    teacher: { name: "Daniel Wilson", title: "DevOps Engineer" },
    duration: "19h 30m",
    lessons: 26,
    students: 370,
    price: 74.99,
    overview: ["Docker & Containers", "AWS Deployment", "CI/CD Pipelines"],
    description:
      "This DevOps bootcamp is focused on teaching modern deployment and infrastructure automation strategies. You will containerize applications using Docker, configure CI/CD pipelines, and deploy applications to AWS cloud services. The course emphasizes scalability, monitoring, and production-grade security practices that are essential in professional environments.",
    features: {
      duration: "19h 30m",
      lessons: 26,
      studentCount: 370,
      videos: 85,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: ["✔ AWS Setup", "✔ CI/CD Guide", "✔ Infrastructure as Code"],
    reviews: [
      {
        name: "Michael Scott",
        star: 5,
        comment: "Clear and practical DevOps guide.",
      },
    ],
    rating: 4.8,
  },
  {
    id: 7,
    name: "Mobile App Development with React Native",
    teacher: { name: "Sophia Martinez", title: "Mobile App Developer" },
    duration: "15h 20m",
    lessons: 23,
    students: 280,
    price: 69.99,
    overview: [
      "Cross-platform development",
      "React Native fundamentals",
      "Publish to App Stores",
    ],
    description:
      "This course teaches you how to develop mobile applications for both Android and iOS using React Native. You will learn about navigation, state management, performance optimization, and integrating APIs. By the end of the course, you will have a fully functional mobile app ready for deployment and distribution on app stores.",
    features: {
      duration: "15h 20m",
      lessons: 23,
      studentCount: 280,
      videos: 80,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Cross-platform Apps",
      "✔ App Store Deployment",
      "✔ Real Projects",
    ],
    reviews: [
      { name: "Olivia Lee", star: 5, comment: "Excellent mobile course!" },
    ],
    rating: 4.7,
  },

  {
    id: 8,
    name: "Data Science & Machine Learning",
    teacher: { name: "Olivia Johnson", title: "Data Scientist" },
    duration: "21h 45m",
    lessons: 29,
    students: 500,
    price: 99.99,
    overview: [
      "Data analysis with Python",
      "Machine learning algorithms",
      "Predictive modeling",
    ],
    description:
      "This data science and machine learning course covers the complete workflow from data preprocessing to model deployment. You will use Python, pandas, scikit-learn, and visualization tools to analyze datasets, create predictive models, and understand their performance. Real-world projects and case studies provide hands-on experience to prepare you for a career in data science.",
    features: {
      duration: "21h 45m",
      lessons: 29,
      studentCount: 500,
      videos: 120,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: ["✔ Real Datasets", "✔ ML Projects", "✔ Career-ready Skills"],
    reviews: [
      {
        name: "James Smith",
        star: 5,
        comment: "Highly recommended for aspiring data scientists!",
      },
    ],
    rating: 4.9,
  },

  {
    id: 9,
    name: "Cybersecurity & Ethical Hacking",
    teacher: { name: "William Taylor", title: "Cybersecurity Expert" },
    duration: "17h 30m",
    lessons: 24,
    students: 350,
    price: 79.99,
    overview: [
      "Network security fundamentals",
      "Penetration testing",
      "Ethical hacking strategies",
    ],
    description:
      "This course provides a deep dive into cybersecurity principles and ethical hacking practices. You will learn how to identify vulnerabilities, secure applications, perform penetration tests, and understand advanced security threats. Practical exercises help you gain hands-on experience and prepare for real-world security challenges.",
    features: {
      duration: "17h 30m",
      lessons: 24,
      studentCount: 350,
      videos: 90,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Hands-on Labs",
      "✔ Security Tools",
      "✔ Real-world Scenarios",
    ],
    reviews: [
      {
        name: "Ethan Moore",
        star: 5,
        comment: "Very practical and informative.",
      },
    ],
    rating: 4.8,
  },

  {
    id: 10,
    name: "Cloud Computing with AWS",
    teacher: { name: "James Anderson", title: "Cloud Engineer" },
    duration: "19h 10m",
    lessons: 27,
    students: 400,
    price: 84.99,
    overview: [
      "AWS fundamentals",
      "Deploying cloud apps",
      "Scalable architecture",
    ],
    description:
      "This AWS cloud computing course teaches how to design, deploy, and manage scalable cloud applications. You will learn EC2, S3, Lambda, VPC, and best practices for architecture and security. The course includes hands-on labs and real-world projects to solidify your knowledge and prepare for AWS certifications.",
    features: {
      duration: "19h 10m",
      lessons: 27,
      studentCount: 400,
      videos: 95,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Hands-on Labs",
      "✔ Scalable Architecture",
      "✔ Certification Prep",
    ],
    reviews: [
      {
        name: "Mia Thompson",
        star: 5,
        comment: "Great introduction to AWS cloud.",
      },
    ],
    rating: 4.7,
  },

  {
    id: 11,
    name: "AI & Deep Learning Masterclass",
    teacher: { name: "Liam Walker", title: "AI Engineer" },
    duration: "25h 00m",
    lessons: 35,
    students: 550,
    price: 119.99,
    overview: [
      "Neural networks & deep learning",
      "Computer vision applications",
      "AI project deployment",
    ],
    description:
      "This AI & Deep Learning Masterclass covers deep learning concepts, neural networks, convolutional networks for computer vision, recurrent networks for NLP, and model deployment. Practical projects allow students to implement real AI applications, providing experience that mirrors professional AI engineering tasks.",
    features: {
      duration: "25h 00m",
      lessons: 35,
      studentCount: 550,
      videos: 150,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: [
      "✔ Real AI Projects",
      "✔ Python & TensorFlow",
      "✔ Career-ready Skills",
    ],
    reviews: [
      {
        name: "Noah Roberts",
        star: 5,
        comment: "Fantastic deep learning course.",
      },
    ],
    rating: 4.9,
  },

  {
    id: 12,
    name: "Photoshop & Illustrator for Designers",
    teacher: { name: "Mia Rodriguez", title: "Graphic Designer" },
    duration: "13h 20m",
    lessons: 18,
    students: 320,
    price: 59.99,
    overview: [
      "Photo editing techniques",
      "Vector graphics",
      "Branding & visual design",
    ],
    description:
      "This course teaches graphic design essentials using Photoshop and Illustrator. You will learn image editing, photo manipulation, vector graphics, logo design, and branding. Practical exercises include real-world design projects to build a strong portfolio and enhance creative skills for professional work.",
    features: {
      duration: "13h 20m",
      lessons: 18,
      studentCount: 320,
      videos: 65,
      skillLevel: "Beginner",
      language: "English",
    },
    highlights: [
      "✔ Real Design Projects",
      "✔ Portfolio Ready",
      "✔ Creative Exercises",
    ],
    reviews: [
      {
        name: "Charlotte Hill",
        star: 5,
        comment: "Very creative and easy to follow.",
      },
    ],
    rating: 4.6,
  },

  {
    id: 13,
    name: "Database Management & SQL",
    teacher: { name: "Noah White", title: "Database Administrator" },
    duration: "15h 40m",
    lessons: 22,
    students: 310,
    price: 54.99,
    overview: [
      "SQL queries & optimization",
      "Database design",
      "Data integrity & security",
    ],
    description:
      "This database management course focuses on SQL, relational database design, indexing, optimization techniques, and security measures. Students will learn to build, query, and maintain databases effectively. Hands-on labs and exercises provide practical knowledge needed to manage enterprise-level database systems efficiently.",
    features: {
      duration: "15h 40m",
      lessons: 22,
      studentCount: 310,
      videos: 70,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ SQL Practice",
      "✔ Indexing & Optimization",
      "✔ Security Essentials",
    ],
    reviews: [
      { name: "Ethan Hall", star: 5, comment: "Perfect for learning SQL." },
    ],
    rating: 4.7,
  },

  {
    id: 14,
    name: "Agile Project Management",
    teacher: { name: "Charlotte Harris", title: "Project Manager" },
    duration: "12h 50m",
    lessons: 16,
    students: 280,
    price: 49.99,
    overview: ["Agile methodology", "Scrum framework", "Team management"],
    description:
      "This Agile project management course teaches the core principles of Agile methodology and Scrum framework. Students will learn sprint planning, backlog management, effective communication, and team leadership techniques. Real-life case studies ensure practical understanding and readiness to lead software projects in professional settings.",
    features: {
      duration: "12h 50m",
      lessons: 16,
      studentCount: 280,
      videos: 55,
      skillLevel: "Beginner",
      language: "English",
    },
    highlights: ["✔ Scrum Practices", "✔ Team Leadership", "✔ Real Projects"],
    reviews: [
      { name: "Sophia King", star: 5, comment: "Very practical and useful." },
    ],
    rating: 4.6,
  },
  {
    id: 15,
    name: "Python Programming Mastery",
    teacher: { name: "Olivia Baker", title: "Python Developer" },
    duration: "18h 00m",
    lessons: 25,
    students: 460,
    price: 74.99,
    overview: [
      "Python fundamentals",
      "Data structures & OOP",
      "Real-world projects",
    ],
    description:
      "This comprehensive Python course covers all essentials from beginner to advanced topics. You will learn about variables, data types, control structures, functions, object-oriented programming, and working with external libraries. Practical projects include data analysis, automation scripts, and mini web applications to build real-world skills and confidence.",
    features: {
      duration: "18h 00m",
      lessons: 25,
      studentCount: 460,
      videos: 100,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Hands-on Projects",
      "✔ Industry Examples",
      "✔ Lifetime Access",
    ],
    reviews: [
      { name: "Liam Scott", star: 5, comment: "Excellent Python course!" },
    ],
    rating: 4.8,
  },

  {
    id: 16,
    name: "Advanced CSS & Tailwind Masterclass",
    teacher: { name: "Emma Wilson", title: "Frontend Designer" },
    duration: "14h 25m",
    lessons: 20,
    students: 390,
    price: 59.99,
    overview: [
      "Flexbox & Grid",
      "Animations & Transitions",
      "Responsive designs",
    ],
    description:
      "This course dives deep into modern CSS techniques and Tailwind CSS. You will learn how to create responsive, visually appealing layouts using Flexbox and Grid, implement animations and transitions, and utilize utility-first CSS for rapid UI development. Projects include real-world web page designs and UI components.",
    features: {
      duration: "14h 25m",
      lessons: 20,
      studentCount: 390,
      videos: 85,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: ["✔ Modern Layouts", "✔ Tailwind CSS", "✔ UI Components"],
    reviews: [
      {
        name: "Noah Hill",
        star: 5,
        comment: "Learned modern CSS best practices!",
      },
    ],
    rating: 4.7,
  },

  {
    id: 17,
    name: "Node.js & Express API Development",
    teacher: { name: "Michael Brown", title: "Backend Developer" },
    duration: "16h 50m",
    lessons: 23,
    students: 420,
    price: 69.99,
    overview: [
      "Build REST APIs",
      "Express.js fundamentals",
      "Database integration",
    ],
    description:
      "This Node.js and Express course teaches you to build fully functional RESTful APIs. You will learn routing, middleware, authentication, and database integration with MongoDB. The course includes hands-on projects where you create APIs for e-commerce, blogging platforms, and more, preparing you for professional backend development.",
    features: {
      duration: "16h 50m",
      lessons: 23,
      studentCount: 420,
      videos: 90,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: ["✔ REST APIs", "✔ Middleware", "✔ Real Projects"],
    reviews: [
      {
        name: "Sophia Carter",
        star: 5,
        comment: "Very practical backend course!",
      },
    ],
    rating: 4.8,
  },

  {
    id: 18,
    name: "React Native Advanced Techniques",
    teacher: { name: "Sophia Martinez", title: "Mobile Developer" },
    duration: "17h 40m",
    lessons: 24,
    students: 310,
    price: 79.99,
    overview: [
      "Navigation & State Management",
      "Animations",
      "API integration",
    ],
    description:
      "This React Native advanced course teaches you how to build production-ready mobile applications. You will cover advanced navigation, state management with Redux, animations, and integrating REST APIs. Real-world projects ensure hands-on experience, preparing you to launch apps on the App Store and Google Play.",
    features: {
      duration: "17h 40m",
      lessons: 24,
      studentCount: 310,
      videos: 95,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: [
      "✔ Redux State Management",
      "✔ Animations",
      "✔ Mobile Deployment",
    ],
    reviews: [
      {
        name: "Mia Thompson",
        star: 5,
        comment: "Perfect for React Native devs!",
      },
    ],
    rating: 4.9,
  },

  {
    id: 19,
    name: "Graphic Design with Canva & Photoshop",
    teacher: { name: "Mia Rodriguez", title: "Graphic Designer" },
    duration: "13h 50m",
    lessons: 19,
    students: 280,
    price: 49.99,
    overview: ["Design templates", "Photo editing", "Branding projects"],
    description:
      "This course teaches modern graphic design using Canva and Photoshop. You will learn to create social media posts, marketing materials, and branding assets with hands-on projects. It focuses on design principles, typography, color theory, and layout composition, preparing you to create professional visuals for business or personal projects.",
    features: {
      duration: "13h 50m",
      lessons: 19,
      studentCount: 280,
      videos: 70,
      skillLevel: "Beginner",
      language: "English",
    },
    highlights: ["✔ Canva Templates", "✔ Photoshop Skills", "✔ Brand Assets"],
    reviews: [
      {
        name: "Charlotte Harris",
        star: 5,
        comment: "Very creative and practical!",
      },
    ],
    rating: 4.6,
  },

  {
    id: 20,
    name: "SQL & Database Optimization",
    teacher: { name: "Noah White", title: "Database Administrator" },
    duration: "15h 10m",
    lessons: 21,
    students: 320,
    price: 54.99,
    overview: [
      "Advanced SQL queries",
      "Database indexing",
      "Optimization techniques",
    ],
    description:
      "This advanced SQL course teaches complex query writing, indexing, normalization, and optimization techniques. You will gain hands-on experience designing efficient databases and improving query performance, suitable for enterprise-level applications and backend development. Real-world projects prepare you to manage large-scale databases confidently.",
    features: {
      duration: "15h 10m",
      lessons: 21,
      studentCount: 320,
      videos: 75,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: ["✔ SQL Mastery", "✔ Database Optimization", "✔ Real Projects"],
    reviews: [
      { name: "Liam Walker", star: 5, comment: "Excellent SQL deep dive!" },
    ],
    rating: 4.8,
  },
  {
    id: 21,
    name: "Artificial Intelligence Foundations",
    teacher: { name: "Ethan Moore", title: "AI Specialist" },
    duration: "24h 00m",
    lessons: 32,
    students: 500,
    price: 109.99,
    overview: [
      "AI fundamentals",
      "Machine learning basics",
      "Practical AI projects",
    ],
    description:
      "This course introduces the foundations of Artificial Intelligence, including machine learning concepts, supervised and unsupervised learning, and basic neural networks. Students will work on practical AI projects such as predictive analytics and recommendation systems, gaining real-world experience that prepares them for AI-focused roles in tech companies.",
    features: {
      duration: "24h 00m",
      lessons: 32,
      studentCount: 500,
      videos: 140,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Practical AI Projects",
      "✔ Machine Learning",
      "✔ Career-ready Skills",
    ],
    reviews: [
      { name: "Sophia King", star: 5, comment: "Excellent AI introduction!" },
    ],
    rating: 4.9,
  },

  {
    id: 22,
    name: "Docker & Kubernetes Essentials",
    teacher: { name: "Michael Scott", title: "DevOps Engineer" },
    duration: "18h 30m",
    lessons: 27,
    students: 420,
    price: 79.99,
    overview: [
      "Containerization with Docker",
      "Kubernetes orchestration",
      "Deploy scalable apps",
    ],
    description:
      "This course teaches containerization with Docker and orchestration with Kubernetes. Students will learn to package applications, deploy scalable containerized apps, manage clusters, and ensure smooth CI/CD pipelines. Real-world exercises include deploying web applications and microservices to cloud environments.",
    features: {
      duration: "18h 30m",
      lessons: 27,
      studentCount: 420,
      videos: 90,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: ["✔ Docker Labs", "✔ Kubernetes Setup", "✔ CI/CD Integration"],
    reviews: [
      { name: "Lucas Clark", star: 5, comment: "Hands-on DevOps course!" },
    ],
    rating: 4.8,
  },

  {
    id: 23,
    name: "Ethereum & Blockchain Development",
    teacher: { name: "Charlotte Hill", title: "Blockchain Developer" },
    duration: "20h 15m",
    lessons: 29,
    students: 350,
    price: 99.99,
    overview: [
      "Smart contracts",
      "Decentralized apps (dApps)",
      "Ethereum blockchain",
    ],
    description:
      "This blockchain development course teaches students to build decentralized applications using Ethereum. You will learn Solidity for smart contract development, deploy contracts on the blockchain, and integrate them into full-stack dApps. Practical projects give hands-on experience in modern blockchain technologies and decentralized systems.",
    features: {
      duration: "20h 15m",
      lessons: 29,
      studentCount: 350,
      videos: 110,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: [
      "✔ Smart Contracts",
      "✔ Ethereum dApps",
      "✔ Hands-on Projects",
    ],
    reviews: [
      { name: "Emma Wilson", star: 5, comment: "Fantastic blockchain course!" },
    ],
    rating: 4.9,
  },

  {
    id: 24,
    name: "Python for Data Analysis & Visualization",
    teacher: { name: "Liam Walker", title: "Data Analyst" },
    duration: "16h 50m",
    lessons: 25,
    students: 480,
    price: 74.99,
    overview: [
      "Data cleaning with Python",
      "Visualization using Matplotlib & Seaborn",
      "Insights from datasets",
    ],
    description:
      "This course teaches data analysis using Python, covering data cleaning, manipulation, and visualization. Students will work on real datasets, creating charts, dashboards, and actionable insights using libraries like pandas, Matplotlib, and Seaborn. The course prepares learners for data analyst roles with practical skills applicable to real-world problems.",
    features: {
      duration: "16h 50m",
      lessons: 25,
      studentCount: 480,
      videos: 95,
      skillLevel: "Intermediate",
      language: "English",
    },
    highlights: [
      "✔ Real Datasets",
      "✔ Visualization Projects",
      "✔ Career-ready Skills",
    ],
    reviews: [
      { name: "Noah Roberts", star: 5, comment: "Clear and practical course!" },
    ],
    rating: 4.8,
  },

  {
    id: 25,
    name: "Full Stack Web Security",
    teacher: { name: "Sophia Martinez", title: "Security Engineer" },
    duration: "19h 20m",
    lessons: 28,
    students: 370,
    price: 84.99,
    overview: [
      "Web security fundamentals",
      "Secure authentication",
      "Protect apps from attacks",
    ],
    description:
      "This full stack security course teaches developers to secure web applications from vulnerabilities and attacks. You will learn about secure authentication, encryption, session management, input validation, and preventing common threats like XSS, CSRF, and SQL injection. Hands-on labs and projects provide practical experience to implement security best practices across the full stack.",
    features: {
      duration: "19h 20m",
      lessons: 28,
      studentCount: 370,
      videos: 100,
      skillLevel: "Advanced",
      language: "English",
    },
    highlights: [
      "✔ Security Best Practices",
      "✔ Hands-on Labs",
      "✔ Protect Real Apps",
    ],
    reviews: [
      {
        name: "Mia Thompson",
        star: 5,
        comment: "Essential for any web developer!",
      },
    ],
    rating: 4.9,
  },{
id: 26,
name: "Advanced React Patterns",
teacher: { name: "John Doe", title: "Senior Frontend Developer" },
duration: "12h 50m",
lessons: 18,
students: 320,
price: 59.99,
overview: [
"Compound components",
"Custom hooks",
"Render props & HOCs",
],
description:
"This advanced React course dives into modern design patterns to write clean, reusable, and maintainable React code. You will explore compound components, custom hooks, context patterns, render props, and higher-order components. Practical projects include building a component library and scalable real-world applications suitable for professional frontend development.",
features: {
duration: "12h 50m",
lessons: 18,
studentCount: 320,
videos: 70,
skillLevel: "Advanced",
language: "English",
},
highlights: ["✔ Reusable Components","✔ Custom Hooks","✔ Real-world Projects"],
reviews: [
{ name: "Alice Smith", star: 5, comment: "Excellent patterns for React devs!" }
],
rating: 4.8,
},

{
id: 27,
name: "TypeScript & Modern JavaScript",
teacher: { name: "Sarah Williams", title: "JavaScript Architect" },
duration: "14h 30m",
lessons: 20,
students: 360,
price: 64.99,
overview: [
"Type safety with TypeScript",
"Advanced JS concepts",
"Error handling & patterns",
],
description:
"This course teaches TypeScript from the ground up and covers how to integrate it with modern JavaScript projects. You will learn type safety, interfaces, generics, enums, type inference, and error handling. Projects include building robust applications and migrating existing JS apps to TypeScript to ensure scalable and maintainable codebases.",
features: {
duration: "14h 30m",
lessons: 20,
studentCount: 360,
videos: 75,
skillLevel: "Intermediate",
language: "English",
},
highlights: ["✔ Type-safe Code","✔ Modern JS","✔ Practical Projects"],
reviews: [
{ name: "David Lee", star: 5, comment: "TypeScript made simple and practical!" }
],
rating: 4.7,
},

{
id: 28,
name: "GraphQL with Apollo Client",
teacher: { name: "Emily Davis", title: "Full Stack Developer" },
duration: "13h 45m",
lessons: 17,
students: 310,
price: 69.99,
overview: [
"GraphQL queries & mutations",
"Apollo Client integration",
"State management",
],
description:
"Learn how to use GraphQL to efficiently fetch and manage data in modern web applications. This course covers defining schemas, queries, mutations, and integrating Apollo Client with React. Hands-on projects include building real-world apps with optimized data fetching and state management patterns.",
features: {
duration: "13h 45m",
lessons: 17,
studentCount: 310,
videos: 65,
skillLevel: "Intermediate",
language: "English",
},
highlights: ["✔ Apollo Client","✔ Optimized Data Fetching","✔ Real Projects"],
reviews: [
{ name: "Lucas Clark", star: 5, comment: "GraphQL concepts explained clearly!" }
],
rating: 4.8,
},

{
id: 29,
name: "Web Animation with GSAP",
teacher: { name: "Ethan Clark", title: "Frontend Animator" },
duration: "10h 50m",
lessons: 14,
students: 280,
price: 54.99,
overview: [
"GSAP fundamentals",
"Scroll-based animations",
"Interactive UI effects",
],
description:
"This course teaches web animation using GSAP. Students will learn timeline creation, stagger effects, scroll triggers, and interactive UI animations. Projects include animating landing pages, buttons, and complex sequences to create engaging and dynamic user experiences.",
features: {
duration: "10h 50m",
lessons: 14,
studentCount: 280,
videos: 50,
skillLevel: "Beginner",
language: "English",
},
highlights: ["✔ Scroll Animations","✔ Interactive UI","✔ Hands-on Projects"],
reviews: [
{ name: "Chloe Rivera", star: 5, comment: "Animations made easy and fun!" }
],
rating: 4.6,
},

{
id: 30,
name: "Serverless Development with Firebase",
teacher: { name: "Michael Brown", title: "Backend Developer" },
duration: "12h 40m",
lessons: 16,
students: 300,
price: 59.99,
overview: [
"Firebase Auth & Firestore",
"Serverless functions",
"Realtime apps",
],
description:
"Learn how to build serverless applications using Firebase. This course covers authentication, Firestore database, cloud functions, and real-time data synchronization. Students will create chat apps, dashboards, and simple e-commerce projects, gaining hands-on experience with modern serverless architecture.",
features: {
duration: "12h 40m",
lessons: 16,
studentCount: 300,
videos: 55,
skillLevel: "Beginner",
language: "English",
},
highlights: ["✔ Serverless Apps","✔ Firebase Auth & DB","✔ Real-time Projects"],
reviews: [
{ name: "Mia Thompson", star: 5, comment: "Very practical serverless course!" }
],
rating: 4.7,
},

];

export default courses;

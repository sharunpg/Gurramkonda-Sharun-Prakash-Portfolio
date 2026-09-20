export const LINKS = {
  github: "https://github.com/sharunpg",
  linkedin: "https://www.linkedin.com/in/sharun-prakash-gurramkonda-27459b25b/",
  leetcode: "https://leetcode.com/u/sharunpg/",
  email: "mailto:Sharun2794@gmail.com",
};

export const PROFILE = {
  name: "Gurramkonda Sharun Prakash",
  headline: "Test Engineer | Software Engineer | Full-Stack Developer | AI/ML Enthusiast",
  location: "Bengaluru, Karnataka",
  email: "Sharun2794@gmail.com",
  intro:
  "Computer Science Engineering graduate and Test Engineer at Soais IT Solutions, working on Workday applications and business processes. Skilled in Java, Spring Boot, React.js, Python, SQL, REST APIs, software testing and AI/ML, with a focus on building reliable and well-tested solutions.",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const EXPERIENCE = [
  {
    role: "Test Engineer",
    company: "SOA IT Solutions",
    period: "August 2026 – Present",
    points: [
      "Working as a Test Engineer on Workday-based applications and business processes.",
      "Performing functional testing and validating Workday workflows against business and functional requirements.",
      "Creating and executing test scenarios, test cases, and validating application results.",
      "Identifying, documenting, and tracking defects while collaborating with teams to support issue resolution.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Exposys Data Labs",
    period: "May 2025 – July 2025",
    points: [
      "Collaborated with cross-functional teams in an Agile/Scrum environment.",
      "Contributed to 3 full-stack web solutions using Java, JavaScript, HTML5, CSS3, and REST APIs.",
      "Worked with CI/CD and ESLint workflows and 10+ automated build/code-quality checks.",
      "Troubleshot and resolved 20+ software issues based on senior engineer feedback.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Hospital Appointment Management System",
    description:
      "Full-stack hospital management platform with secure JWT authentication and role-based authorization for Admin, Doctor, and Patient users.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "React.js",
      "REST APIs",
      "Swagger",
    ],
    highlights: [
      "Spring Security and BCrypt password hashing",
      "REST API development with request validation",
      "PostgreSQL with Hibernate/JPA",
      "Swagger/OpenAPI documentation",
      "Global exception handling",
      "React.js frontend with API integration",
    ],
  },
  {
    title: "Multi-Modal Misinformation Detection System",
    description:
      "AI-powered system for detecting misinformation across text, image, and URL inputs.",
    tech: ["Python", "Sentence-BERT", "spaCy", "Streamlit", "NLP"],
    highlights: [
      "Processed 1,000+ samples",
      "NLP classification with Sentence-BERT and spaCy",
      "Data pipelines for multi-modal inputs",
      "Model testing and optimization",
      "Tested 15+ edge cases",
    ],
  },
  {
    title: "Scam Message Detection Android App",
    description:
      "Android application that detects malicious URLs and scam messages using real-time threat verification.",
    tech: ["Java", "Android Studio", "Google Safe Browsing API"],
    highlights: [
      "Google Safe Browsing REST API integration",
      "Built in Java with Android Studio",
      "50+ test cases executed",
      "15+ defects identified and resolved",
    ],
  },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Java", "Python", "SQL", "JavaScript (ES6)"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "API Integration", "JWT Authentication"],
  },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "Database Design"] },
  {
    category: "AI/ML",
    items: ["Machine Learning", "NLP", "Sentence-BERT", "spaCy", "Streamlit"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS Cloud Fundamentals", "Docker", "Kubernetes", "CI/CD Fundamentals"],
  },
  {
    category: "Testing",
    items: [
      "Unit Testing",
      "Integration Testing",
      "API Testing",
      "Functional Testing",
      "Debugging",
      "Root Cause Analysis",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "CS Fundamentals",
    items: ["Object-Oriented Programming", "Data Structures & Algorithms", "SDLC", "Agile"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Technology — Computer Science Engineering",
  school: "GITAM University, Bengaluru",
  period: "August 2022 – May 2026",
};

export const CERTIFICATIONS = [
  { name: "AWS Cloud Essentials", issuer: "Amazon Web Services" },
  { name: "Software Engineering Job Simulation", issuer: "JPMorgan Chase / Forage" },
  { name: "Deloitte Technology Job Simulation", issuer: "Forage" },
  { name: "Fundamental Relational Data Concepts", issuer: "Microsoft" },
];

export const ACHIEVEMENTS = [
  "3rd Place — IEEE Technical Quiz Competition, GITAM University",
  "Smart India Hackathon participant",
  "232+ problems solved on LeetCode",
];

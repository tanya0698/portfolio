import { WorkExperience, SkillCategory, Project, Education, ContactInfo } from "@shared/schema";

export const contactInfo: ContactInfo = {
  email: "eltonchipuka@gmail.com",
  phone: "+263 78 754 1207",
  location: "Harare, Zimbabwe",
  linkedin: "https://linkedin.com/in/elton-chipuka-497b98121",
  github: "https://github.com/eltonchipuka",
};

export const education: Education = {
  degree: "Bachelor of Science (Honors) in Computer Science",
  institution: "University of Zimbabwe",
  location: "Harare, Zimbabwe",
  startDate: "August 2018",
  endDate: "August 2022",
  grade: "Upper Second Class (2.1)",
};

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    title: "Graduate Trainee (Research & Development)",
    company: "City Parking Pvt Ltd",
    location: "Harare, Zimbabwe",
    startDate: "August 2023",
    endDate: "Present",
    achievements: [
      "Engineered a microservice to monitor system uptime and performance, reducing mean time to resolution by 25% and managing 2 servers with automated SMS, email, and WhatsApp alerts",
      "Developed a geofencing platform, tracking over 1,000 daily user transactions, identifying anomalies in real-time and improving issue detection by 30%",
      "Designed and implemented a performance calculation engine, automating daily scoring for 200+ users and 200+ precincts, increasing deployment efficiency by 40%",
      "Built a full-stack asset and device issuance system, managing 300+ hardware assets, improving accountability and reducing asset misplacement by 35%",
      "Led frontend development for an ERP system, creating an intuitive UI that reduced user task completion time by 20% across 20+ operational modules",
      "Developed a responsive task and asset management frontend, integrating event logging for 500+ tasks daily, improving cross-department tracking efficiency by 25%",
      "Created a customer query resolution and performance tracker, logging 500+ client queries per month, improving query resolution speed by 30% and handler performance monitoring",
    ],
  },
  {
    id: "2",
    title: "IT Intern",
    company: "MorniPac Consultants",
    location: "Harare, Zimbabwe",
    startDate: "October 2020",
    endDate: "August 2021",
    achievements: [
      "Collaborated with a senior developer to build and maintain 2 PHP and MySQL websites, improving user responsiveness and interface efficiency by 25%",
      "Performed digital data recovery for forensic analysis, successfully restoring over 90% of lost or corrupted client data",
      "Assisted in network troubleshooting and configuration of routers and switches, reducing system downtime by 30% through proactive maintenance and diagnostics",
      "Conducted security audits and implemented best practices that strengthened data protection and minimized vulnerabilities",
      "Provided technical support to 20+ internal and external users, resolving issues with an average response time under 1 hour and improving overall system reliability",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "ReactJS",
      "jQuery",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "ASP.NET Core",
      "ASP.NET MVC",
      "Spring Boot",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    category: "Databases & ORM",
    skills: [
      "MySQL",
      "Microsoft SQL Server",
      "MongoDB",
      "Entity Framework",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "C#", "Java", "SQL"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "SonarQube",
      "CI/CD Pipelines",
      "Postman",
      "Swagger/OpenAPI",
      "Jest",
      "JUnit",
    ],
  },
  {
    category: "Project Management",
    skills: ["Jira", "Trello", "Scrum", "Kanban", "Agile Methodologies"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "System Uptime Monitoring Service",
    description:
      "Microservice for real-time server monitoring with multi-channel alerting capabilities",
    technologies: ["Node.js", "Express", "SMS API", "Email", "WhatsApp Integration"],
    metrics: "25% reduction in MTTR, 2 servers monitored",
  },
  {
    id: "2",
    title: "Geofencing Platform",
    description:
      "Real-time transaction tracking and anomaly detection system for location-based services",
    technologies: ["ReactJS", "Node.js", "Geolocation API", "Real-time Analytics"],
    metrics: "1,000+ daily transactions, 30% improvement in issue detection",
  },
  {
    id: "3",
    title: "Performance Calculation Engine",
    description:
      "Automated scoring system for users and precincts with daily performance metrics",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Scheduled Jobs"],
    metrics: "200+ users, 200+ precincts, 40% efficiency increase",
  },
  {
    id: "4",
    title: "Asset & Device Management System",
    description:
      "Full-stack solution for hardware asset tracking and accountability",
    technologies: ["ReactJS", "TypeScript", "Node.js", "MySQL"],
    metrics: "300+ assets managed, 35% reduction in misplacement",
  },
  {
    id: "5",
    title: "Enterprise ERP System",
    description:
      "Comprehensive frontend interface for business operations management",
    technologies: ["ReactJS", "TypeScript", "REST APIs", "UI/UX Design"],
    metrics: "20+ modules, 20% faster task completion",
  },
  {
    id: "6",
    title: "Customer Query Resolution Tracker",
    description:
      "Performance monitoring and query management system for customer support",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Analytics Dashboard"],
    metrics: "500+ queries/month, 30% faster resolution",
  },
];

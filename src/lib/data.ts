// lib/data.ts
import { Briefcase, Code, GraduationCap } from "lucide-react";

// Define and export the type for a single project
export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    live: string;
    github: string;
};

// Define and export your projects array
export const projects: Project[] = [
    {
        id: 1,
        title: "Dream-Canvas",
        description: "DreamCanvas is a full-stack AI-powered platform that allows users to generate high-quality images, train custom AI models, and manage subscriptions using Stripe.",
        technologies: ["Next.js", "React", "ShadCN UI", "Supabase", "Tailwind CSS", "Stripe"],
        image: "/project 1.png",
        live: "https://Dream-Canvas.vercel.app",
        github: "https://github.com/Abdelrahman-Abdelaziz1/Dream-Canvas",
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A modern, SEO-optimized portfolio showcasing my skills and projects. Built from the ground up with Next.js, Tailwind CSS, and Framer Motion to create a fast and engaging user experience.",
        technologies: ["Next.js", "React", "TypeScript", "Shadcn UI", "Tailwind CSS"],
        image: "/porto.png",
        live: "#",
        github: "https://github.com/Abdelrahman-Abdelaziz1/Personal-portfolio",
    },
    {
      id: 3,
      title: "NexusPlay",
      description: "A dynamic game discovery platform built with React.js, integrating the RAWG API to fetch and display popular games. Features include search functionality, genre-based filtering, infinite scrolling, and a responsive design achieved with Tailwind CSS and Chakra UI. React Query and Axios were employed for efficient data fetching.",
      technologies: ["Vite", "React", "TypeScript", "ChakraUI", "Tailwind CSS"],
      image: "/nexus.jpg",
      live: "https://nexus-play-six.vercel.app/",
      github: "https://github.com/Abdelrahman-Abdelaziz1/NexusPlay",
  },
  {
    id: 4,
    title: "Aura",
    description: "AURA is a modern music discovery interface with a sleek “Deep Space” design. It features smooth animations, glassmorphism effects, and a 3D carousel synced with real-time audio playback, showcasing advanced CSS and JavaScript integration.",
    technologies: ["HTML", "CSS", "Swiper"],
    image: "/Aura.png",
    live: "https://aura-tau-dun.vercel.app/",
    github: "https://github.com/Abdelrahman-Abdelaziz1/AURA",
},

 
];

export const historyData = [
  {
    icon: GraduationCap,
    title: "Master of Data Science",
    institution: "TU Darmstadt",
    date: "2025 - 2027 (Expected)",
    description:
      "Advanced studies in machine learning, data analysis, and business intelligence. Pursuing specialized coursework to extract actionable insights from real-world datasets.",
  },
  {
    icon: Briefcase,
    title: "Data Science Intern",
    company: "Orange Business",
    date: "2024 - 2025",
    description:
      "Designed machine learning models on telecom datasets for behavior patterns and churn prediction. Built Power BI dashboards and automated data pipelines to support business decision-making.",
  },
  {
    icon: Briefcase,
    title: "Data Science Intern",
    company: "Misr Technology Services (MTS)",
    date: "2024 - 2024",
    description:
      "Conducted end-to-end data analysis including EDA, preprocessing, and feature engineering using Python and SQL. Developed interactive BI dashboards to streamline reporting processes and enhance data quality.",
  },
  {
    icon: GraduationCap,
    title: "B.Sc. in Information Engineering and Technology",
    institution: "German University in Cairo",
    date: "2020 - 2025",
    description:
      "Completed foundational degree in engineering and technology. Focused on technical skills in Python, SQL, Java, and database management.",
  },
];

export const frontendTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn UI",
  "Zustand", // From your DreamCanvas project
  "TanStack Query",
  "Framer Motion" // You use this in your current portfolio
];

export const backendTech = [
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "Supabase",
  "PostgreSQL",
  "Django",
  "FastAPI", // Great for your Data Science background
  "Zod" // Crucial for your validation logic
];

export const toolsAndDevops = [
  "GitHub", 
  "Vercel", 
  "Docker", 
  "Stripe", // You have professional experience with this
  "Resend", // You are using this for your contact form
  "Git"
];

export const programmingLanguages = ["JavaScript", "Java", "C++", "Python"];


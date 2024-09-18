import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import evento from "@/public/evento.png"
import blog from "@/public/blog.png";
import happiness from "@/public/hapiness.webp";
import portfolios from "@/public/portfolios.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed School",
    location: "Sulatanpur,U.P.",
    description:
      "I completed my schooling 10th and 12th with 89% and 95% respectively",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "Graudation ",
    location: "Sultanpur, U.P.",
    description:
      "I am currently persuing bachelors of technology and currently i am in my last year and i am Seeking for Job ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Web  Developer",
    location: "Remote Job",
    description:
      "Developed an Invoice generation API by using Java Spring Boot that can generate invoices for customers as well as for businesses and can be downloaded in the form of PDF.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec-2022 - Mar-2023",
  },
  {
    title: "Java FullStack Trainee",
    location: "JSpiders - Training & Development Center, Bengaluru",
    description:
      "At JSpiders, I trained as a Java Full Stack Developer, gaining expertise in Core and Advanced Java, SQL, JDBC, Hibernate, HTML, CSS, and JavaScript. I worked on practical projects, enhancing my skills and problem-solving abilities, while receiving valuable guidance from experienced instructors, preparing me for a successful career.",
    icon: React.createElement(FaReact),
    date: "Apr-2024 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "EventO",
    description:
      "I worked as a Backend developer on this college project Discover seamless event planning with our intuitive platform, designed to manage every detail from start to finish. ",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "ExpressJs"],
    imageUrl: evento,
  },
  {
    title: "The Coding Scribe",
    description:
      "Experience engaging storytelling on my blog, where insightful content and a user-friendly design create a vibrant community centered around shared interests and passions.",
    tags: ["React", "ExpressJs", "Node.js", "Tailwind", "Jodit Editor"],
    imageUrl: blog,
  },
  {
    title: "Happiness",
    description:
      "Experience effortless online shopping with our custom-built eCommerce websites, designed for a seamless and engaging customer journey.",
    tags: ["React", "Tailwind", "MongoDB"],
    imageUrl: happiness,
  }, {
    title: "Portfolios",
    description:
      "Create a stunning portfolio website that highlights your talents and achievements, designed to leave a lasting impression.",
    tags: ["React", "Tailwind"],
    imageUrl: portfolios,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;

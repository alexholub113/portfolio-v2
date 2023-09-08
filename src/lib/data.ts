import corpCommentImg from "../../public/images/projects/corpcomment.png";
import wordAnalyticsImg from "../../public/images/projects/wordanalytics.png";
import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';

type NavigationLinkData = {
  name: string;
  hash: string;
};
export const links: NavigationLinkData[] = [
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
];

export type ProjectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

export const projectsData: ProjectData[] = [
  {
    title: "CorpComment",
    description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpCommentImg,
  },
  {
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordAnalyticsImg,
  },
];

type SkillsData = {
  category: string;
  skills: string[];
};

export const skillsData: SkillsData[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Front-End",
    skills: ["React", "Next.js", "Tailwind", "Framer", "Redux"],
  },
  {
    category: "Back-End",
    skills: ["Node.js", "Express", "Prisma", "MongoDB", "SQL"],
  },
  {
    category: "AWS",
    skills: ["Lambda", "Fargate", "Api Gateway"],
  },
  {
    category: "Databases",
    skills: ["Oracle", "MS Sql", "PostgreSql", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GraphQL", "Apollo"],
  }
];

type ExperienceData = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
};

export const experiencesData: ExperienceData[] = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
];

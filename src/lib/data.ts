import corpCommentImg from "../files/images/projects/corpcomment.png";
import wordAnalyticsImg from "../files/images/projects/wordanalytics.png";
import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { ExperienceData, NavigationLinkData, ProjectData, SkillData } from './types.ts';

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

export const projectsData: ProjectData[] = [
  {
    title: "CorpComment",
    description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpCommentImg,
    githubUrl: "https://www.oleksandrholub.com",
    projectUrl: "https://www.oleksandrholub.com",
  },
  {
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordAnalyticsImg,
    githubUrl: "https://www.oleksandrholub.com",
    projectUrl: "https://www.oleksandrholub.com",
  },
];

export const skillsData: SkillData[] = [
  {
    category: "Languages",
    subSkills: [".NET C#", "JavaScript", "Java"],
  },
  {
    category: "Back-End Frameworks",
    subSkills: ["ASP.NET Web Api", "EF Core", "Node.js", "TypeORM", "Unity3d", "Node.js"],
  },
  {
    category: "Front-End Frameworks",
    subSkills: ["React.JS", "Next.JS", "Vue.JS", "TypeScript", "Tailwind", "MobX", "Jest"],
  },
  {
    category: "AWS",
    subSkills: ["Lambda", "Fargate", "Api Gateway", "DynamoDB", "SNS/SQS", "S3", "Cognito"],
  },
  {
    category: "Databases",
    subSkills: ["Oracle", "MS Sql", "PostgreSql", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "Architectures",
    subSkills: ["Microservices", "Micro-frontends", "CQRS", "DDD", "REST", "Distributed Systems"],
  },
  {
    category: "CI/CD",
    subSkills: ["Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Octopus Deploy", "Vault", "Terraform"],
  }
];

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

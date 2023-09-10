
import React from 'react';
import {SiNamecheap} from 'react-icons/si';
import {ExperienceData} from '../types.ts';

const experienceData: ExperienceData[] = [
    {
        title: "Full-Stack Software Engineer",
        company: "Namecheap, Inc",
        location: "Ukraine/USA",
        description:
            "At namecheap.com, a domain registrar, my main focus was supporting existing functionality, bug fixing, and minor optimizations.\n" +
            "In the new project spaceship.com, a product platform for purchasing domains, hosting, and SSL certificates, I worked on expanding the functionality specifically related to domain names.\n" +
            "My role involved API design, database work, microservice development, frontend development, and participating in the production deployment process.",
        accomplishments: [
            "Developed microservices and micro-frontends to establish highly scalable application architecture, driving $200M of revenue every year.",
            "Used such tools: Vault, Teamcity, Jenkins, Docker, OpenSearch, Kibana.",
            "Implemented and designed domain business logic, leading to a significant 23% increase in global revenue",
            "Made strategic technology decisions to drive project success and optimize outcomes.",
            "Coordinated with cross-functional teams to align priorities and collaboratively achieve project goals.",
            "Implemented Continuous Integration/Deployment pipelines, conducted pull requests, code reviews, load/stress testing, and unit/integration testing.",
            "Utilized Scrum and Kanban methodologies for estimating work hours and tracking progress.",
        ],
        skills: [".NET", "Node", "React", "AWS", "RDB", "NoSql"],
        icon: React.createElement(SiNamecheap),
        date: "2020 - 2023",
    }
];
export default experienceData;

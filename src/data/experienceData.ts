
import React from 'react';
import { SiDotnet, SiNamecheap } from 'react-icons/si';
import {ExperienceData} from '../types.ts';

const experienceData: ExperienceData[] = [
    {
        title: "Full-Stack Software Engineer",
        company: "Namecheap, Inc",
        location: "Ukraine/USA",
        description:
            "At namecheap.com, a domain registrar, my main focus was supporting existing functionality, bug fixing, and minor optimizations.\n" +
            " In the new project spaceship.com, a product platform for purchasing domains, hosting, and SSL certificates, I worked on expanding the functionality specifically related to domain names.\n" +
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
    },
    {
        title: "Full-Stack Software Engineer",
        company: "Dedicated Lab",
        location: "Ukraine",
        description:
            "In my role as a senior full stack software engineer, I worked on a project using " +
            ".NET Core for the backend and Vue for the frontend. My responsibilities included " +
            "breaking down a monolithic application into modules, integrating DDD paradigms, and" +
            " implementing the CQRS architectural style. I also gained some leadership experience" +
            " and was responsible for the domain logic and design of multiple bounded contexts.",
        accomplishments: [
            "Developed essential back-end and front-end features for comprehensive web application.",
            "Divided monolithic application into modular components to align with Domain-Driven Design (DDD) principles.",
            "Implemented Command Query Responsibility Segregation (CQRS) pattern to enhance parallel development by separating queries and commands.",
            "Incorporated Sagas to enable distributed transactions and ensure robustness in application.",
            "Actively contributed to professional growth of team members by sharing knowledge and mentoring.",
            "Built databases and table structures for web applications.",
        ],
        skills: [".NET", "Vue JS", "CQRS", "Sagas", "PostgreSQL"],
        icon: React.createElement(SiDotnet),
        date: "2019 - 2020",
    },
    {
        title: ".NET / Java Software Engineer",
        company: "Akvelon (Tideworks Technology)",
        location: "Ukraine",
        description:
            "Worked on dynamically controlling container handling equipment in a terminal." +
            " I integrated new functionality into a tightly coupled system, performed extensive" +
            " refactoring, and wrote numerous procedures in Oracle. Subsequently, I transitioned" +
            " to a project focused on gaining experience in distributed systems. This involved" +
            " developing microservices using Java and React, applying Domain-Driven Design (DDD)" +
            " principles, and utilizing Kafka for messaging. Although unfamiliar with these " +
            "technologies initially, I dedicated myself to learning and studying extensively," +
            " making it a highly engaging and enriching experience.",
        accomplishments: [
            "Implemented essential back-end functionality for both microservices and monolithic architectures.",
            "Developing applications for the management of automated cranes at container terminals (IoT).",
            "Implemented and utilized custom frameworks that enhance development of integration tests.",
            "Developed and refactored Oracle procedures to enhance performance and maintainability.",
            "Mastered Java Spring, Hibernate, and other related technologies to expand capabilities and contribute to more exciting projects.",
            "Integrated Kafka to enable efficient asynchronous communication among microservices.",
        ],
        skills: [".NET", "Java", "Oracle", "Spring", "Kafka", "ActiveMQ", "IoT"],
        icon: React.createElement(SiDotnet),
        date: "2014 - 2029",
    },
    {
        title: ".NET Software Engineer",
        company: "Lavasoft",
        location: "Ukraine",
        description:
            "Used critical thinking to break down problems, evaluate solutions and make decisions.",
        skills: [".NET", "WPF", "MVVM"],
        icon: React.createElement(SiDotnet),
        date: "2013 - 2014",
    },
    {
        title: ".NET Software Engineer",
        company: "SMISS",
        location: "Ukraine",
        description:
            "Coordinated with other engineers to evaluate and improve software.",
        skills: [".NET", "WinForms"],
        icon: React.createElement(SiDotnet),
        date: "2012 - 2013",
    }
];
export default experienceData;

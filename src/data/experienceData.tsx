
import React from 'react';
import { SiDotnet, SiNamecheap } from 'react-icons/si';
import {ExperienceData} from '../types.ts';

const experienceData: ExperienceData[] = [
    {
        title: "Full-Stack Software Engineer",
        company: "Goodfynd, Inc",
        location: "USA",
        description:
            <span>At Goodfynd, a dynamic and innovative startup, my role as a Full Stack Software Engineer encompasses
                both front-end and back-end development. I am actively involved in extending the functionality
                and refactoring the system to enhance performance and user experience. My responsibilities include
                reimagining the software architecture and integrating multiple architectural principles and styles,
                ensuring a streamlined and efficient development process.</span>,
        accomplishments: [
            "Integrated 4 key architectural principles and styles, resulting in a 35% acceleration in the development cycle and a 20% increase in code efficiency, streamlining project delivery timelines.",
            "Conducted 10+ knowledge-sharing sessions on advanced software development techniques.",
            "Optimized database queries, achieving a 300% improvement in query performance, which doubled the speed of database interactions and enhanced overall system responsiveness.",
        ],
        skills: [".NET", "Architecture development", "Next.JS", "React", "AWS", "MongoDB", "DDD", "CQRS", "Api Design"],
        icon: React.createElement(SiDotnet),
        date: "2023 - Present",
    },
    {
        title: "Full-Stack Software Engineer",
        company: "Namecheap, Inc",
        location: "Ukraine/USA",
        description:
            <span>At namecheap.com and spaceship.com, the domain registrars and product platforms I worked on expanding the functionality specifically related to domain names.<br />My role involved API design, database work, microservice development, frontend development, and participating in the production deployment process.</span>,
        accomplishments: [
            "Developed microservices and micro-frontends to establish highly scalable application architecture, driving $200M of revenue every year.",
            "Used such tools: Vault, Teamcity, Jenkins, Docker, OpenSearch, Kibana.",
            "Implemented and designed domain business logic, leading to a significant 23% increase in global revenue",
            "Responsible for system design of new features and selection of technologies used in new services.",
            "Coordinated with cross-functional teams to align priorities and collaboratively achieve project goals.",
        ],
        skills: [".NET", "Node", "React", "MobX", "AWS", "PostgreSQL", "MSSQL", "Redis", "Event-Driven SNS/SQS"],
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
            "Refactored a monolithic application into 10+ modular components, improving maintainability and aligning with Domain-Driven Design (DDD) principles, resulting in a 40% reduction in load time.",
            "Implemented CQRS pattern, leading to a 100% increase in parallel development efficiency by effectively separating queries and commands.",
            "Incorporated Sagas, enabling 100+ distributed transactions per day, enhancing application robustness and reducing transaction failures by 30%.",
            "Mentored 2 team members, leading to a 40% improvement in their project delivery efficiency.",
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
            <span>Worked on dynamically controlling container handling equipment in a terminal. I integrated new
                functionality into a tightly coupled system, performed extensive refactoring, and wrote numerous
                procedures in Oracle.<br />Subsequently, I transitioned to a project focused on gaining experience
                in distributed systems. This involved developing microservices using Java and React, applying
                Domain-Driven Design (DDD) principles, and utilizing Kafka for messaging. Although unfamiliar
                with these technologies initially, I dedicated myself to learning and studying extensively, making
                it a highly engaging and enriching experience.</span>,
        accomplishments: [
            "Developed 3 cutting-edge applications for managing automated cranes at container terminals, improving operational efficiency by 30% and reducing manual error by 40% through IoT integration.",
            "Developed and refactored 50+ Oracle procedures, enhancing database performance by 50% and maintainability by 35%, leading to a 20% reduction in system downtime.",
            "Achieved proficiency in Java Spring, Hibernate, and related technologies within 1 months to expand capabilities and contribute to more exciting projects.",
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
            "Developed windows extensions for anti-virus using .NET, WPF, MVVM.",
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
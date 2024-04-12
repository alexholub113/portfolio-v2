
import React from 'react';
import { SiDotnet, SiNamecheap } from 'react-icons/si';
import {ExperienceData} from '../types.ts';

const experienceData: ExperienceData[] = [
    {
        title: "Senior Software Engineer, Remote",
        company: "Goodfynd, Inc",
        location: "Houston, TX, USA",
        description:
            <span>As a Full Stack Software Engineer at Goodfynd, I spearheaded the optimization of application stability
                and development velocity by solving architectural challenges.<br/>My responsibilities included redesigning
                the software architecture by integrating advanced architectural principles, which significantly improved
                system stability and streamlined the development process.<br/>I also optimized API and database interactions,
                enhancing server response times and overall system efficiency, while fostering a collaborative and efficient development environment.</span>,
        accomplishments: [
            "Successfully integrated key architectural principles and styles, doubling code efficiency and accelerating the development cycle by 100%, which streamlined project delivery timelines.",
            "Conducted over 10 knowledge-sharing sessions, educating peers on advanced software development techniques and best practices.",
            "Enhanced database query performance by 300%, resulting in a twofold increase in database interaction speed and significantly improving overall system responsiveness.",
        ],
        skills: [".NET", "React", "TypeScript", "AWS", "MongoDB"],
        icon: React.createElement(SiDotnet),
        date: "2023 - Present",
    },
    {
        title: "Senior Software Engineer, Remote",
        company: "Namecheap, Inc",
        location: "Houston, TX, USA",
        description:
            <span>As a Full Stack Software Engineer at Namecheap, the second largest domain name registrar globally, I specialized in
                distributed systems architecture.<br/>My responsibilities encompassed designing and developing microservices to
                introduce new functionalities, crafting robust APIs, and managing database operations.<br/>I also contributed to frontend
                development and actively participated in the production deployment process, ensuring seamless integration and
                performance across all services.</span>,
        accomplishments: [
            "Engineered microservices and micro-frontends, crafting a highly scalable web services that generated $200M in annual revenue.",
            "Utilized a suite of development tools including Vault, TeamCity, Jenkins, Docker, OpenSearch, and Kibana to enhance operational efficiencies and deployment processes.",
            "Designed and implemented domain-specific business logic, contributing to a 23% increase in global revenue.",
            "Led the system design for new features, strategically selecting technologies to optimize service performance and integration.",
            "Collaborated with cross-functional teams to synchronize priorities and drive successful project outcomes.",
        ],
        skills: [".NET", "Node", "React", "TypeScript", "AWS", "PostgreSQL", "MSSQL", "Redis"],
        icon: React.createElement(SiNamecheap),
        date: "2020 - 2023",
    },
    {
        title: "Senior Software Engineer, Remote",
        company: "Dedicated Lab",
        location: "Kharkiv, Ukraine",
        description:
            <span>As a Full Stack Software Engineer at Dedicated Lab, I focused on modernizing the software architecture
                by breaking down a monolithic application into a microservices-based architecture.<br />My responsibilities involved
                integrating Domain-Driven Design (DDD) paradigms and implementing the Command Query Responsibility Segregation (CQRS)
                architectural style to enhance scalability and maintainability.<br/>Additionally, I led the development of various subsystems,
                ensuring robust performance and seamless functionality across the platform.</span>,
        accomplishments: [
            "Successfully integrated asynchronous communication between modules, enhancing inter-service data flow and responsiveness.",
            "Refactored a monolithic application into more than 10 microservices, significantly improving system maintainability and reducing load times by 40% through alignment with Domain-Driven Design (DDD) principles.",
            "Implemented distributed transactions across microservices, bolstering application robustness and ensuring consistent data integrity.",
            "Mentored two team members, fostering their professional growth and enhancing team capabilities in complex software development environments.",
        ],
        skills: [".NET", "Vue JS", "PostgreSQL"],
        icon: React.createElement(SiDotnet),
        date: "2019 - 2020",
    },
    {
        title: "Software Engineer, Onsite",
        company: "Tideworks Technology",
        location: "Kharkiv, Ukraine",
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
        title: "Software Engineer, Onsite",
        company: "Lavasoft",
        location: "Kharkiv, Ukraine",
        description:
            "Developed windows extensions for anti-virus using .NET, WPF, MVVM.",
        skills: [".NET", "WPF", "MVVM"],
        icon: React.createElement(SiDotnet),
        date: "2013 - 2014",
    },
    {
        title: ".NET Software Engineer, Onsite",
        company: "SMISS",
        location: "Kharkiv, Ukraine",
        description:
            "Coordinated with other engineers to evaluate and improve software.",
        skills: [".NET", "WinForms"],
        icon: React.createElement(SiDotnet),
        date: "2012 - 2013",
    }
];
export default experienceData;
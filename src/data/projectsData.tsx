import mobileGameImg from '../files/images/projects/mobile-game.png';
import notesAppImg from '../files/images/projects/notes-app.png';
import sharelinkImg from '../files/images/projects/sharelink.png';
import {ProjectData} from '../types.ts';

export const projectsData: ProjectData[] = [
    {
        title: "ShareLink.dev",
        description:
            <span>ShareLink is a website designed to assist developers in quickly sharing and accessing links
                to various best practices. It enables users to filter or search for links by tags, covering all
                layers of development: databases, backend, frontend, cloud, CI/CD.</span>,
        skills: [".NET 8", "PostgreSQL", "React", "Typescript", "Clean Architecture", "Azure", "Docker", "CI/CD"],
        imageUrl: sharelinkImg,
        githubUrl: "https://github.com/saj113/sharelink",
        projectUrl: "https://www.sharelink.dev",
    },
    {
        title: "Notes using AWS Lambda RESTFull APP",
        description:
            <span>Notes is a RESTful API built with AWS Lambda, API Gateway, DynamoDB, and SAM.
            The API allows users to create, read, update, and delete notes.</span>,
        skills: ["Node", "TypeScript", "AWS Lambda", "AWS DynamoDB", "AWS API Gateway", "AWS SAM"],
        imageUrl: notesAppImg,
        githubUrl: "https://github.com/saj113/aws-serverless-notes-backend",
        projectUrl: "http://notes.oleksandrholub.com/",
    },
    {
        title: "Unity3d Mobile Game",
        description:
            <span>The game was intended to be an RPG with a focus on tactical battles and procedurally generated levels.
            Throughout the development process, I encountered numerous challenges.<br />My main priority was to put the
            principles of Object-Oriented Programming (OOP) and Gang of Four Design Patterns into practical use during
             the development process.</span>,
        skills: [".NET", "Unity3d", "OOP", "SOLID"],
        imageUrl: mobileGameImg,
        githubUrl: "https://github.com/saj113/art-of-darkness",
        projectUrl: "https://youtu.be/LlAk4d5UcQc?si=BZTgDv0HXuUpfPoF",
    },
];
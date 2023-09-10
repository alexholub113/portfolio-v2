import corpCommentImg from '../files/images/projects/corpcomment.png';
import wordAnalyticsImg from '../files/images/projects/wordanalytics.png';
import {ProjectData} from '../types.ts';

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

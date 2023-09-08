import React from 'react';

export type SectionName = 'Home' | 'About' | 'Projects' | 'Skills' | 'Experience' | 'Contact';

export type NavigationLinkData = {
    name: SectionName;
    hash: string;
};

export type ProjectData = {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    githubUrl: string;
    projectUrl: string;
};

export type SkillsData = {
    category: string;
    skills: string[];
};

export type ExperienceData = {
    title: string;
    location: string;
    description: string;
    icon: React.ReactElement;
    date: string;
};

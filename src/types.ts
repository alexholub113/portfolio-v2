import React from 'react';

export type SectionName = 'Home' | 'About' | 'Projects' | 'Skills' | 'Experience' | 'Contact';

export type NavigationLinkData = {
    name: SectionName;
    hash: string;
};

export type ProjectData = {
    title: string;
    description: string | React.ReactElement;
    skills: string[];
    imageUrl: string;
    githubUrl: string;
    projectUrl: string;
};

export type SkillData = {
    category: string;
    subSkills: string[];
};

export type ExperienceData = {
    title: string;
    company: string;
    location: string;
    description: string;
    accomplishments?: string[];
    skills: string[];
    icon: React.ReactElement;
    date: string;
};

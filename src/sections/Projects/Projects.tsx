import React from 'react';
import SectionHeading from '../../components/SectionHeading.tsx';
import { projectsData } from '../../lib/data.ts';
import Project from './components/Project.tsx';
import useSectionInView from '../../hooks/useSectionInView.ts';

const Projects = () => {
    const { ref } = useSectionInView('Projects', 0.5);
    return (
        <section id="projects" ref={ref}>
            <SectionHeading>My Projects</SectionHeading>
            {projectsData.map((project) => (
                <React.Fragment key={project.title}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </section>
    );
};

export default Projects;

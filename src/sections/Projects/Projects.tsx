import React from 'react';
import SectionHeading from '../../components/SectionHeading.tsx';
import { projectsData } from '../../lib/data.ts';
import Project from './components/Project.tsx';

const Projects = () => {
    return (
        <section>
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

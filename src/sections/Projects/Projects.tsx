import React from 'react';
import SectionHeading from '../../components/SectionHeading.tsx';
import Project from './components/Project.tsx';
import useSectionInView from '../../hooks/useSectionInView.ts';
import {projectsData} from '../../data/projectsData.ts';

const Projects = () => {
    const { ref } = useSectionInView('Projects', 0.5);
    return (
        <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
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

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import SkillTagList from '../../../components/SkillTagList.tsx';
import {ProjectData} from '../../../types.ts';

const Project = (project: ProjectData) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0">
            <div className="bg-slate-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-slate-200 transition sm:group-even:pl-3">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">
                        {project.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-700">
                        {project.description}
                    </p>
                    <div className="mt-2 flex items-center">
                        <a
                            className="text-2xl focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
                            href={project.githubUrl}
                            target={"_blank"}
                            aria-label={`${project.title} github link`}
                        >
                            <BsGithub />
                        </a>
                        <a
                            href={project.projectUrl}
                            target={"_blank"}
                            className="group/button flex items-center text-2xl focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
                            ml-2 rounded-lg transition bg-dark p-2 px-6 font-semibold sm:px-4 sm:text-base
            "
                            aria-label={`${project.title} Application`}
                        >
                            Visit Project
                            <BsArrowRight className="opacity-70 group-hover/button:translate-x-1 transition" />
                        </a>
                    </div>
                    <SkillTagList tags={project.tags} />
                </div>
                <img src={project.imageUrl} alt={project.title}
                     className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40" />
            </div>
        </motion.div>
    );
};

export default Project;

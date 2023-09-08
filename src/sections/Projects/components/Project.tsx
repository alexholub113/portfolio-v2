import { ProjectData } from '../../../lib/data.ts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
            <div className="
            rounded-lg
        bg-gray-100 max-w-[50rem] border border-black/5 
        overflow-hidden sm:pr-8 relative sm:h-[20rem]
        mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition
        group-even:pl-5">
                <div className="p-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%]
            flex flex-col h-full group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">
                        {project.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                        {project.description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {project.tags.map((tag) => (
                            <li key={tag} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <img src={project.imageUrl} alt={project.title}
                     className="
                 absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                 group-hover:scale-[1.04]
                 group-even:-right-[initial] group-even:-left-40
                 
                 group-hover:-translate-x-3
                 group-hover:translate-y-3
                 group-hover:-rotate-2
                 
                 group-even:group-hover:translate-x-3
                 group-even:group-hover:-translate-y-3
                 group-even:group-hover:rotate-2
                 transition" />
            </div>
        </motion.div>
    );
};

export default Project;

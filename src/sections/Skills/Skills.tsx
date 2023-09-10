import SectionHeading from '../../components/SectionHeading.tsx';
import useSectionInView from '../../hooks/useSectionInView.ts';
import { motion } from 'framer-motion';
import SkillsCard from './components/SkillsCard.tsx';
import {skillsData} from '../../data/skillsData.ts';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const Skills = () => {
    const { ref } = useSectionInView('Skills');
    return (
        <section id="skills"
                 ref={ref}
                 className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-3 text-slate-600">
                {skillsData.map((skill, index) => (
                    <motion.li
                        
                        key={skill.category}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        <SkillsCard {...skill} />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;

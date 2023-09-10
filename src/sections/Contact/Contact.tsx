import useSectionInView from '../../hooks/useSectionInView.ts';
import { motion } from "framer-motion";
import SectionHeading from '../../components/SectionHeading.tsx';

const Contact = () => {
    const { ref } = useSectionInView('Contact');
    return (
        <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{
                            once: true,
                        }}>
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-slate-700 -mt-6">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:a.golub113@gmail.com">
                    a.golub113@gmail.com
                </a>{" "}
            </p>
        </motion.section>
    );
};
export default Contact;

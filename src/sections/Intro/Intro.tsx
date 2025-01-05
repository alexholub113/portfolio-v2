import profilePic from "../../files/images/profile/developer-pic-2.png";
import resume from "../../files/Alex Holub - Resume.pdf";
import FadeDiv from '../../components/animaitons/FadeDiv.tsx';
import FallingDiv from '../../components/animaitons/FallingDiv.tsx';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '../../context/ActiveSectionContext.tsx';
import useSectionInView from '../../hooks/useSectionInView.ts';

const Intro = () => {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section id="home" ref={ref} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <FadeDiv className="relative">
                    <img src={profilePic} alt="Alex portrait" width={300} height={300} />
                </FadeDiv>
            </div>
            <FallingDiv direction="up">
                <p
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                >
                    <span className="font-bold">Hello, I'm Alex. </span>
                    <br/>
                    I'm a <span className="font-bold">Full Stack Software Engineer</span> with{" "}
                    <span className="font-bold">10 years</span> of experience. I enjoy
                    building <span className="italic">complex distributed systems</span>.
                </p>
            </FallingDiv>
            <FallingDiv direction="up" transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
                <a
                    href="#contact"
                    className="
                        group
                        bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                        outline-none focus::scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                       setActiveSection("Contact");
                       setTimeOfLastClick(Date.now());
                   }}>
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a href={resume} target="_blank" className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus::scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
                borderBlack">
                    My Resume
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                borderBlack"
                href="https://www.linkedin.com/in/oleksandr-holub-ua/" target="_blank">
                    <BsLinkedin />
                </a>
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                borderBlack"
                   href="https://github.com/saj113" target="_blank">
                    <FaGithubSquare />
                </a>
            </FallingDiv>
        </section>
    );
};

export default Intro;
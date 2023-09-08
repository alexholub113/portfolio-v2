import profilePic from "../../../public/images/profile/developer-pic-1.png";
import AppearingDiv from '../../components/animaitons/AppearingDiv.tsx';
import FallingDiv from '../../components/animaitons/FallingDiv.tsx';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

const Intro = () => {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <AppearingDiv className="relative">
                    <img src={profilePic} alt="Alex portrait" width={400} height={400} />
                </AppearingDiv>
            </div>
            <FallingDiv direction="up">
                <p
                    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                >
                    <span className="font-bold">Hello, I'm Alex.</span> I'm a{" "}
                    <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">10 years</span> of experience. I enjoy
                    building <span className="italic">complex distributed systems</span>.
                </p>
            </FallingDiv>
            <FallingDiv direction="up" transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
                <a href="#contact" className="
                group
                bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus::scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a href="../../../public/CV_OleksandrHolub.pdf" download className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus::scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
                border border-black/10">
                    Download CV
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                border border-black/10"
                href="https://www.linkedin.com/in/oleksandr-holub-ua/" target="_blank">
                    <BsLinkedin />
                </a>
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus::scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                border border-black/10" 
                   href="https://github.com/saj113" target="_blank">
                    <FaGithubSquare />
                </a>
            </FallingDiv>
        </section>
    );
};

export default Intro;

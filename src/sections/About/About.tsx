import FallingDiv from '../../components/animaitons/FallingDiv.tsx';
import SectionHeading from '../../components/SectionHeading.tsx';
import useSectionInView from '../../hooks/useSectionInView.ts';

const About = () => {
    const { ref } = useSectionInView('About');
    return (
        <FallingDiv direction="up" transition={{ delay: 0.175 }}>
            <section id="about" ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28">
                <SectionHeading>About me</SectionHeading>
                <p className="mb-3">
                    Hey, here you will find something about me.
                </p>
                <p className="mb-3">
                    I've been in the software engineering field for around 10 years, 
                    and it's been an exciting journey so far. Initially, I started as a back-end engineer, 
                    but over the past 5 years, I've transitioned into a full-stack role. 
                    It's allowed me to have a broader perspective and tackle challenges 
                    from both the front and back ends.
                </p>
                <p className="mb-3">
                    I have worked with all modern architectures using {" "}
                    <span className="font-medium">.NET C#, JAVA and Node.js</span>{" "}on backend side, 
                    and{" "}<span className="font-medium">React, TypeScript, Vue.Js</span> on front end side.
                    This includes: monolith, microservices, micro-frontends, DDD, CQRS, event-driven architecture styles. I am always looking to learn new technologies.
                </p>
                <p>
                    One of my favorite parts of the job is being responsible for designing 
                    new services. I enjoy brainstorming and coming up with innovative 
                    solutions that meet the needs of the users and the project goals.
                </p>
            </section>
        </FallingDiv>
    );
};

export default About;

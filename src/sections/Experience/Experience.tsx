import useSectionInView from '../../hooks/useSectionInView.ts';
import SectionHeading from '../../components/SectionHeading.tsx';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from 'react';
import SkillTagList from '../../components/SkillTagList.tsx';
import experienceData from '../../data/experienceData.tsx';

const Experience = () => {
    const { ref } = useSectionInView('Experience', 0.25);
    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor="" layout="1-column">
                {experienceData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f1f5f9",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af",
                            }}
                            icon={item.icon}
                            iconStyle={{
                                background: "#475569",
                                color: "#fff",
                            }}
                            date={item.date}
                        >
                            <div className="flex justify-between">
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <h3 className="font-semibold">{item.company}</h3>
                            </div>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-slate-700">
                                {item.description}
                            </p>
                            { item.accomplishments && (
                                <p>
                                    <ul className="ml-5 space-y-1 font-normal text-base text-slate-600 list-disc list-inside">
                                        {item.accomplishments.map(x => (
                                            <li>{x}</li>
                                        ))}
                                    </ul>
                                </p>
                            )}
                            <p>
                                <SkillTagList tags={item.skills} />
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
    };

export default Experience;

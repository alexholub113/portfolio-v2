import { SectionName } from '../lib/types.ts';
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '../context/ActiveSectionContext.tsx';
import { useEffect } from 'react';

const useSectionInView = (sectionName: SectionName, threshold: number = 0.75) => {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}
export default useSectionInView;

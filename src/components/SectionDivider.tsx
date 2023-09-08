import FallingDiv from './animaitons/FallingDiv.tsx';

const SectionDivider = () => {
    return (
        <FallingDiv direction="up"
                    transition={{ delay: 0.125 }}
                    className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20" />
    );
};

export default SectionDivider;

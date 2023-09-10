type SkillTagListProps = {
    tags: string[];
};

const SkillTagList = ({ tags }: SkillTagListProps) => {
    return (
        <ul className={`flex flex-wrap mt-4 gap-2 sm:mt-auto`}>
            {tags.map((tag) => (
                <li className="bg-slate-600 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
                    {tag}
                </li>
            ))}
        </ul>
        
    );
}

export default SkillTagList;

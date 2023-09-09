import { SkillData } from '../../../lib/types.ts';

const SkillsCard = (skill: SkillData) => {
    return (
        <div className="flex flex-col bg-slate-300 borderBlack rounded-xl px-5 py-3 w-[12rem] h-[19rem] shadow-xl">
            <h1 className="mb-2 text-xl uppercase font-medium leading-tight opacity-90">
                {skill.category}
            </h1>
            <div className="flex flex-col space-y-2 h-full justify-center">
                {skill.subSkills.map((subSkill) => (
                    <p key={subSkill} className="text-slate-700 text-center opacity-80">{subSkill}</p>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;

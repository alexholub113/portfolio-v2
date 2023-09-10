import { FaPaperPlane } from 'react-icons/fa';
import React from 'react';

type FormState = {
    senderEmail: string;
    message: string;
};

const reducer = (prev: FormState, next: Partial<FormState>): FormState => {
    return {...prev, ...next};
};
const SendEmailForm = () => {
    const [state, dispatch] = React.useReducer(reducer, {senderEmail: '', message: ''});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);
    };
    return (
        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
            <input type="email" className="h-14 rounded-lg borderBlack p-4"
                   placeholder="Your email" required maxLength={500}
                   value={state.senderEmail} onChange={(e) => dispatch({senderEmail: e.target.value})}/>
            <textarea className="h-52 my-3 rounded-lg borderBlack p-4"
                      placeholder="Your message" required maxLength={500}
                      value={state.message} onChange={(e) => dispatch({message: e.target.value})}/>
            <button type="submit" className="
                        group flex items-center gap-2 justify-center h-[3rem] w-[8rem] 
                        bg-slate-900 text-white rounded-full outline-none transition-all
                        focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105">
                Send <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
        </form>
    );
};
export default SendEmailForm;

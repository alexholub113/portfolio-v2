﻿import { links } from "../lib/data";
import FallingDiv from './animaitons/FallingDiv.tsx';

const NavBar = () => {
    return (
        <div className="z-[999] relative">
            <FallingDiv
                direction="down"
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                initial={{ x: "-50%" }}
                animate={{ x: "-50%" }}
            ></FallingDiv>
            
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <FallingDiv direction="down" className="h-3/4 flex items-center justify-center relative">
                            <li
                                key={link.hash}>
                                <a className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition hover:cursor-pointer">
                                    {link.name}
                                </a>
                            </li>
                        </FallingDiv>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

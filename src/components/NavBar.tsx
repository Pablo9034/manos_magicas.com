import '#styles/global.css';
import { useState, useEffect } from 'react';
import ShoppingBag from './ShoppingBag/ShoppingBag.tsx';

const NavBar = ({ sections }: { sections: string[] })=> {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let foundVisible = false;
            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase()) as HTMLDivElement;
                const rect = element.getBoundingClientRect();
                
                const isVisible = (rect.top <= 60 && rect.bottom > 0);
                
                if (isVisible) {
                    setActiveSection(section.toLowerCase());
                    foundVisible = true;
                }
            });
            if (!foundVisible) {
                setActiveSection('');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <nav className="sticky top-3 z-50 py-3 px-3 
                        bg-white/70 backdrop-blur-sm border-b-2 border-gray-500
                        grid grid-cols-[1fr_35px] items-center gap-3  rounded-full">
            <div className='pl-5 flex gap-1 overflow-x-hidden overflow-y-hidden'>
                {
                    sections.map((section)=>(
                        <a  href={`/#${section.toLowerCase()}`}
                            className={
                                `transition-[font-weight,scale] duration-300
                                ${activeSection === section.toLowerCase() 
                                    ? 'font-bold scale-120 text-black' 
                                    : 'font-normal scale-100 text-black/60'}
                            `}>
                            { section }
                        </a>
                    ))
                }
            </div>

            <ShoppingBag />
        </nav>
    );
};

export default NavBar;
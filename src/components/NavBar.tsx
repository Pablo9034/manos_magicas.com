import '#styles/global.css';
import React, { useState, useEffect } from 'react';

const NavBar = ({ sections }: { sections: string[] })=> {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            let foundVisible = false;
            
            sections.forEach((section) => {
                const element = document.getElementById(section.toLowerCase()) as HTMLDivElement;
                const rect = element.getBoundingClientRect();
                
                const isVisible = (rect.top <= 0 && rect.bottom > 0);
                
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
        <nav className="text-lg sticky top-0 z-50 bg-white/70 py-3 backdrop-blur-md rounded-b-md
                        flex justify-center items-center gap-3">
            {
                sections.map((section)=>(
                    <a  href={`/#${section.toLowerCase()}`}
                        className={` transition-[font-weight,scale] duration-300
                            ${activeSection === section.toLowerCase() ? 'font-bold scale-120' : 'font-normal scale-100'}`}
                    >
                        { section }
                    </a>
                ))
            }
        </nav>
    );
};

export default NavBar;
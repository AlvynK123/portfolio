//link (next js) 
import Link from 'next/link';

//next hooks
import { usePathname } from 'next/navigation';

//framer motion
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const links = [
    {path: '/', name: 'home', sectionId: 'home'},
    {path: '/projects', name: 'my projects', sectionId: 'projects'},
    {path: '/about', name: 'skills', sectionId: 'about'},
    {path: '/contact', name: 'contact', sectionId: 'contact'},
]

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
    const [activeSection, setActiveSection] = useState('/');

    useEffect(() => {
        const sections = links.map(link => document.getElementById(link.sectionId));
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = links.find(link => link.sectionId === entry.target.id);
                    if (activeLink) {
                        setActiveSection(activeLink.path);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={`#${link.sectionId}`}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll(link.sectionId);
                        }}
                    >
                        {activeSection === link.path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
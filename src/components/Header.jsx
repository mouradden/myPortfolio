import React, { useState, useEffect } from 'react';
import { socials } from '../assets/socialsData';


const Header = ({ scrollToSection }) => {
  const [currentSection, setCurrentSection] = useState('profile');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setCurrentSection(sectionId);
            console.log('Current section:', sectionId);
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold based on when you want the section to be considered in view
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className=" w-full md:w-1/3 h-1/2 md:h-screen bg-[#141c3c] flex flex-col items-center justify-around">
        <div className=" flex flex-col items-start justify-center space-y-8">
          <h1 className="text-5xl text-white font-bold">Mourad Denguir</h1>
          <h2 className="text-lg text-white font-semibold">Web/Mobile Developer</h2>
          <p className="text-gray-400 px-4">
            I'm a web developer. I love transforming ideas into code and I love learning new things.
          </p>
        </div>
        <div className="hidden md:block w-full p-4">
          <ul className="flex md:flex-col space-x-4 md:space-y-4 md:space-x-0">
          <li 
              className={`text-md text-gray-400 relative cursor-pointer transition-all duration-300 pl-4 ${
                currentSection === 'profile' 
                  ? 'text-white text-2xl before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-green-500' 
                  : 'text-gray-300 hover:text-gray-100 hover:text-lg'
              }`} 
              onClick={() => scrollToSection('profile')}
            >
              Profile
            </li>
            <li 
              className={`text-md text-gray-400 relative cursor-pointer transition-all duration-300 pl-4 ${
                currentSection === 'projects' 
                  ? 'text-white text-2xl before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-green-500' 
                  : 'text-gray-300 hover:text-gray-100 hover:text-lg'
              }`} 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </li>
            <li 
              className={`text-md text-gray-400 relative cursor-pointer transition-all duration-300 pl-4 ${
                currentSection === 'contact' 
                  ? 'text-white text-2xl before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-green-500' 
                  : 'text-gray-300 hover:text-gray-100 hover:text-lg'
              }`} 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className='flex flex-row space-x-5 mt-6'>
        {
            socials.map((item, index) => {
                return (
                <a href={item.path} target="_blank" rel="noopener noreferrer" key={index} >
                    <div className='text-4xl cursor-pointer '>
                        {item.icon}
                    </div>
                </a>
                );
            }
            )
        }
    </div>
      </header>
  );
};

export default Header;

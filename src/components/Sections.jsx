import React from 'react';
import ContactForm from './ContactForm';
import ProjectCard from './ProjectCard';
import { SiJavascript, SiMongodb } from "react-icons/si";
import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import {projectsData} from '../assets/Data';

const technologies = [
  {
    name:"HTML",
    icon: <TiHtml5 color='orange' size={36}/>
  },
  {
    name:"CSS",
    icon: <FaCss3Alt color='aqua' size={34}/>
  },
  {
    name:"TailwindCSS",
    icon: <RiTailwindCssFill color='aqua' size={34}/>
  },
  {
    name:"Javascript",
    icon: <SiJavascript color='yellow' size={32}/>
  },
  {
    name:"Typescript",
    icon: <SiTypescript color='#6495ED' size={32}/>
  },
  {
    name:"ReactJS",
    icon: <RiReactjsFill color='#6495ED' size={32}/>
  },
  {
    name:"React Native",
    icon: <RiReactjsFill color='#6495ED' size={32}/>
  },
  {
    name:"NextJS",
    icon: <RiNextjsFill color='white' size={32}/>
  },
  {
    name:"NodeJS",
    icon: <DiNodejs color='green' size={42}/>
  },
  {
    name:"ExpressJS",
    icon: <SiExpress color='white' size={32}/>
  },
  {
    name:"MongoDB",
    icon: <SiMongodb color='green' size={32}/>
  },
]

const Sections = () => {
  return (
    <div className=" ml-32 w-full md:w-1/2 h-auto md:h-screen overflow-y-auto no-scrollbar p-4 ">
        <section id="profile" className="h-screen flex flex-col items-center justify-around space-y-6">
          <div>
            <p className="animate-pulse text-lg text-gray-400 text-center">
            I am a passionate web developer with particular expertise in JavaScript and its frameworks.
             I also enjoy mobile development and find great satisfaction in creating high-performance and intuitive applications.
              My approach is focused on continuous learning and adaptability.
             I work hard, adapt quickly to new challenges, and am always open to learning new technologies to stay up-to-date.
            </p>
          </div>
          <div className='flex-row'>
            <p className='text-xl'>💻 Tech Stack: </p><br />
            <div className='flex flex-wrap md:flex-row items-center gap-2'>
            {
              technologies.map((item)=>(
                <div className='flex flex-wrap justify-center items-center border border-gray-300 bg-gray-800 p-1 rounded-lg gap-1 h-12'>
                  <div className=''>{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))
            }

            </div>
          </div>
          <svg 

            class="animate-bounce w-8 h-8 rounded-full pl-1 pt-1">
            <FaArrowDown size={24} color='red'/>
          </svg>
        </section>
        <section id="projects" className="h-auto flex flex-col space-y-8 items-center justify-center">
          {
            projectsData.map((item)=>(
              <ProjectCard 
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                stack={item.stack}
                link={item.url}
                github={item.github}
              />
            ))
          }
        </section>
        <section id="contact" className="h-screen flex flex-col justify-center p-8">
          <ContactForm />
        </section>
      </div>
  );
};

export default Sections;

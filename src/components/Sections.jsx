import React from 'react';
import ContactForm from './ContactForm';
import ProjectCard from './ProjectCard';
import { SiJavascript, SiMongodb } from "react-icons/si";
import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import {projectsData} from '../assets/Data';

const Sections = () => {
  return (
    <div className=" ml-32 w-full md:w-1/2 h-auto md:h-screen overflow-y-auto no-scrollbar p-4 ">
        <section id="profile" className="h-screen flex flex-col items-center justify-around space-y-6">
          <div>
            <p className="animate-pulse text-lg text-gray-400 text-center">
            Je suis un développeur passionné par le web, avec une expertise particulière en JavaScript et ses frameworks. J'aime également le développement mobile, et je trouve une grande satisfaction à créer des applications performantes et intuitives. Mon approche est centrée sur l'apprentissage continu et l'adaptabilité. Je travaille dur, je m'adapte rapidement aux nouveaux défis, et je suis toujours ouvert à l'apprentissage de nouvelles technologies pour rester à jour
            </p>
          </div>
          <div className='flex-row'>
            <p className='text-xl'>💻 Tech Stack: </p><br />
            <div className='flex flex-row space-x-4'>
              <TiHtml5 color='orange' size={36}/>
              <FaCss3Alt color='aqua' size={34}/>
              <RiTailwindCssFill color='aqua' size={34}/>
              <SiJavascript color='yellow' size={32}/>
              <RiReactjsFill color='#6495ED' size={32}/>
              <RiNextjsFill color='white' size={32}/>
              <DiNodejs color='green' size={42}/>
              <SiMongodb color='green' size={32}/>

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

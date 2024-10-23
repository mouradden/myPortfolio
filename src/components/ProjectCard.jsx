import React, { useState } from 'react'
import Project from './Project'

const ProjectCard = ({title, description, image, stack, link, github}) => {
    const [isOpenProject, setIsOpenProject] = useState(false);

    return (
    <div 
        onClick={()=>{
            setIsOpenProject(true);
        }}
        className='min-h-[250px] flex flex-row space-x-4 p-4 hover:bg-[#414c78] hover:rounded-lg md:shadow-mlg'>
        <div className='flex   items-center justify-center w-64 h-32'>
            <img 
                src={image}
                alt={title}
                className='object-contain w-64 h-32 '
            />
        </div>
        <div className='flex flex-col space-y-4'>
            <p className='text-md font-semibold'>{title}</p>
            <p className='text-md text-gray-400 text-center'>{description}</p>
            <div className='flex flex-wrap md:flex-row gap-4'>
                {
                    stack.map((item)=><div className='p-2 w-fit bg-[#30456b] rounded-full text-green-300'>{item}</div>)
                }                
            </div>
            
        </div>

        {
            isOpenProject && 
            <Project
                isOpen={isOpenProject}
                title={title}
                description={description}
                image={image}
                setIsOpenProject={setIsOpenProject}
                stack={stack}
                link={link}
                github={github}
            />
        }
    </div>
  )
}

export default ProjectCard
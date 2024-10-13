import React from 'react'
// import Pic from '../assets/mourad_denguir_photo-withoutbg.png';
const ProjectCard = ({title, description, image}) => {

    return (
    <div className='flex flex-row space-x-4 p-4 hover:bg-[#414c78] hover:rounded-lg md:shadow-mlg'>
        <div className='flex border  items-center justify-center w-64 h-32'>
            <img 
                src={require('../assets/deliveroo.png')}
                alt='deliveroo pic'
                className='w-64 h-32 '
            />
        </div>
        <div className='flex flex-col space-y-4'>
            <p className='text-md font-semibold'>{title}</p>
            <p className='text-md text-gray-400 text-center'>{description}</p>
            <div className='flex flex-wrap md:flex-row gap-4'>
                <div className='p-2 w-fit bg-[#30456b] rounded-full text-green-300'>Javascript</div>
                <div className='p-2 w-fit bg-[#30456b] rounded-full text-green-300'>ReactJs</div>
                <div className='p-2 w-fit bg-[#30456b] rounded-full text-green-300'>React Native</div>
                
            </div>
            
        </div>
    </div>
  )
}

export default ProjectCard
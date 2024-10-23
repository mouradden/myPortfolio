import React from 'react'

const Project = ({isOpen, title, description, image, setIsOpenProject, stack, link, github}) => {
    if (!isOpen)
            return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="relative flex flex-row gap-6 bg-stone-300 w-full h-full max-w-3xl p-6 rounded-lg shadow-lg overflow-auto">
                        {/* Image */}
                        <div className=" h-screen w-2/5 flex justify-center items-center">
                            <img
                            src={image}
                            alt="project pic"
                            className="object-contain h-1/2 rounded-lg"
                            />
                        </div>

                    {/* Modal Content */}
                    <div className='w-1/2 flex flex-col justify-center'>
                        {/* Close Button */}
                        <div 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpenProject(false); 
                            }}
                            className="absolute top-4 right-4 cursor-pointer text-2xl font-bold text-gray-800">
                        &times;
                        </div>
                        {/* Title */}
                        <div className="mb-4 text-2xl text-black font-bold">{title}</div>

                        {/* Description */}
                        <div className="mb-4 text-gray-800">{description}</div>

                        {/* Tech Stack */}
                        <div className='flex flex-wrap md:flex-row gap-4'>
                            {
                                stack.map((item)=><div className='p-2 w-fit bg-[#30456b] rounded-full text-green-300'>{item}</div>)
                            }                
                        </div>

                        {/* Link */}
                        {
                            link !== undefined && 
                            <div className='mt-12 flex items-center justify-center'>
                                <a href={link} target="_blank" rel="noopener noreferrer" className=" text-blue-500 font-bold hover:underline">
                                View Project
                                </a>
                            </div>
                        }
                        {/* Github link */}
                        <div className='mt-12 flex items-center justify-center'>
                            <a href={github} target="_blank" rel="noopener noreferrer" className=" text-blue-500 font-bold hover:underline">
                            Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Project
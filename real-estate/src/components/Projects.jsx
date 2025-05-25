import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const[cardToshow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
  if (window.innerWidth >= 1024) {
    setCardToShow(projectsData.length);}
    else{
      setCardToShow(1);
      };
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, [])
  const nexProject =()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }
  const prevProject =()=>{
    setCurrentIndex((prevIndex) =>prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }
  return (

    <div className='flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
          <h1 className='text-3xl font-bold'>
          Projects
        <span className='font-light underline'> Completed</span>
      </h1>

      <p className='mt-5 text-gray-500 max-w-80 text-center mb-5'>
      Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      
      <div className='flex justify-end items-center mb-8 w-full'>
  <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects' onClick={prevProject}>
    <img src={assets.left_arrow} />
  </button>
  <button className='p-3 bg-gray-200 rounded' aria-label='Next Projects' onClick={nexProject}>
    <img src={assets.right_arrow} />
  </button>
</div>

<div className='overflow-hidden'>
<div className=' flex gap-8 transition-transform duration-500 ease-in-out ' style={{ transform: `translateX(-${currentIndex * (100 / projectsData.length)}%)` }}
 >
{projectsData.map((project, index) => (
  <div key={index} className='relative flex-shrink-0 w-full  sm:w-1/4 '>
    <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
<div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md min-h-[100px]'>

<h2 className='text-xl font-semibold text-gray-800'>
  {project.title}
</h2>
<p className=' text-gray-500 font-semibold'>
  {project.price} <span>|</span>{project.location}
</p>
</div>
</div>
  </div>
))}
</div>
</div>


    </div>
  )
}

export default Projects


//test
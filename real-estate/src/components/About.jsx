import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      
      <h1 className='text-3xl font-bold'>
        About
        <span className='font-light underline'> Our Brand</span>
      </h1>

      <p className='mt-5 text-gray-500 max-w-80 text-center mb-5'>
        Passionate About Properties, Dedicated to your vision
      </p>

      <div className='flex flex-col md:flex-row md:gap-20 mt-10 w-full items-center md:items-start'>

       
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={assets.brand_img} className='sm:w-1/2 md:w-full max-w-lg' />
        </div>

        <div className='flex flex-col items-center md:items-start text-gray-600 w-full md:w-1/2 mt-10 md:mt-0'>

   
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className='mt-10 mb-10 max-w-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

   
          <button className='bg-blue-600 text-white px-6 py-2 rounded'>
            Learn more
          </button>

        </div>

      </div>
    </div>
  )
}

export default About

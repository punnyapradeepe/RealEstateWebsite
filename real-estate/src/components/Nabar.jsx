import React from 'react'
import { assets } from '../assets/assets'

const Nabar = () => {
  return (
    <div className='absolute top-0 left-0 z-10 w-full'>
      <div className='container mx-auto  flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
      <img src={assets.logo} alt='image'/>  
      <ul className=' bg-transparent hidden md:flex text-white gap-7 justify-eng font-normal '>
        <a href='#Header' className=' hover:text-gray-400 cursor-pointer transition-all'>Home</a>
        <a href='#About' className=' hover:text-gray-400 cursor-pointer transition-all'>About</a>
        <a href='#Projects' className=' hover:text-gray-400 cursor-pointer transition-all'>Projects</a>
        <a href='#Testimonials' className=' hover:text-gray-400 cursor-pointer transition-all'>Testimonials</a>
      </ul>
      <button className='hidden md:block bg-white text-black rounded-full px-8 py-2'>Sign up</button>
      </div>  

      </div>
  )
}

export default Nabar

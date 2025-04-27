import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Nabar = () => {
  const [menuopen,setMenuOpen] = useState(false)

  useEffect(()=>{
   if(menuopen){
    document.body.style.overflow = 'hidden'}
    else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[menuopen])
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
      <img src={assets.menu_icon} alt='menu' className='md:hidden' onClick={()=>setMenuOpen(true)}/>
      </div>  
{/*-----mobile-menu-----*/}
<div className={`md:hidden ${menuopen ? 'fixed w-full' : 'w-0 h-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all h-80`}>
  <div className='flex justify-end p-6 cursor-pointer '>
    <img src={assets.cross_icon} className='w-6' onClick={()=>setMenuOpen(false)}/>
  </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
    <a href='#Header' className='px-4 py-2 rounded-full inline-block hover-text-gray-400' onClick={()=>setMenuOpen(false)}>Home</a>
    <a href='#About' className='px-4 py-2 rounded-full hover-text-gray-400' onClick={()=>setMenuOpen(false)}>About</a>
    <a href='#Projects' className='px-4 py-2 rounded-full hover-text-gray-400' onClick={()=>setMenuOpen(false)}>Projects</a>
    <a href='#Testimonails' className='px-4 py-2 rounded-full hover-text-gray-400' onClick={()=>setMenuOpen(false)}>Testimonails</a>
  </ul>
</div>
      </div>
  )
}

export default Nabar

import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (

        <div className='flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
          <h1 className='text-3xl font-bold'>
          Customer 
        <span className='font-light underline'> Testimonials</span>
      </h1>

      <p className='mt-5 text-gray-500 max-w-80 text-center mb-5'>
      Real Stories from Those Who Found Home with Us
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
    <div key={index} className='max-w-[340px] border-b-gray-500 shadow-lg rounded px-8 py-12 text-center'>
      <img src={testimonial.image} alt={testimonial.name} className='w-20 h-20 rounded-full mx-auto mb-4'/>
      <h2>{testimonial.name}</h2>
      <p>{testimonial.title}</p>
      <div>
        {Array.from({ length: testimonial.rating }, (item, index) => (
          <span key={index} className="text-yellow-500 ">★</span>
        ))}
      </div>
      <p >{testimonial.text}</p>
      </div>

        ))}

      </div>

    </div>
  )
}

export default Testimonials

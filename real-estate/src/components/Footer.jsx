import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-900 px-10 py-10 md:px-20 lg:px-32 overflow-hidden" id='Footer'>
      <div className="container mx-auto flex flex-col md:flex-row">
    
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} className='mb-5' />
          <p className="text-gray-400 max-w-150 mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

     
        <div className='w-full md:w-1/3 mb-8 md:mb-0 flex flex-col md:items-center'>
          <h2 className="text-white mb-5 font-bold">Company</h2>
          <ul className="text-gray-400 font-normal flex flex-col gap-2">
            <a
              href="#Header"
              className="hover:text-white cursor-pointer transition-all">
              Home
            </a>
            <a
              href="#About"
              className="hover:text-white cursor-pointer transition-all">
              About
            </a>
            <a
              href="#Projects"
              className="hover:text-white cursor-pointer transition-all">
              Projects
            </a>
            <a
              href="#Testimonials"
              className="hover:text-white cursor-pointer transition-all">
              Testimonials
            </a>
          </ul>
        </div>


        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <h2 className="text-white font-bold mb-5">Subscribe to our newsletter</h2>
          <p className="text-gray-400 max-w-150 mb-5">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-2 '>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 w-3/4 p-2 mb-4 text-white rounded-md  md:w-3/4"
            />
            <button className="bg-blue-500 text-white p-2  mb-4 rounded-md hover:bg-blue-600 transition-all ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-6 items-center text-gray-500'>
      Copyright 2024 © GreatStack. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;

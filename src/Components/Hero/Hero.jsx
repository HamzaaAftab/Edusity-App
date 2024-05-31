import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroo w-full min-h-[100vh] bg-cover bg-center flex items-center justify-center">
      <div className="hero-text container1 text-center max-w-full px-4 md:px-8">
        <h1 className="text-[32px] md:text-[44px] font-semibold mx-auto pb-4 mt-20">
          We Ensure Better Education for a better world
        </h1>
        <p className="max-w-[850px] mx-auto mb-[20px] text-base md:text-xl pb-2">
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of Education
        </p>
        <button className="mt-4 mb-5">
          <a href="#_" className="relative inline-flex items-center justify-start py-4 pl-6 pr-12 overflow-hidden font-semibold text-white bg-neutral-800 outline-2 outline-white transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 group rounded-md">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore More
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

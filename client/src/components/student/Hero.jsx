import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  // Set initial theme state to light gray
  const [theme, setTheme] = useState('light'); 

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
      <h1 className={`md:text-home-heading-large text-home-heading-small relative font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'} max-w-3xl mx-auto`}>
        Empower your future with the courses designed to
        <span className="text-blue-600"> fit your choice.</span>
        <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
      </h1>
      <p className={`md:block hidden ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} max-w-2xl mx-auto`}>
        We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>
      <p className={`md:hidden ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'} max-w-sm mx-auto`}>
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
      <SearchBar />
      
      {/* Toggle Button */}
      <button 
        onClick={toggleTheme} 
        className="mt-5 px-4 py-2 bg-gray-600 text-white rounded-full">
        Toggle Theme
      </button>
    </div>
  );
};

export default Hero;

import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';
import { Sun, Moon } from 'lucide-react'; // Optional: Icon library like Lucide or you can use emoji

const Hero = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
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

      {/* Modern Toggle Switch */}
      <button
        onClick={toggleTheme}
        className="mt-4 relative w-14 h-8 bg-gray-400 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none"
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-6' : ''
          }`}
        />
        <span className="absolute top-1 left-1 w-6 h-6 flex items-center justify-center text-xs text-yellow-700">
          {theme === 'light' ? '🌞' : ''}
        </span>
        <span className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center text-xs text-white">
          {theme === 'dark' ? '🌜' : ''}
        </span>
      </button>
    </div>
  );
};

export default Hero;

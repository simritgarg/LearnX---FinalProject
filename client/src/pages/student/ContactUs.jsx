import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importing Link for navigation
import { FaHome, FaInfoCircle } from 'react-icons/fa';  // Importing icons for Home and About Us

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });  // Clear the form after submission
      } else {
        alert("Failed to send message: " + data.message);
      }
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-raleway overflow-hidden">
      {/* Header with gradient and sticky effect */}
      <header className={`flex justify-between items-center px-6 py-4 ${isScrolled ? 'bg-blue-500' : 'bg-gradient-to-r from-blue-100 to-blue-400'} shadow-md fixed top-0 left-0 w-full z-10 transition-all`}>
        {/* Updated "LearnX" with Link for home page navigation */}
        <Link to="/" className="text-3xl font-pacifico text-blue-900 flex items-center">
          <FaHome className="mr-2" />
          LearnX
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="space-x-6 font-medium hidden md:flex">
          <Link to="/" className="text-blue-900 hover:text-blue-700 transition duration-300">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to="/about" className="text-blue-900 hover:text-blue-700 transition duration-300">
            <FaInfoCircle className="mr-2" />
            About Us
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 bg-blue-100 p-4 md:hidden">
            <Link to="/" className="block text-blue-900 mb-2">Home</Link>
            <Link to="/about" className="block text-blue-900 mb-2">About Us</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 animate-bgShift mt-16"> {/* Add mt-16 or adjust value */}
  <h1 className="text-center text-3xl text-blue-700 font-pacifico mb-10">Contact Us</h1>

        <div className="flex flex-wrap justify-center items-start gap-12">
          {/* Form with Pop-out effect */}
          <div className="bg-blue-100/60 max-w-md p-6 rounded-lg shadow-lg w-full flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-200">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mt-3 font-semibold" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
              />

              <label className="mt-4 font-semibold" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"  // Should match the state key name exactly
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
              />

              <label className="mt-4 font-semibold" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 transition duration-300"
              ></textarea>

              <button
                type="submit"
                className="mt-6 bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Card with Hover effect */}
          <div className="w-full sm:max-w-sm lg:w-[600px] h-[430px]"> {/* Increased width and height */}
            {/* Container for 3D perspective */}
            <div className="relative w-full h-full perspective-[1500px]">
              {/* Wrapper for front and back side */}
              <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180 hover:scale-105 hover:shadow-2xl hover:bg-blue-200">
                {/* Front Side: Image */}
                <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="https://example.com/your-education-image.jpg"  // Use your own image related to education
                    alt="Education"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>

                {/* Back Side: Quote and Educational Graphic */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-100 text-blue-900 flex flex-col justify-center items-center p-6 text-center rounded-lg">
                  <p className="mb-4 font-semibold text-xl text-blue-800">💬 We’d love to hear from you! Your feedback helps us improve and create a better learning experience for everyone.</p>
                  <p className="font-serif italic text-lg mb-4 text-blue-700">
                    "We grow through what we go through — and feedback is the map that guides our way."— LearnX Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-200 text-center py-4 text-blue-900 text-sm font-medium">
        <nav className="mb-2 space-x-4">
          <Link to="/" className="text-blue-900">Home</Link>
          <Link to="/about" className="text-blue-900">About Us</Link>
          <Link to="/contact" className="text-blue-900">Contact Us</Link>
          <Link to="/policy" className="text-blue-900">Privacy Policy</Link>
        </nav>
        <p>&copy; 2025 LearnX. All rights reserved. Empowering education for a brighter tomorrow.</p>
      </footer>
    </div>
  );
};

export default ContactUs;

import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <div className="flex flex-col min-h-screen font-raleway overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-200 px-6 py-4 shadow-md">
        <div className="text-3xl font-pacifico text-blue-900">LearnX</div>
        <nav className="space-x-6 font-medium">
          <a href="/" className="text-blue-900 hover:underline">Home</a>
          <a href="/about" className="text-blue-900 hover:underline">About Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10 bg-gradient-to-br from-white via-blue-50 to-blue-100 animate-bgShift">
        <h1 className="text-center text-3xl text-blue-700 font-pacifico mb-10">Contact Us</h1>

        <div className="flex flex-wrap justify-center items-start gap-12">
          {/* Form */}
          <div className="bg-blue-100/60 max-w-md p-6 rounded-lg shadow-lg w-full flex-1">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="mt-3 font-semibold" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded"
              />

              <label className="mt-4 font-semibold" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"  // Should match the state key name exactly
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded"
              />

              <label className="mt-4 font-semibold" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 border border-blue-300 rounded"
              ></textarea>

              <button
                type="submit"
                className="mt-6 bg-blue-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Card Flip */}
          <div className="w-full sm:max-w-sm lg:w-[600px] h-[430px]"> {/* Increased width and height */}
            {/* Container for 3D perspective */}
            <div className="relative w-full h-full perspective-[1500px]">
              {/* Wrapper for front and back side */}
              <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-180">
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
                  <p className="mb-4 font-semibold text-xl">💬 We’d love to hear from you! Your feedback helps us improve and create a better learning experience for everyone.</p>
                  <p className="font-serif italic text-lg mb-4">
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
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/policy" className="hover:underline">Privacy Policy</a>
        </nav>
        <p>&copy; 2025 LearnX. All rights reserved. Empowering education for a brighter tomorrow.</p>
      </footer>
    </div>
  );
};

export default ContactUs;

import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-[#f5f7fa] to-[#e3f2fd] text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] px-8 py-4 sticky top-0 z-50">
        <a href="/" className="text-3xl font-pacifico text-[#0d47a1]">LearnX</a>
        <nav className="space-x-4 text-[#0d47a1] font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-16">
        {/* Welcome */}
        <section>
          <h2 className="text-3xl font-pacifico text-[#1976d2] mb-4">Welcome to LearnX</h2>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Welcome to <strong>LearnX</strong> — a transformative learning platform built with passion, purpose, and the belief that education should be accessible to everyone, everywhere. In a world constantly evolving with technology and innovation, <strong>LearnX</strong> stands as a bridge between curiosity and knowledge, offering learners the tools they need to grow and thrive.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Whether you're a student, a working professional, or someone with an unquenchable thirst for learning, <strong>LearnX</strong> empowers you to learn anything, anytime, from anywhere. Our carefully curated resources, interactive modules, and expert guidance aim to make learning not just a necessity — but a joyful experience.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            <strong>LearnX</strong> is more than just a platform — it's a mission. For every learner who joins us, we contribute <strong>1%</strong> of their enrollment value to educational organizations, supporting underprivileged students and building a stronger, more educated society. Because when one learns, we all grow.
          </p>
          <p className="font-tagesschrift text-lg leading-7">
            Join us in shaping a smarter world — one lesson, one learner, and one dream at a time.
          </p>
        </section>

        {/* Organization */}
        <section>
          <h2 className="text-3xl font-pacifico text-[#1976d2] mb-4">About the Organization</h2>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            At <strong>LearnX</strong>, we are more than just a team of developers and educators — we are visionaries united by a common goal: to make quality education a universal right, not a privilege. Founded on the belief that learning should never be limited by location, background, or financial means, our organization is dedicated to unlocking human potential through accessible, meaningful, and innovative digital education.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Our journey began with a simple idea: what if learning could feel less like a task and more like an adventure? With this vision, we’ve built a platform that brings together technology, creativity, and community to empower learners of all ages and walks of life.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            But our commitment doesn't stop at the screen. We proudly donate <strong>1%</strong> of every learner's contribution to trusted educational charities, ensuring that those in underserved areas also get the opportunity to learn, grow, and dream. This is how we build impact — not just through code, but through compassion.
          </p>
          <p className="font-tagesschrift text-lg leading-7">
            <strong>LearnX</strong> isn’t just an organization; it's a movement. And you, the learner, are at the heart of it.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-3xl font-pacifico text-[#1976d2] mb-4">Our Mission: Learning That Gives Back</h2>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            At <strong>LearnX</strong>, we believe education is a ripple — when one person learns, the impact spreads far beyond the classroom. That’s why we’ve woven social good into the fabric of our platform. With every course enrollment or learning milestone you achieve, <strong>1% of the revenue</strong> goes directly to educational organizations that support children in underserved communities.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Your learning journey fuels another's opportunity to read their first book, attend school, or discover a future they never thought possible. Together, we’re not just changing individual lives — we’re helping build a more educated, empowered world.
          </p>
          <p className="font-tagesschrift text-lg leading-7">
            Because true success isn’t just about what you achieve — it’s about what you uplift.
          </p>
        </section>

        {/* Join Us */}
        <section>
          <h2 className="text-3xl font-pacifico text-[#1976d2] mb-4">🚀 Join Us</h2>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Be a part of something greater than just another online course. When you learn with <strong>LearnX</strong>, you're not only investing in yourself — you’re joining a community that values knowledge, growth, and giving back.
          </p>
          <p className="font-tagesschrift text-lg leading-7 mb-4">
            Whether you're here to master a new skill, switch careers, or fuel your curiosity, you belong here. Together, let’s create a world where learning is limitless and opportunity is shared.
          </p>
          <p className="font-tagesschrift text-lg leading-7">
            <strong>Start learning. Start changing the world.</strong>
          </p>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-center text-3xl font-pacifico text-[#1976d2] mb-8">Inspiration</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                src: '/assets/education1.jpg',
                quote: '“Education is the most powerful weapon you can use to change the world.”',
              },
              {
                src: '/assets/education2.jpg',
                quote: '"Learning never exhausts the mind — it only strengthens it."',
              },
              {
                src: '/assets/education3.jpg',
                quote: '"One child, one teacher, one book, and one pen can change the world."',
              },
            ].map((card, i) => (
              <div key={i} className="w-64 h-80 group relative rounded-lg overflow-hidden bg-[#bbdefb] shadow-md transition-all duration-500 cursor-pointer hover:bg-black">
                <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-60" style={{ backgroundImage: `url(${card.src})` }}></div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#0d47a1] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-center text-white text-sm font-semibold px-4 py-2 max-w-[90%] break-words">{card.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
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

export default About;

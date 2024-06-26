import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import imgo from '../assets/about1.jpg';
import imgt from '../assets/img2.jpg';

const About = () => {
  return (
    <div className="flex flex-col max-h-screen overflow-y-auto">
      <Navbar />

      <div className="flex-1 bg-slate-800 p-10">
        {/* Section 1: Introduction */}
        <div className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-[60px] font-semibold lg:w-[70%] translate-x-48 mb-12">
          About Code Defender
        </div>

        {/* Section 2: Project Story */}
        <div className="flex flex-col md:flex-row mb-10 gap-x-7 ">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={imgo}
              className="w-full h-auto md:mr-8"
              alt="Project Image"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-white font-medium mt-16">
            <p className="mb-6">
              The story of the project is fascinating. An anonymous hacker is targeting you 😱. Face his attacks with three options. Choose the correct one to make the hacker lose points 🙌, or become a victim otherwise.<br/>Develop and expand a diverse range of age-appropriate content suitable for different age groups within the small children category.<br/>Create engaging games and activities that align with various educational levels and cognitive abilities.<br/>Introduce interactive learning modules that cover a broad spectrum of subjects such as basic mathematics, language skills, science, and critical thinking.<br/>Incorporate storytelling elements to make learning more engaging and memorable for young minds.
            </p>
          </div>
        </div>

        {/* Section 3: Project Functionality */}
        <div className="flex flex-col md:flex-row mb-10">
          {/* Text */}
          <div className="md:w-1/2 text-white font-medium">
            <div className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent mb-6">
              What it does
            </div>
            <p>
              Our game simulates various ways a hacker can attempt to steal your data or hack your computer. Interact with the platform to learn techniques for staying safe. Hacker attacks are simulated through cards, and for each hacker card, the user receives three option cards. By choosing cards, users can learn good practices and measures for different situations.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={imgt}
              className="w-full h-auto md:ml-8"
              alt="Project Image"
            />
          </div>
        </div>

        {/* Add more content here to ensure scrolling */}
        {/* You can add more sections or increase the content */}

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

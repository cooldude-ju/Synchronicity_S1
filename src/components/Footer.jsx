import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#001f3f] text-white absolute bottom-0 w-full flex flex-row justify-between items-center p-4">
      
      <div className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] 
        bg-clip-text text-4xl font-medium flex items-center text-transparent' >
        Contact Us
      </div>
      
      <div className='flex flex-row gap-x-5 items-center text-[24px]'>
        <div className='hover:text-red-600'>
        <a href="https://github.com/akrai15" target="_blank">
          <FaGithub/>
          </a>
        </div>

        <div className='hover:text-blue-600'>
        <a href="https://twitter.com/AyushRai379667?t=znl8zMrYr0dwRD4yhErA2w&s=08" target="_blank">
          <FaTwitter/>
          </a>
        </div>

        <div className='hover:text-[#f2a60c]'>
        <a href="mailto:raiayush572@gmail.com" className='hover:text-[#f2a60c]' target='_blank'>
          <BiLogoGmail />
        </a>
        </div>

        <div className='hover:text-blue-500'>
        <a href="https://www.linkedin.com/in/ayush-kumar-rai-80a1a6261/" target="_blank">
          <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-[#555]">
        <p>2024 Code Defender. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-900 text-neutral-400 py-6 mt-10 border-t border-neutral-700'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center gap-6 mb-6'>
          <div className='flex gap-8'>
            <Link to="/about" className='hover:text-white transition duration-300 ease-in-out'>About</Link>
            <Link to="/contact" className='hover:text-white transition duration-300 ease-in-out'>Contact</Link>
          </div>
          <div className='flex gap-6'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-2xl text-neutral-400 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110'>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-2xl text-neutral-400 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110'>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-2xl text-neutral-400 hover:text-pink-400 transition duration-300 ease-in-out transform hover:scale-110'>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-2xl text-neutral-400 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <p className='text-sm text-neutral-500'>Created By Coding with Raniya</p>
      </div>
    </footer>
  );
};

export default Footer;

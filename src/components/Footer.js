import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-900 text-neutral-400 py-6 mt-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-4 mb-4'>
          <div className='flex gap-4'>
            <Link to="/about" className='hover:text-white transition duration-300'>About</Link>
            <Link to="/contact" className='hover:text-white transition duration-300'>Contact</Link>
          </div>
          <div className='flex gap-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-600 transition duration-300'>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-400 transition duration-300'>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-pink-400 transition duration-300'>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-2xl hover:text-blue-700 transition duration-300'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <p className='text-sm'>Created By Coding with Raniya</p>
      </div>
    </footer>
  );
};

export default Footer;

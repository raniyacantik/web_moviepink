import React from 'react';
import { mobileNavigation } from '../contants/navigation';
import { NavLink } from 'react-router-dom';

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-black bg-opacity-80 backdrop-blur-lg fixed bottom-0 w-full z-40 border-t border-gray-700'>
        <div className='flex items-center justify-around h-full text-neutral-400'>
            {mobileNavigation.map((nav, index) => (
                <NavLink 
                    key={nav.label + "mobilenavigation"} 
                    to={nav.href}
                    className={({ isActive }) => `
                        flex flex-col items-center justify-center w-full h-full 
                        transition-colors duration-300 
                        ${isActive ? 'text-pink-500' : 'hover:text-white'}
                    `}
                >
                    <div className='text-2xl mb-1'>
                        {nav.icon}
                    </div>
                    <p className='text-xs font-medium'>{nav.label}</p>
                </NavLink>
            ))}
        </div>
    </section>
  );
}

export default MobileNavigation;

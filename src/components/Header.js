import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.jpeg';
import { IoSearchOutline } from 'react-icons/io5';
import { navigation } from '../contants/navigation';

const Header = () => {
    const location = useLocation();
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
    const [searchInput, setSearchInput] = useState(removeSpace);
    const navigate = useNavigate();
   
    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-30 backdrop-blur-md text-white shadow-md z-40'>
            <div className='container mx-auto px-6 flex items-center h-full'>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-32' 
                    />
                </Link>

                <nav className='hidden lg:flex items-center gap-6 ml-8'>
                    {navigation.map((nav, index) => (
                        <NavLink
                            key={nav.label + "header" + index}
                            to={nav.href}
                            className={({ isActive }) => `
                                px-4 py-2 text-lg font-semibold transition-colors duration-300 
                                ${isActive ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-200 hover:text-white'}
                            `}
                        >
                            {nav.label}
                        </NavLink>
                    ))}
                </nav>

                <div className='ml-auto flex items-center gap-6'>
                    <form className='flex items-center bg-white bg-opacity-20 border border-white border-opacity-40 rounded-full overflow-hidden' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Cari disini...'
                            className='bg-transparent px-4 py-2 outline-none text-white placeholder-gray-300'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='p-2 bg-transparent text-white hover:text-gray-300 focus:outline-none'>
                            <IoSearchOutline className='text-xl' />
                        </button>
                    </form>
                    <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-110'>
                        <img
                            src={userIcon}
                            alt='User Icon'
                            className='w-full h-full object-cover' 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

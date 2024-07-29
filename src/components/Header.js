import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.jpeg';
import { IoSearchOutline } from "react-icons/io5";
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
    }, [searchInput, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header className='fixed top-0 w-full h-16 bg-pink-pastel bg-opacity-75 z-50 shadow-md border-b border-pink-200'>
            <div className='container mx-auto flex items-center h-full justify-between px-4'>
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt='logo'
                        width={100} 
                        className='transition-transform transform hover:scale-105'
                    />
                </Link>

                <nav className='hidden lg:flex items-center gap-4 ml-5'>
                    {
                        navigation.map((nav, index) => (
                            <div key={nav.label + "header" + index}>
                                <NavLink 
                                    to={nav.href} 
                                    className={({ isActive }) => `px-4 py-2 rounded-lg transition-colors duration-300 hover:text-white hover:bg-pink-300 ${isActive ? "text-white bg-pink-400" : "text-white"}`}
                                >
                                    {nav.label}
                                </NavLink>
                            </div>
                        ))
                    }
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Cari di sini...'
                            className='bg-pink-100 text-pink-800 px-4 py-2 rounded-full outline-none border border-pink-300 focus:border-pink-500 transition duration-300'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button className='text-2xl text-pink-800 hover:text-pink-600 transition duration-300'>
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-95 transition-all'>
                        <img
                            src={userIcon}
                            alt='user'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

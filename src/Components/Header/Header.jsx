import { faBell, faMagnifyingGlass, faRightFromBracket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import userimg from "../../assets/header/user.png";
import arrowimg from "../../assets/header/arrow.png";
import bell from "../../assets/header/notification.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className=''>

                {/* Mobile header with toggle button */}
                <div className='flex md:hidden justify-between items-center p-4'>
                    <h2 className='text-lg font-bold font-Poppins text-[#5B43D2]'>Covid-19  Dashboard</h2>
                    <button onClick={toggleMenu} className='text-2xl text-gray-700'>
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                    </button>
                </div>

                {/* Full header container */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:bg-transparent md:flex w-full justify-between items-center px-2 py-2 sm:py-3 md:py-5 lg:py-6 xl:py-8 sm:px-3 md:px-5 lg:px-8 xl:px-12`}>
                    {/* Title section */}
                    <div className='flex flex-col p-4'>
                        <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#5B43D2] font-semibold'>Covid-19</h2>
                        <span className='text-gray-600 font-Poppins text-base sm:text-base'>Live Tracker Dashboard</span>
                    </div>

                    {/* Search and notification section */}
                    <div className='flex flex-col w-full justify-center items-center md:w-auto md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-5 mt-4 md:mt-0'>
                        {/* Search bar */}
                        <div className='flex items-center shadow-md rounded-3xl lg:mx-28 py-1 px-2 sm:py-2 sm:px-3'>
                            <input
                                type="text"
                                className='w-full outline-none text-sm md:text-base placeholder-gray-500'
                                placeholder='Search'
                            />
                            <FontAwesomeIcon className='text-gray-400 text-lg' icon={faMagnifyingGlass} />
                        </div>

                        {/* User and notification icons */}
                        <div className='flex items-center space-x-4'>
                            <img className='h-8 sm:h-10 w-auto' src={userimg} alt="User" />
                            <img className='h-3 w-auto' src={arrowimg} alt="Arrow" />
                            <div className='hidden md:block border-l border-gray-300 h-10'></div>
                            <img className='h-5 sm:h-6 w-auto' src={bell} alt="Notification" />
                            <FontAwesomeIcon className='text-gray-500' icon={faRightFromBracket} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;

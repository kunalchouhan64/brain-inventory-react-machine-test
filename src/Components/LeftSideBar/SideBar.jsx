import React, { useState } from 'react';
import { faCommentDots, faFaceSadTear, faFlask, faGear, faHandHoldingDollar, faVirus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoGrid } from "react-icons/io5";

const SideBar = () => {
    //👉 setting state true to open first time
    const [isOpen, setIsOpen] = useState(true);


    //👉 Setting toggle for the sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/*👉 Mobile toggle button */}
            <div className="md:hidden flex h-full justify-start px-3 py-2">
                <button onClick={toggleSidebar} className="text-white text-2xl">
                    <FontAwesomeIcon className='text-black' icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            {/*👉 Sidebar container */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col justify-between rounded-t-full rounded-b-full items-center w-[12%] md:w-[5%] py-2 sm:py-3 md:py-5 lg:py-6 xl:py-8 bg-[#3326AE] fixed md:static top-0 left-0 h-full md:h-auto z-50 ease-linear duration-300 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                {/*👉 Close button inside the sidebar */}
                <button onClick={toggleSidebar} className="self-end w-full text-xl p-2 md:hidden">
                    <FontAwesomeIcon className='text-white text-2xl font-semibold' icon={faTimes} />
                </button>

                <div>
                    <FontAwesomeIcon className='text-white text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl' icon={faVirus} />
                </div>

                <div className='flex flex-col items-center space-y-2 md:space-y-4 lg:space-y-5'>
                    <div className='bg-white py-5 px-1 rounded-full'>
                        <IoGrid className='text-lg text-[#EF3F39] sm:text-xl lg:text-2xl xl:text-3xl' />
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-lg hover:bg-white cursor-pointer p-2 rounded-full transition-all ease-linear duration-300 md:text-xl xl:text-2xl text-gray-400' icon={faFaceSadTear} />
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-lg hover:bg-white cursor-pointer p-2 rounded-full transition-all ease-linear duration-300 md:text-xl xl:text-2xl text-gray-400' icon={faFlask} />
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-lg hover:bg-white cursor-pointer p-2 rounded-full transition-all ease-linear duration-300 md:text-xl xl:text-2xl text-gray-400' icon={faHandHoldingDollar} />
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-lg hover:bg-white cursor-pointer p-2 rounded-full transition-all ease-linear duration-300 md:text-xl xl:text-2xl text-gray-400' icon={faCommentDots} />
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className='text-gray-400 hover:bg-white cursor-pointer p-2 rounded-full transition-all ease-linear duration-300 text-lg md:text-xl lg:text-2xl xl:text-3xl' icon={faGear} />
                </div>
            </div>
        </>
    );
};

export default SideBar;

import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/logo-1.png';

const Navbar = () => {
    return (
        <div >
            <nav className="bg-white">
                <div className="max-w-full  mx-auto px-2 sm:px-6 lg:px-10">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#5800FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        >
                        <span className="sr-only">Open main menu</span>
                        
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <svg
                            className="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        </button>
                    </div>
                    <div className="flex-1 sm:flex md:flex-none items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                    
                        <img
                            className="md:ml-0 sm:ml-16  h-8 w-auto"
                            src={Logo}
                            alt="Workflow"
                        />
                        </div>
                        <div className="hidden md:block sm:ml-6">
                        <div className="flex space-x-4">
                            <a
                            href="#"
                            className=" text-[#5800FF] px-3 py-2  text-md font-bold"
                            aria-current="page"
                            >
                            Overview
                            </a>
                            <a
                            href="#"
                            className="text-black px-3 py-2  text-md font-bold"
                            >
                            Calendar
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative mr-6">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                </div>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[192px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            </div>
                        <button
                        type="button"
                        className="bg-[#5800FF] p-1 mr-3 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                        <span className="sr-only">View notifications</span>
                        {/* Heroicon name: outline/bell */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                        </button>
                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                        <div className='flex'>
                            <button
                            type="button"
                            className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                            >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            </button>
                            <p className='pl-3 mt-2 md:block hidden'>Rahul Kumar</p>
                        </div>
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-48  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabIndex={-1}
                        >
                            {/* Active: "bg-gray-100", Not Active: "" */}
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex={-1}
                            id="user-menu-item-0"
                            >
                            Your Profile
                            </a>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex={-1}
                            id="user-menu-item-1"
                            >
                            Settings
                            </a>
                            <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabIndex={-1}
                            id="user-menu-item-2"
                            >
                            Sign out
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                        href="#"
                        className=" text-gray-300 hover:bg-[#5800FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                    >
                        Overview
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 hover:bg-[#5800FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Calendar
                    </a>
                    </div>
                </div>
                
                </nav>
          
        </div>
    )
}

export default Navbar

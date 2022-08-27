import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/logo-1.png';

const Navbar = () => {
    return (
        <div >
            <nav className='flex bg-white '>

                <div className='h-[55px] w-1/2  px-[56px]  py-2 flex'>
                    <img className=' h-[40px] text-blue-700' src={Logo} alt="" />
                    <ul className='flex  py-2  '>
                        <li className='px-[56px] text-[#5800FF] font-bold'>Overview </li>
                        <li className='font-bold text-[#212121]'>Calendar</li>
                    </ul>

                </div>
                <div >
                    <div className=' w-1/2 flex py-2 ml-24'>
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                            </div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[192px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                        <div className='w-10 h-10 ml-16 py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                                <g id="notification-2-fill" opacity="0.86">
                                    <path id="Path_7" data-name="Path 7" d="M0,0H28V28H0Z" fill="none" />
                                    <path id="Path_8" data-name="Path 8" d="M25.168,22.913H2V20.59H3.158v-8.1a10.426,10.426,0,1,1,20.851,0v8.1h1.158Zm-14.48,1.162H16.48a2.9,2.9,0,1,1-5.792,0Z" transform="translate(0.416 0.416)" fill="#212121" />
                                </g>
                            </svg>
                        </div>
                        <div className=' mx-4 h-11 w-12 bg-red-600 border rounded-3xl'>
                            <img className=' h-10 rounded-3xl' src='' alt="" />
                        </div>

                    </div>
                </div>
                <div className='py-4 '>
                    <span className=''>Aniket Kumar</span>
                </div>



            </nav>

        </div>
    )
}

export default Navbar

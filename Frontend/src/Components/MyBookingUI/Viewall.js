import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Nav from './Nav/Nav'
import LeftSideBar from './LeftSideBar'
import AddPeople from './AddPeople/AddPeople'

const Viewall = () => {

  return (
    <>
      <Navbar />
      <div className=' flex max-w-[1720px] mx-auto relative items-center justify-center'>
        <div className='w-[22%] bg-white shadow-inner h-screen'>
          <h1 className='px-3 pt-4 text-xl font-bold font-sans' >Book Spaces</h1>
          <h1 className='px-3 pt-4 text-sm font-bold font-sans' >Your Booking</h1>
          <LeftSideBar />
        </div>
        <div className='w-[78%] bg-gray-50 shadow-inner'>
          <div className='py-3'>

            <h1 className='pl-12 pt-5 flex items-center'><Link to='/MyBooking' className='mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </Link><span className='text-3xl font-semibold'> My Bookings</span></h1>
          </div>
          <Nav />
          <Outlet />
        </div>
        <div className="fixed  z-[101] "><AddPeople /></div>
      </div>
    </>
  )
}

export default Viewall
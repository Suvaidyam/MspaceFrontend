import React from 'react'

import Navbar from '../Navbar/Navbar'
import CenterBox from './CenterBox'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function MyBooking() {
  return (
    <>
      <Navbar />
      <div className='flex'>

        <div className='w-[22%]  shadow-inner  '>

          <h1 className='px-3 pt-4 text-xl font-bold font-sans' >Book Spaces</h1>
          <h1 className='px-3 pt-4 text-sm font-bold font-sans' >Your Booking</h1>
          <LeftSideBar />

        </div>

        <div className='w-[78%] flex bg-gray-50'>
          <div className='w-[75%]'>
            <CenterBox />
          </div>
          <div className='w-[25%]'>
            <RightSideBar />
          </div>
        </div>
      </div>

    </>
  )
}

export default MyBooking
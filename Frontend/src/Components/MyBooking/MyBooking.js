import React from 'react'
import Navbar from '../Navbar/Navbar'
import Overview from '../HomeUI/Overview/Overview'

const MyBooking = () => {
  return (
    <>
      <Navbar/>
      <Overview book={'Booked'} bgcolor={'text-white  flex bg-[#979797]  focus:outline-none font-medium justify-center  text-sm w-[240px] ml-2 py-2 text-center mr-2 mb-2'}/>
    </>
  )
}

export default MyBooking
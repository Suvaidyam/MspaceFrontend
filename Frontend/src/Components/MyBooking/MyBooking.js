import React from 'react'
import Navbar from '../Navbar/Navbar'
import Overview from '../HomeUI/Overview/Overview'

const MyBooking = () => {
  return (
    <>
      <Navbar/>
      <Overview book={'Booked'}/>
    </>
  )
}

export default MyBooking
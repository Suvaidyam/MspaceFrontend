import React from 'react'
import Calander from '../HomeUI/LeftSideBar/Calander'
import Navbar from '../Navbar/Navbar'
import CenterBox from './CenterBox'
import RightSideBar from './RightSideBar'

function MyBooking() {
  return (
   <>
    <Navbar/>
    <div className='flex'>
      <div className='w-[22%] border'>
        <Calander/>
      </div>
      <div className='w-[58%]'>
      <CenterBox/>
      </div>
      <div className='w-[20%] border'>
      <RightSideBar/>
      </div>
    </div>
    
   </>
  )
}

export default MyBooking
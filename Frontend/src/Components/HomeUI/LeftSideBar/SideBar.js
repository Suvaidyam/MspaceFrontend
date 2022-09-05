import {React, useState} from 'react'
import Calander from './Calander'
import Time from './Time'
import Findbtn from './Findbtn'

const SideBar = () => {
  const [bookingTime , setbookingTime] =useState(null)
  const [bookingDate , setbookingDate] =useState(null)
  const [capacity , setcapacity] =useState(null)
  
  const getBookingData=()=>{
    console.log("booking time", bookingTime)
  console.log("bookingDate", bookingDate)
  console.log("capacity",capacity)
  }

  return (
    <>
      <div className="">
        <Calander setbookingDate={setbookingDate}/>
        <Time setbookingTime={setbookingTime}/>
        <Findbtn setcapacity={setcapacity} getBookingData={getBookingData}/>
      </div>
    </>
  )
}

export default SideBar
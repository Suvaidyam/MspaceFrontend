import {React, useState} from 'react'
import Calander from './Calander'
import Time from './Time'
import Findbtn from './Findbtn'

const SideBar = (props) => {
  const [frombookingTime , setfrombookingTime] =useState(null)
  const [tobookingTime , settobookingTime] =useState(null)
  const [bookingDate , setbookingDate] =useState()
  const [capacity , setcapacity] =useState(null)
  
  const getBookingData=()=>{
   let fromTime= bookingDate +"T"+ frombookingTime +".000Z";
   let toTime = bookingDate +"T"+ tobookingTime +".000Z";

let bookingData = {fromTime,toTime,capacity}
props.setbookingData(bookingData)
  }

  return (
    <>
      <div className="">
        <Calander setbookingDate={setbookingDate}/>
        <Time setfrombookingTime={setfrombookingTime} settobookingTime={settobookingTime}/>
        <Findbtn setcapacity={setcapacity} getBookingData={getBookingData} setbtnClick={props.setbtnClick}/>
      </div>
    </>
  )
}

export default SideBar
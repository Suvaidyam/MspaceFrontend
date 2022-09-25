import {React, useState} from 'react'
import Calander from './Calander'
import Time from './Time'
import Findbtn from './Findbtn'
import {useDispatch} from 'react-redux'
import {fromTimeAction,toTimeAction} from '../../../Service/Action/time'

const SideBar = (props) => {
  let todayDate = new Date()
  let selectedTime=[{from:"10:00:00"},{to:"18:00:00"}]
  const [frombookingTime , setfrombookingTime] =useState(selectedTime[0].from)
  const [tobookingTime , settobookingTime] =useState(selectedTime[1].to)
  const [bookingDate , setbookingDate] =useState(todayDate.toISOString().slice(0, 10))
  const [capacity , setcapacity] =useState(null)
  const dispatch = useDispatch()
  
  const getBookingData=()=>{
   let fromTime= bookingDate +"T"+ frombookingTime +".000Z";
   let toTime = bookingDate +"T"+ tobookingTime +".000Z";
   dispatch(fromTimeAction(fromTime));
   dispatch(toTimeAction(toTime))

let bookingData = {capacity}
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
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Event from '../../Assets/Events-cuate.svg'
import{ MdSend }from 'react-icons/md'

import Select from 'react-select';
// import { colourOptions } from '../data';

const BookingSummary = (props) => {
  const [employee, setemployee] = useState({})
  const token = sessionStorage.getItem('token')
  const headers = { token }
//    handel display Time 
  let bookingDate = props.fromTime
  let newBookingDate = new Date(bookingDate).toLocaleDateString().split('/') // 2009-11-10
  const date = new Date(newBookingDate);
  const month = date.toLocaleString('default', { month: 'long' });
  let displayMonth = newBookingDate[1]+" "+ month +" "+ newBookingDate[2]
  
//   handel display booking time from time to time
  let fromDisplayTime = props.fromTime.substring(11, 16);
  let toDisplayTime = props.toTime.substring(11, 16);
  // console.log(fromDisplayTime)
  // console.log(toDisplayTime)
  const options = [
    { value: 'null', label: 'Not User Found' },
  ]

  const getUser = () => {

    axios.get('http://localhost:4000/employee', { headers })
      .then((res) => {
       let employeeOptions = res.data.user.map((option) => ({label: option.name, value:option._id}));
       if(employeeOptions){
        setemployee(employeeOptions)
       }else{
        setemployee(options)
       }
      }).catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <div className='bg-gray-300 w-[100%] shadow-transparent  flex items-center justify-center'>
        <div className='bg-white w-[400px] p-1  flex-col'>
          <div className="flex items-center">
            <h2 className='text-blue-700 mx-auto text-2xl font-bold'>Congratulation !!!</h2>
          </div>
          <img className='mx-auto mt-4' src={Event} alt="Event" />
          <p className='text-xl ml-3 mt-2'>Booking Summary</p>
          <div className='flex justify-between mx-3 mt-2'>
            <p className=''>{displayMonth}</p>
            <p className=''>{fromDisplayTime +" - "+ toDisplayTime}</p>
          </div>
          <form className=' mx-3'>
            <Select
            // defaultValue={employee[1]}
            isMulti
            name="employee"
            options={employee}
            className=" bg-black"
            classNamePrefix="select"/>
            <div className='flex justify-end my-3'>
              <button className='text-[#5800FF] font-semibold'>Add To Your Calendar</button>
              <button  onClick={props.handleClose} className='text-[#ff0000] font-medium mx-3'>Cancle</button>
              <button className='text-[#5800FF] font-medium ml-4'><MdSend className='text-2xl'/></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookingSummary
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Event from '../../Assets/Events-cuate.svg'
import invideIcon from '../../Assets/telegram-app.svg'

import Select from 'react-select';
// import { colourOptions } from '../data';

const BookingSummary = (props) => {
  const [employee, setemployee] = useState({})
  const token = sessionStorage.getItem('token')
  const headers = { token }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const getUser = () => {

    axios.get('http://localhost:4000/employee', { headers })
      .then((res) => {
        console.log(res.data.user)
        setemployee(res.data.user)
        console.log(employee)
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
            <p className=''>{props.bookedDate}</p>
            <p className=''>{props.bookedTime}</p>
          </div>
          <form className=' mx-3'>
            <Select
            defaultValue={employee[1]}
            isMulti
            name="employee"
            options={employee}
            className=" bg-black"
            classNamePrefix="select"/>





            <div className='flex justify-end my-3'>
              <button className='text-[#5800FF] font-semibold'>Add To Your Calendar</button>
              <button onClick={props.handleClose} className='text-[#5800FF] font-medium ml-4'>Cancle</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default BookingSummary
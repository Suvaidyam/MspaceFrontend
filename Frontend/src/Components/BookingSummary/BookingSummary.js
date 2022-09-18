import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Event from '../../Assets/Events-cuate.svg'

const BookingSummary = (props) => {
  const [employee, setemployee] = useState('')
  const token = sessionStorage.getItem('token')
  const headers = { token }

  const getCompany = () => {

    axios.get('http://localhost:4000/employee', { headers })
      .then((res) => {
        console.log(res.data.user)
        setemployee(res.data.user)
      }).catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getCompany()
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

            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Select Company</option>

              {employee.map((ab) => {
                const { _id } = ab
                return <option key={_id} value={ab._id}>{ab.name}    ({ab.email})</option>;
              })}


            </select>





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
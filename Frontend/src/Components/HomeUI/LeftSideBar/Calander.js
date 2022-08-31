import React, { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './calander.css'

export default function Calander() {
  const [dateState, setDateState] = useState(new Date())
  console.log(dateState)
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <div>

        <h1 className='px-3 font-bold text-lg py-3'>Book Spaces</h1>
        <h1 className='px-3 font-bold text-gray-700 text-sm pb-2 '>Select Date</h1>

        <div className="flex justify-center items-center px-3  shadow-transparent border-none">

          <Calendar
            className="px-3   py-3 border-none shadow-transparent rounded "
            value={dateState}
            onChange={changeDate}
          />

        </div>
      </div>
    </>
  )
}

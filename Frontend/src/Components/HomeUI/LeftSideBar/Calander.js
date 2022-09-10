import React, { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './calander.css'

export default function Calander(props) {
  const [dateState, setDateState] = useState(new Date())


  const changeDate = (event) => {
    setDateState(event);
    let bookingDate = event.toString().slice(0, 15);
    props.setbookingDate(bookingDate);

  }
  return (
    <>
      <div>
        <div className="flex justify-center items-center px-3  pt-5 border-none">

          <Calendar
            className="px-3  shadow-md shadow-gray-500-50  bg-gray-50  border-none  rounded "
            value={dateState}

            onChange={changeDate}
          />

        </div>
      </div>
    </>
  )
}

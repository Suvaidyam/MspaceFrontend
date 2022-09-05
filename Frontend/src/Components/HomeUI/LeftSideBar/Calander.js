import React, { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css';
import './calander.css'

export default function Calander(props) {
  const [dateState, setDateState] = useState(new Date())
  // console.log(dateState)
  
  
  const changeDate = (event) => {
    setDateState(event)
    // console.log(event)
    props.setbookingDate(event)
   
  }
  return (
    <>
      <div>

        <div className="flex justify-center items-center px-3 pt-5  shadow-transparent border-none">

          <Calendar
            className="px-3    border-none shadow-transparent rounded "
            value={dateState}
            onChange={changeDate}
          />

        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Calander() {
  const [dateState, setDateState] = useState(new Date())
  console.log(dateState)
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <div className="flex justify-center items-center px-2 my-2 border-none">
        <Calendar
          className="px-3 py-3 border-none rounded-2xl shadow-inner"
          value={dateState}
          onChange={changeDate}
        />
      </div>
    </>
  )
}

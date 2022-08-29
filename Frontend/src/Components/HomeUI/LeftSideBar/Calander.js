import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calander = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)

  return (
    <div className='flex   justify-center mt-12  px-4  '>


      <Calendar className="bg-white  items-center rounded-lg px-2 pb-2 shadow-lg border-spacing-16" onChange={onChange} value={value} />

    </div>
  );
}

export default Calander
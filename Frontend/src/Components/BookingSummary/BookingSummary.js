import React from 'react'
import Event from '../../Assets/Events-cuate.svg'

const BookingSummary = () => {
  const date = "06 September, 2020";
  const time = "10:00-11:00"
  return (
    <>
    <div className='bg-gray-300 w-[100%] min-h-screen flex items-center justify-center'>
      <div className='bg-white w-[400px] p-1  flex-col'>
        <div className="flex items-center">
        <h2 className='text-blue-700 mx-auto text-2xl font-bold'>Congratulation !!!</h2>
        </div>
        <img className='mx-auto mt-4' src={Event} alt="Event" />
      <p className='text-xl ml-3 mt-2'>Booking Summary</p>
      <div className='flex justify-between mx-3 mt-2'>
        <p className=''>{date}</p>
        <p className=''>{time}</p>
      </div>
      <form className=' mx-3'>
        <input type="text" className='border w-full mt-4 p-2 ' placeholder='invite people' />
        <div className= 'flex justify-end my-3'>
          <button className='text-[#5800FF] font-semibold'>Add To Your Calendar</button>
          <button className='text-[#5800FF] font-medium ml-4'>Cancle</button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default BookingSummary
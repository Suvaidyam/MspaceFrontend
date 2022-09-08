import React from 'react'
import img from '../../../Assets/room.png'
import calendar from '../../../Assets/calendar.png'
import clock from '../../../Assets/clock.png'
import people from '../../../Assets/people.png'

const Cards = () => {
  return (
    <>

      <div className=" h-[125px] w-full flex px-16 my-6  rounded-lg   ">
        <div className="   w-[22%] bg-white">
          <img src={img} alt="" className='h-[123px] w-[247px] py-1 px-1 rounded-lg' />
        </div>
        <div className=" px-4  w-[28%] bg-white">
          <h1 className='py-1'>Meeting Area 1 <span> <button className=" w-16 rounded  outline  outline-green-300 mx-1 ">Today</button></span></h1>
          <p className=' py-1 flex items-center'><span><img src={calendar} className='w-4 h-4 mx-1' /></span> 12 september,2022 </p>
          <p className=' py-1 flex items-center'><span><img src={clock} className='w-4 h-4 mx-1' /></span> 9 AM</p>
          <p className=' flex items-center'><span><img src={people} className='w-4 h-4 mx-1' /></span>people Invited
            <div className="flex ml-3 -space-x-1 overflow-hidden">
              <img
                className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <p className='text-xs pl-1 font-medium'>+8</p>
            </div></p>
        </div>
        <div className='w-[50%] bg-white h'>bik,hjynkmlkj</div>

      </div>

    </>
  )
}

export default Cards



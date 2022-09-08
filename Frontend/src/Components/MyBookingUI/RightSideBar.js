import React from 'react'
import { Link } from 'react-router-dom'
import calendar from '../../Assets/calendar.png'
import clock from '../../Assets/clock.png'
import people from '../../Assets/people.png'

const RightSideBar = () => {
  return (
    <>
    <div className="bg-gray-50 h-full w-[85%] ">
      <div className="flex pt-16 justify-between">
          <p className='font-semibold'>Upcoming</p>
          <Link to="/viewall/upcoming" className='text-blue-600 underline '>View All</Link>
      </div>
      <div className="bg-white  shadow-md rounded-md mt-2 py-1 px-2">
        <div className="flex justify-between">
          <p>Meeting Area 1</p>
          <p>1 hr</p>
        </div>
        <div className="mt-2 ml-1">
          <p className='flex items-center'><img src={calendar} className='w-4 h-4 mx-1' /><span> September 5,2022</span></p>
          <p className='flex items-center'><img src={clock} className='w-4 h-4 mx-1' /><span> 9 AM</span></p>
        </div>
        <div className="flex justify-between">
        <p className='flex items-center ml-1'><img src={people} className='w-4 h-4 mx-1' /><span>People Invited</span></p>
          <div className="flex -space-x-1 overflow-hidden">
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
      </div>
        </div>
       <div className="flex justify-center my-2"> <button className='bg-[#E97C00] py-1.5 w-full rounded-md'>Reschedule</button></div>
      </div>
      {/* dfjh */}
      <div className="flex mt-3 justify-between">
          <p className='font-semibold'>Previous</p>
          <Link to="/viewall/previous" className='text-blue-600 underline '>View All</Link>
      </div>
      <div className="bg-white  shadow-md rounded-md mt-2 py-1 px-2">
        <div className="flex justify-between">
          <p>Meeting Area 1</p>
          <p>1 hr</p>
        </div>
        <div className="mt-2 ml-1">
          <p className='flex items-center'><img src={calendar} className='w-4 h-4 mx-1' /><span> September 5,2022</span></p>
          <p className='flex items-center'><img src={clock} className='w-4 h-4 mx-1' /><span> 9 AM</span></p>
        </div>
        <div className="flex justify-between">
        <p className='flex items-center ml-1'><img src={people} className='w-4 h-4 mx-1' /><span>People Invited</span></p>
          <div className="flex -space-x-1 overflow-hidden">
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
      </div>
        </div>
       <div className="flex justify-center my-2"> <button className='bg-gray-300 py-1.5 w-full rounded-md'>View Details</button></div>
      </div>
      {/* dfjh */}
      <div className="flex mt-3 justify-between">
          <p className='font-semibold'>Cancelled</p>
          <Link to="/viewall/cancelled" className='text-blue-600 underline '>View All</Link>
      </div>
      <div className="bg-white  shadow-md rounded-md mt-2 py-1 px-2">
        <div className="flex justify-between">
          <p>Meeting Area 1</p>
          <p>1 hr</p>
        </div>
        <div className="mt-2 ml-1">
          <p className='flex items-center'><img src={calendar} className='w-4 h-4 mx-1' /><span> September 5,2022</span></p>
          <p className='flex items-center'><img src={clock} className='w-4 h-4 mx-1' /><span> 9 AM</span></p>
        </div>
        <div className="flex justify-between">
        <p className='flex items-center ml-1'><img src={people} className='w-4 h-4 mx-1' /><span>People Invited</span></p>
          <div className="flex -space-x-1 overflow-hidden">
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
      </div>
        </div>
       <div className="flex justify-center my-2"> <button className='bg-red-500 py-1.5 w-full rounded-md'>Cancelled</button></div>
      </div>
      {/* dfjh */}
    </div>
    </>
  )
}

export default RightSideBar
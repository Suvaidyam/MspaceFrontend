import React,{useState} from 'react'
import img from '../../../Assets/room.png'
import calendar from '../../../Assets/calendar.png'
import clock from '../../../Assets/clock.png'
import people from '../../../Assets/people.png'

const Cards = (props) => {
  const [open , setOpen]=useState(false)

const toggle =()=>{
  setOpen(!open)
}
  return (
    <>
      <div className="bg-white mx-16 rounded-md p-1.5 shadow-lg">
        <div className="flex">
          <div className="w-1/4">
            <img src={img} className=" w-4/4 h-full rounded-md"/>
          </div>
          <div className="w-2/5 px-6 p-2">
           <div className="flex">
           <h1 className='text-xl font-medium'>Meeting Area 1</h1>
           <button className={props.btncolor}>{props.btn}</button>
           </div>
           <div className="">
            <p className='flex items-center my-1'><img src={calendar} className="w-4 h-4 mr-2"/> <span className='text-sm'>September 5,2022</span></p>
            <p className='flex items-center my-1'><img src={clock} className="w-4 h-4 mr-2"/> <span className='text-sm'>9 AM</span></p>
           </div>
           <div className="flex items-center">
           <p className='flex items-center'><img src={people} className="w-4 h-4 mr-2"/> <span className='text-sm'>People invited</span></p>
           <div className="flex -space-x-1 overflow-hidden ml-6">
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
      <p className='text-xs pl-3 font-medium'>5 more</p>
      </div>
           </div>
          </div>
          <div className=" w-1/3 mx-2 py-1.5 px-5 ">
            <div className="flex items-end justify-end">
             {
              (open === false)? <p onClick={toggle} className='text-[#3330E4] 
              flex items-center cursor-pointer'>Set Reminder  <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0
               005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64
                3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
             </svg><span className='text-lg font-bold'>+</span></p>:
               <p onClick={toggle} className='text-[#3330E4] flex items-center cursor-pointer'>Remove Reminder 
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" 
                strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118
                 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64
                  3.56 1.085  5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3
                   3 0 11-5.714  0M3.124 7.5A8.969 8.969 0 015.292 3m13.416
                  0a8.969 8.969 0 012.168 4.5" /></svg></p>
             }
            </div>
            <div className="flex justify-between">
              <p className='text-sm text-[#3330E4] underline'>Invite People</p>
              <p className='text-sm text-red-500 underline'>Cancel Meeting</p>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Cards



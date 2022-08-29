import React from 'react'
import Img from '../../../Assets/room.png'

const Overview = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap  bg-white pb-8">

        <div className=" transform  transition duration-500 hover:scale-105 hover:shadow-2xl      w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 1 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-[#3CCF4E] hover:text-[#5800FF]  focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <span className='text-lg'>Book Space</span></button>
          </div>
        </div>

        <div className="transform  transition duration-500 hover:scale-105  hover:shadow-2xl      w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 2 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-gray-400   hover:text-[#5800FF] focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg> <span className='text-lg'>Room is Full</span></button>
          </div>
        </div>
        <div className="transform  transition duration-500 hover:scale-105   hover:shadow-2xl      w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 3 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-[#3CCF4E]   hover:text-[#5800FF] focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <span className='text-lg'>Book Space</span></button>
          </div>
        </div>

        <div className="  transform  transition duration-500 hover:scale-105  hover:shadow-2xl     w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 3 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-[#3CCF4E]  hover:text-[#5800FF] focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <span className='text-lg'>Book Space</span></button>
          </div>
        </div>

        <div className="  transform  transition duration-500 hover:scale-105 hover:shadow-2xl    w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 2 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-gray-400  hover:text-[#5800FF] focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg> <span className='text-lg'>Room is Full</span></button>
          </div>
        </div>
        <div className="transform  transition duration-500 hover:scale-105  hover:shadow-2xl      w-[270px] h-[250px]  m-3 ml-8   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Area 2 </h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>Capacity:4</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-gray-400   hover:text-[#5800FF] focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg> <span className='text-lg'>Room is Full</span></button>
          </div>
        </div>




      </div>
    </>
  )
}

export default Overview
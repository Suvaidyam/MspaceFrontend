import React from 'react'
import Img from '../../../Assets/room.png'

const Overview = () => {
  return (
    <div className="flex  ">
      <div className="w-[284px] h-[280px]  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={Img} alt />
        </a>
        <div>
          <h1 className="p-2 ml-1">Meeting Area <span className='ml-20'>Capacity:4</span></h1>
        </div>
      </div>




    </div>
  )
}

export default Overview
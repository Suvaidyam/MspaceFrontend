import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from './LeftSideBar/SideBar'
import Overview from './Overview/Overview'


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='w-[23%]'>
          <SideBar />
        </div>
        <div className='w-[77%] bg-slate-50'>
          <Overview />
        </div>
      </div>


    </>
  )
}

export default HomePage
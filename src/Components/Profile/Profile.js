import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react'
import proImg from '../../Assets/avatar.png'
import { BsCameraFill } from 'react-icons/bs'
import { MdLogout, MdPassword } from 'react-icons/md'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { GrFormClose } from 'react-icons/gr'

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userCompany, setuserCompany] = useState();
  const [url, setUrl] = useState();
  console.log(url)
  let paylode = JSON.parse(sessionStorage.getItem('paylode'))
  const { name, email, company, _id } = paylode;


  let token = sessionStorage.getItem('token')
  let headers = {
    token
  }
  axios.get(`http://localhost:4000/company/${company}`, {
    headers
  }
  ).then((response) => {
    setuserCompany(response.data.company.name)

  }).catch((error) => {
    console.log(error)
  }
  )


  const uploadImg = (e) => {
    const imageFile = e.target.files[0]
    const body = new FormData()
    body.append('file', imageFile)

    axios.put(`http://localhost:4000/employee/${_id}`,
      body,
      {
        headers
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })

  }
  const img = () => {
    axios.get(`http://localhost:4000/employee/${_id}`,
      {
        headers
      }).then((res) => {
        setUrl(res.data.user.url)
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    img()
  }, [url])



  return (
    <>
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box

            className='fixed flex items-center w-full h-full justify-center my-4'>
            <Typography>
              <div className="flex w-full  items-center justify-center">
                <div className="w-[520px] flex flex-col gap-3 bg-white px-4 py-3">
                  <div>
                    <div className='flex justify-end'>
                      <p className='cursor-pointer' onClick={handleClose}> <GrFormClose className='text-2xl ' /></p>
                    </div>
                    <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 ">Current Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 ">New Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 ">Re New Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
                  <div>
                    <button className=" bg-[#5800FF] text-white text-lg font-medium block w-full p-2 "
                    >Save</button>
                  </div>
                </div>
              </div>
            </Typography>

          </Box>
        </Modal>
      </div>


      {/* bhjhgjhg */}
      <Navbar />
      <div className='w-full  h-screen bg-gray-100 '>
        <div className="w-full h-full flex-col lg:flex-row lg:flex  justify-center pt-10 gap-2">
          <div className="w-full lg:w-[250px] flex  justify-center">
            <div className="w-[250px]  flex flex-col  items-center">
              <div className="group flex items-center justify-center flex-col shadow-2xl w-full h-56">
                <div className="w-56 h-full relative rounded-full border-2 border-[#5800FF]">
                  <img className='w-full h-full rounded-full object-cover ' src={url ? 'http://localhost:4000/' + url : proImg} alt="profile" />
                  <label className='w-10 h-10 flex absolute bg-[#5800FF] border right-3 drop-shadow-lg  rounded-full bottom-3 items-center justify-center 
                    cursor-pointer'>
                    <BsCameraFill className='text-white' />
                    <input onChange={uploadImg} type="file" name='uploadimage' accept='image/*'
                      className='w-0 h-0' />
                  </label>
                </div>
              </div>
              <p className='w-full bg-white shadow-md py-2 flex items-center justify-center'>
                <span className='font-medium text-md mt-1 '>Hello,
                </span><span className='font-medium text-lg text-[#5800FF]'>{name}</span></p>
            </div>
          </div>
          <div className='w-full lg:w-[750px] px-2 lg:px-0 flex mt-5 lg:mt-0 justify-center '>
            <div className="w-full  lg:w-[750px]  h-24">
              <div className=" w-full xs:flex-none sm:flex shadow-lg  bg-white">
                <div className="px-2 pt-2 sm:w-1/2 xs:full">
                  <p ><span className='text-xl font-medium'>Personal Information </span ><span className='text-[#5800FF] ml-5 font-medium cursor-pointer'> Edit</span></p>
                  <div className='mt-5'>
                    <input type="text" id="code" value={name} className="bg-gray-50 border border-gray-300
             text-gray-900 text-md font-semibold  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white "
                      placeholder="Enter your Name" />
                  </div>
                  <div className='mt-3'>
                    <input type="email" id="code" value={email} className="bg-gray-50 border border-gray-300
             text-gray-900  text-md font-semibold  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white "
                      placeholder="Enter your Seat Code" />
                  </div>
                  <div className='mt-3'>
                    <button className='w-full bg-[#5800FF] text-white py-2.5 text-xl font-medium  hover:bg-[#3330E4]'>Sumbit</button>
                  </div>

                  <p className='text-lg mt-5 text-[#5800FF] pb-2'>@ Welcome to M-Space</p>
                </div>
                <div className="b sm:w-1/2 xs:full xs:pl-2 sm:pl-0 flex flex-col mt-2 pr-2">
                  <p ><span className='text-xl font-medium'>Your Page </span ><span className='text-[#5800FF] ml-5 font-medium cursor-pointer'> Exit</span></p>
                  <button className="w-full py-2.5 mt-5 text-[#5800FF]  px-3 bg-gray-200 text-md font-semibold  flex items-center justify-between">Logout <MdLogout className='text-gray-600 cursor-pointer hover:text-[#5800FF]' /></button>
                  <button className="w-full py-2 mt-3 text-[#5800FF] px-3 bg-gray-200 text-md font-semibold  flex items-center justify-between" onClick={handleOpen}>Change Your Password <MdPassword className='text-gray-600 cursor-pointer hover:text-[#5800FF]' /></button>
                  <p className='mt-2'><span className='text-md font-semibold  '>Company :</span><span className='text-[#5800FF] text-md font-semibold '>{" " + userCompany}</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile
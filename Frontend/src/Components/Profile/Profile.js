import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react'
import proImg from '../../Assets/room.png'
import logo from '../../Assets/add-circle.svg'

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

          className='absolute top-36  bg-white my-4 lg:left-[28%] md:left-[22%] sm:left-[16%] xs:left-[10%] xl:left-[32%] '>
          <Typography>
            <div className="flex w-full  items-center justify-center">
              <div className="w-[520px]  bg-white p-4">
              <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 pt-2">Current Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
              <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 pt-2">New Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
              <div>
                 <label className="block mb-2 text-sm font-medium text-gray-900
                    dark:text-gray-300 pt-2">Re New Password*</label>
                    <input type="text" id="file" className="bg-gray-50 border border-gray-300
                      text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
                     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your current password" />
                  </div>
              </div>
            </div>
          </Typography>

        </Box>
      </Modal>
    </div>

    {/* bhjhgjhg */}
     <div className="lg:flex-none xl:flex w-full min-h-screen mx-auto py-8 xl:pr-48 lg:px-8 bg-gray-100">
       <div className="xl:w-[30%] lg:w-full flex  items-center  xl:items-end mx-3 flex-col">
          <div className="h-56 w-60 border-2 bg-white">
            <img className='h-full p-1' src={proImg} alt="" />
          </div>
            <p className='w-60 bg-white border-2 py-3 flex items-center justify-center'><span className='font-normal'>Hello,</span><span className='text-xl'>Rahul Kumar</span></p>
       </div>

       <div className="xl:w-[70%] lg-full ">
         <div className=" w-full xs:flex-none sm:flex  border-2  bg-white">
          <div className="px-2 pt-2 sm:w-1/2 xs:full">
          <p ><span className='text-xl font-medium'>Personal Information </span ><span className='text-[#5800FF] ml-5 font-medium cursor-pointer'> Edit</span></p>
          <div className='mt-5'>
           <input type="text" id="code" value='Rahul Kumar' className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white " 
              placeholder="Enter your Seat Code" />
           </div>
           <div className='mt-3'>
           <input type="email" id="code" value='rahul.suvaidyam@gmail.com' className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white " 
              placeholder="Enter your Seat Code" />
           </div>
           <div className='mt-3'>
            <button className='w-full bg-[#5800FF] py-2.5 text-lg hover:bg-[#3330E4]'>Sumbit</button>
           </div>
          
           <p className='text-lg mt-5 text-[#5800FF] pb-2'>@ welcome to M-Space</p>
          </div>
           <div className="b sm:w-1/2 xs:full xs:pl-2 sm:pl-0 flex flex-col mt-2 pr-2">
           <p ><span className='text-xl font-medium'>Your Page </span ><span className='text-[#5800FF] ml-5 font-medium cursor-pointer'> Exit</span></p>
            <button className="w-full py-2 mt-5 hover:text-[#5800FF] cursor-pointer px-3 bg-gray-200 text-xl flex justify-between">Logout <img src={logo} alt="" /></button>
            <button className="w-full py-2 mt-3 hover:text-[#5800FF] cursor-pointer px-3 bg-gray-200 text-lg flex justify-between" onClick={handleOpen}>Change Your Password <img src={logo} alt="" /></button>
            <p className='mt-2'><span className='text-lg '>Company :</span><span className='text-[#5800FF] text-xl'> SUVAIDYAM</span> </p>
           </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default Profile
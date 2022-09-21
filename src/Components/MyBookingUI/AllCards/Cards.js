import React, { useState } from 'react'
import img from '../../../Assets/room.png'
import calendar from '../../../Assets/calendar.png'
import clock from '../../../Assets/clock.png'
import people from '../../../Assets/people.png'
import { meeting } from '../Data'
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineBell } from "react-icons/ai";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Add from '../AddPeople/AddPeople'

const Cards = (props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open, setOpen] = useState(false)
  const [icon, setIcon] = useState(false)

  const toggle = () => {
    setIcon(!icon)
  }
  return (
    <>
      <div className='mt-10'>
        {meeting && meeting.map(item => (
          <div className="bg-white mx-12 rounded-md p-1.5 shadow-lg my-3" key={item.id}>
            <div className="flex">
              <div className="w-1/4">
                <img src={img} className=" w-4/4 h-full rounded-md" />
              </div>
              <div className="w-2/5 px-6 p-2 flex justify-between flex-col">
                <div className="flex">
                  <h1 className='text-xl font-medium'>{item.meetingArea}</h1>
                  <button className={props.btncolor}>{props.btn}</button>
                </div>
                <div className="">
                  <p className='flex items-center mb-3'><img src={calendar} className="w-4 h-4 mr-2" />
                    <span className='text-sm'>{item.date}</span></p>
                  <p className='flex items-center '><img src={clock} className="w-4 h-4 mr-2" />
                    <span className='text-sm'>{item.time} AM</span></p>
                </div>
                <div className="flex items-center">
                  <p className='flex items-center'><img src={people} className="w-4 h-4 mr-2" />
                    <span className='text-sm'>People invited</span></p>
                  <div className="flex -space-x-1 overflow-hidden ml-6">
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src={item.peopleimg1} alt="" />
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src={item.peopleimg2} alt="" />
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src={item.peopleimg3} alt="" />
                    <img
                      className="inline-block h-4 w-4 rounded-full ring-2 ring-white"
                      src={item.peopleimg4} alt="" />
                    <p className='text-xs pl-3 font-medium'>5 more</p>
                  </div>
                </div>
              </div>
              <div className=" w-1/3 mx-2 py-1.5 px-5 flex-col justify-between  flex ">
                <div className="flex items-end flex-col justify-between ">
                  {
                    (icon === false) ? <p onClick={toggle} className='text-[#3330E4] 
               flex items-center cursor-pointer'>Set Reminder <AiOutlineBell className='text-xl' /><span className='text-lg font-bold'>+</span></p> :
                      <p onClick={toggle} className='text-[#3330E4] flex items-center cursor-pointer'>Remove Reminder
                        <IoMdNotifications className='text-xl' /></p>
                  }
                </div>
                <div className="flex  justify-end ">
                  <p className='text-sm text-[#3330E4] underline mr-8 cursor-pointer' onClick={handleOpen}>Invite People</p>
                  <p className='text-sm text-red-500 underline cursor-pointer'>Cancel Meeting</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=
          'justify-center'>
          <Typography>
            <Add handleClose={handleClose} />
          </Typography>

        </Box>
      </Modal>

    </>
  )
}

export default Cards



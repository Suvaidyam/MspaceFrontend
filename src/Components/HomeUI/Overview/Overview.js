import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../../CreateSpace/Popup'
import Loading from '../../Skeleton/Overview';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PopupBtn from '../../BookingSummary/BookingSummary'
import { useSelector } from 'react-redux';
import CreateMeetingRoom from '../../CreateMeetingRoom/CreateMeetingRoom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',


};

const Overview = (props) => {
  // const {capacity } = props.bookingData;
  const fromTime = useSelector( state => state.fromTime)// getting time value from redux
  const toTime = useSelector( state => state.toTime) // getting time value from redux

// console.log("fromTime", fromTime, "toTime",toTime)
  // console.log(props.bookingData)

  const [isloading, setisloading] = useState(true)
  const [meetingRoom, setmeetingRoom] = useState([])
  const [spaceBookings, setspaceBookings] = useState([])
  const [newCompanySpace, setnewCompanySpace] = useState(false)
  // const [bookings, setbookings] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // THIS IS FOR CHECKING USER LOGINED IS ADMIN OR EMPLOYE
  let paylode = JSON.parse(sessionStorage.getItem('paylode'))
  let { userType } = paylode
  let admin = false;
 
  userType === "COMPANY_ADMIN" ? admin = true :  admin = false;

// THIS IS FOR BOOKING MEETING ROOMS OF COMPANY
  const bookSpace = (companySpace) => {
    console.log(companySpace)
    let token = sessionStorage.getItem('token')
    let headers = {
      token
    }
    let body ={
      companySpace:companySpace,
      fromTime:fromTime,
      toTime:toTime,
      // participants:["6300b061767fa6162f26f4b3"]
    }
    axios.post(`http://localhost:4000/spacebooking`, body, {
      headers
    }
    )
      .then((response) => {
        handleOpen()

      }).catch((error) => {
        console.log(error)
      }
      )};

// THIS IS FOR GET ALL THE BOOKING BETWEEN SLECTED TIME
let token = sessionStorage.getItem('token')
  const getBookings = (token) => {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:4000/spacebooking`, {
        headers: {
          "token": ` ${token}`
        },
        params: {
          "fromDateTime": fromTime,
          "toDateTime": toTime
        }
      })
        .then((res) => {
          console.log("TODAY BOOKED SPACES BETWEEN SLECTED TIME",res.data.spaceBooking)
          setspaceBookings(res.data.spaceBooking)
          resolve(res.data)
        }).catch((error) => {
          console.log(error)
          reject(error)
        })
    })};

//  THIS API IS FOR GETTING ALL MEETING SPACE OF COMPANY
    const getCompanySpace = ()=>{
      axios.get(`http://localhost:4000/companyspace`, {
        headers: {
          "token": ` ${token}`
        }
      })
        .then(async (res) => {
          setmeetingRoom(res.data.companyspace)
          setisloading(false)
          setnewCompanySpace(true)
          // try {
          //   let data = await getBookings(token)
          //   console.log("ABHISHEK",data)
          // } catch (error) {
          //   console.log(error)
          // }
          // console.log(res.data.companyspace)
        }).catch((error) => {
          console.log(error)
        })};

/// THIS IS FOR FILTERING MEATINGROOMS  AND BOOKED MEATING ROOMS 

// console.log("abcd",newSpace[0].bookings)
const noOfBookedSpace = ()=>{
  let newSpace = meetingRoom.map((space) => {
    space['bookings'] = spaceBookings.filter(f => f.companySpace == space._id);
    return space;
});
console.log("No of booked spaces of each meeting rooms",newSpace)
}

  useEffect(() => {
    setisloading(true)// when time change skelton loading on
    setmeetingRoom([])// meeting rooms value is empty
    if (token) {
      getBookings(token)
      getCompanySpace()
      noOfBookedSpace()
    } else {
      console.error('token is require');
    }
  }, [fromTime ,toTime]);


  return (
    <>
     {admin ? <div>
      {newCompanySpace ? <>
      {meetingRoom.length == 0 ? <div className="w-full h-full flex justify-center items-center">
       <CreateMeetingRoom/>
       </div>:<></>}
       </>: <></>}
      
     </div> : null}
      {
        isloading ? <Loading /> : <>

          <div className="flex justify-center items-center flex-wrap pb-8">

            {meetingRoom.map((card) => {
              const { _id } = card
              return (
                <div key={_id} className="flex   justify-center items-center mt-3 flex-wrap  ">
                  <div className=" transform transition duration-1000 hover:scale-105    w-[270px] h-[250px]  justify-between mx-9 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={`http://localhost:4000/${card.url}`} alt="MettingRooms" />
                    <div className='justify-between flex'>
                      <h1 className="p-2  font-bold text-xs ml-1">Meeting Room {card.code} ____</h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>capacity: {card.maxParticipant}</h1>
                    </div>
                    <div className='flex justify-center py-2 '>
                      <button onClick={()=>{bookSpace(_id)}}  type="button" className='bg-[#3CCF4E] text-white  flex   focus:outline-none font-medium justify-center  text-sm w-[240px] ml-2 py-2 text-center mr-2 mb-2'><img className='mt-0.5' src={props.add} alt="" /> <span className='text-lg'> Book Space</span></button>


                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style} className=
                          'justify-center'>
                          <Typography>
                            <PopupBtn className="justify-center" fromTime={fromTime} toTime={toTime} handleClose={handleClose} />
                          </Typography>

                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

        </>
      }
      {admin ? <Popup /> : null}
    </>
  )
}

export default Overview
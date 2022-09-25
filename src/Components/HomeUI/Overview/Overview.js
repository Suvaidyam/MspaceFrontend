import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../../CreateSpace/Popup'
import Loading from '../../Skeleton/Overview';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PopupBtn from '../../BookingSummary/BookingSummary'
import { useSelector } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',


};



const Overview = (props) => {
  const {capacity } = props.bookingData;
  const fromTime = useSelector( state => state.fromTime)
  const toTime = useSelector( state => state.toTime)

// console.log("fromTime", fromTime, "toTime",toTime)
  // console.log(props.bookingData)

  const [isloading, setisloading] = useState(true)
  let token = sessionStorage.getItem('token')
  let paylode = JSON.parse(sessionStorage.getItem('paylode'))
  let { userType } = paylode
  let admin = false;
  if (userType === "COMPANY_ADMIN") {
    admin = true;
  } else {
    admin = false;
  }


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
        // console.log(response.data)
        handleOpen()

      }).catch((error) => {
        console.log(error)
      }
      )


  }


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
          console.log("abhishek",res.data)
          resolve(res.data)
        }).catch((error) => {
          console.log(error)
          reject(error)
        }
        )

    })

  }
  // token require for card render

  const [cardInfo, setcardInfo] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const getCompanySpace = (fromTime, toTime)=>{
      axios.get(`http://localhost:4000/companyspace`, {
        headers: {
          "token": ` ${token}`
        },
        params: {
          "fromDateTime": fromTime,
          "toDateTime": toTime
        }

      })
        .then(async (res) => {
          setcardInfo(res.data.companyspace)
          setisloading(false)
          try {
            let data = await getBookings(token)
            console.log(data)
          } catch (error) {
            console.log(error)
          }
          console.log(res.data.companyspace)


        }).catch((error) => {
          console.log(error)
        }
        )
    }
  useEffect(() => {
    if (token) {
      let fromDateTime = fromTime?fromTime:new Date()
      let toDateTime = toTime?toTime:new Date()
      console.log(fromTime, fromDateTime)
      getCompanySpace(fromDateTime, toDateTime)
    } else {
      console.error('token is require');
    }
  }, [fromTime ,toTime])

  return (

    <>

      {
        isloading ? <Loading /> : <>

          <div className="flex justify-center items-center flex-wrap   pb-8">

            {cardInfo.map((card) => {
              const { _id } = card
              return (

                <div key={_id} className="flex   justify-center items-center mt-3 flex-wrap  ">

                  <div className=" transform transition duration-1000 hover:scale-105    w-[270px] h-[250px]  justify-between mx-9 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={`http://localhost:4000/${card.url}`} alt />

                    <div className='justify-between flex'>
                      <h1 className="p-2  font-bold text-xs ml-1">Meeting Room {card.code}</h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>capacity: {card.maxParticipant}</h1>
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

          {admin ? <Popup /> : null}
        </>
      }




    </>
  )
}

export default Overview
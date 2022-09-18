import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../../CreateSpace/Popup'
import Loading from '../../Skeleton/Overview';
import Btn from '../../BookingSummary/Popup'


const Overview = (props) => {
  const { fromTime, toTime, capacity } = props.bookingData;

  console.log(props.bookingData)

  const [isloading, setisloading] = useState(true)
  let token = sessionStorage.getItem('token')
  let paylode =JSON.parse(sessionStorage.getItem('paylode')) 
  let {userType} = paylode
  let admin = false;
  if(userType ==="COMPANY_ADMIN"){
    admin = true;
  }else{
    admin = false;
  }


  const bookSpace = (token) => {
    axios.post(`http://localhost:4000/spacebooking`, {
      headers: {
        "token": ` ${token}`
      },
      body: {
        "companySpace": ""
      }

    })
      .then((response) => {
        console.log(response.data)

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
          console.log(res.data)
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
  useEffect(() => {
    if (token) {
      axios.get(`http://localhost:4000/companyspace`, {
        headers: {
          "token": ` ${token}`
        },
        params: {
          "fromDateTime": new Date(),
          "toDateTime": new Date()
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
    } else {
      console.error('token is require');
    }
  }, [])

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
                      <button onClick={bookSpace} type="button" className='bg-[#3CCF4E] text-white  flex   focus:outline-none font-medium justify-center  text-sm w-[240px] ml-2 py-2 text-center mr-2 mb-2'><img className='mt-0.5' src={props.add} alt="" /> <span className='text-lg'> Book Space</span></button>
                      <Btn />
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          
            {admin? <Popup />: null}
        </>
      }




    </>
  )
}

export default Overview
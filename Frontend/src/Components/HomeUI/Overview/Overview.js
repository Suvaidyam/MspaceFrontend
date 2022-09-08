import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Popup from '../../CreateSpace/Popup'
import Loading from '../../Skeleton/Overview';



const Overview = (props) => {

  const [isloading, setisloading] = useState(true)

  // token require for card render

  const [cardInfo, setcardInfo] = useState([])
  useEffect(() => {
    let token = sessionStorage.getItem('token')
    if (token) {
      axios.get("http://localhost:4000/companyspace", {
        headers: {
          "token": ` ${token}`
        }
      })
        .then((res) => {
          setcardInfo(res.data.companyspace)
          setisloading(false)
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
              return (

                <div className="flex   justify-center items-center mt-3 flex-wrap  ">

                  <div className=" transform transition duration-1000 hover:scale-105    w-[270px] h-[250px]  justify-between mx-9 mt-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={`http://localhost:4000/${card.url}`} alt />
                    </a>
                    <div className='justify-between flex'>
                      <h1 className="p-2  font-bold text-xs ml-1">Meeting Room {card.code}</h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>capacity: {card.maxParticipant}</h1>
                    </div>
                    <div className='flex justify-center py-2 '>
                      <button type="button" class={props.bgcolor}><img className='mt-0.5' src={props.add} alt="" /> <span className='text-lg'>{props.book}</span></button>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <Popup />

        </>
      }




    </>
  )
}

export default Overview
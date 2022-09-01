import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from "react-loading-screen";

const Overview = () => {

  const [cardInfo, setcardInfo] = useState([])
  const getData = () => {
    axios.get("http://localhost:4000/companyspace")
      .then((res) => {

        setcardInfo(res.data.companyspace)
        console.log(res.data.companyspace)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const renderCard = (card) => {
    const { id } = card
    return (

      <div className="flex justify-center items-center  flex-wrap py-3 ">

        <div key={id} className=" transform transition duration-1000 hover:scale-105    w-[270px] h-[250px]  justify-around mx-9   bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="  p-1 items-center rounded-lg  w-[284px] h-[152px]" src={`http://localhost:4000/${card.url}`} alt />
          </a>
          <div className='justify-between flex'>
            <h1 className="p-2  font-bold text-xs ml-1">Meeting Room {card.code}</h1> <h1 className='pr-2 font-bold text-xs mt-1.5 opacity-70'>capacity: {card.maxParticipant}</h1>
          </div>
          <div className='flex justify-center py-2 '>
            <button type="button" class="text-white  flex bg-[#3CCF4E]  focus:outline-none font-medium  text-sm px-14 ml-2 py-2 text-center mr-2 mb-2"><svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <span className='text-lg'>Book Space</span></button>
          </div>
        </div>

      </div>
    )
  }
  return (
    <>
      <div className="App">

        <LoadingScreen
          loading={false}
          className="bg-white"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc=""
          text=""
        >
          {<div className="flex justify-center items-center flex-wrap   pb-8">

            {cardInfo.map(renderCard)}

          </div>}
        </LoadingScreen>
      </div>
      {/* <div className="flex justify-center items-center flex-wrap   pb-8">

        {cardInfo.map(renderCard)}

      </div> */}
    </>
  )
}

export default Overview
import React from 'react'

const meeting =[
  {time:'9 AM',FTtime:'9 AM 10 AM',dev:'UI Design',duration:'30 min'},
  {time:'10 AM',FTtime:'10 AM 11 AM',dev:'Backend Design',duration:'30 min'},
  {time:'11 AM',FTtime:'11 AM 12 AM',dev:'UI Design',duration:'30 min'},
  {time:'12 AM',FTtime:'12 AM 1 AM',dev:'Backend Design',duration:'30 min'},
  {time:'01 PM',FTtime:'1 PM 2 PM',dev:'UI Design',duration:'30 min'},
  {time:'02 PM',FTtime:'2 PM 3 PM',dev:'UI Design',duration:'30 min'},
]

const CenterBox = () => {
  
  return (
    <>
    <div className=" h-full w-full">
      <div className="">
        <h1 className='text-3xl font-semibold pl-10 py-5'>My Bookings</h1>
      </div>

      <div className="flex justify-center h-auto">
        <div className="bg-white mx-8  w-full  px-3 pb-6">
          <div className="flex justify-between items-center ">
            <div className="">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>September</option>
                <option value="US">Jan</option>
                <option value="CA">Feb</option>
                <option value="FR">Mar</option>
                <option value="DE">Apr</option>
              </select>
            </div>
            <div className="items-center font-semibold justify-center py-3 flex flex-col">
              <p>Today</p>
              <p>September 5,2022</p>
            </div>
            <div className="">
              <button className='bg-[#5800FF] px-2 py-1 rounded-md text-white'>Prev</button>
              <button className='bg-[#5800FF] px-2 py-1 rounded-md text-white mx-1'>Next</button>
            </div>
          </div>
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-blue-300 w-full cursor-pointer rounded-md border-l-8 border-l-blue-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-red-400 w-full cursor-pointer rounded-md border-l-8 border-l-red-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-blue-300 w-full cursor-pointer rounded-md border-l-8 border-l-blue-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-blue-300 w-full cursor-pointer rounded-md border-l-8 border-l-blue-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-blue-300 w-full cursor-pointer rounded-md border-l-8 border-l-blue-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
          <div className="flex py-2 items-center">
            <div className="w-20">9:00 Am</div>
            <div className="bg-blue-300 w-full cursor-pointer rounded-md border-l-8 border-l-blue-600 flex items-center text-white justify-between px-4 py-2">
              <div className="">
                <p>Meeting For UI Design</p>
                <p>9 Am 10 Am</p>
              </div>
              <div className="">30 min</div>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </div>
    </>
  )
}

export default CenterBox
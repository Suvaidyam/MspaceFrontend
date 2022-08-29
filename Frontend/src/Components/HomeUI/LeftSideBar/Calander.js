import React from 'react'

const Calander = () => {
  return (
    <div className="flex items-center mt-12   justify-center min-h-scree  rounded">
      <div className="w-[88%] p-5  bg-white rounded-2xl shadow-xl flex flex-col  border">
        <div className="flex justify-between pb-4">
          <div className="-rotate-90 cursor-pointer">
            <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="uppercase text-sm font-semibold text-gray-600">january - 2022</span>
          <div className="rotate-90 cursor-pointer">
            <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.001 6L6.00098 1L1.00098 6" stroke="black" strokeOpacity="0.4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
          <div className="  border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
            sun
          </div>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            mon
          </span>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            tue
          </span>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            wed
          </span>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            thu
          </span>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            fri
          </span>
          <span className=" border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            sat
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            30
          </span>
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            31
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            01
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            02
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            03
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            04
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            05
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            06
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            07
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            08
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            09
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            10
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            11
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            12
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            13
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            14
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            15
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            16
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            17
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            18
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            19
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            20
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            21
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            22
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            23
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            24
          </span>
          <span className="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md">
            25
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            26
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            27
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            28
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            29
          </span>
          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            30
          </span>
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            01
          </span>
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            02
          </span>
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            03
          </span>
        </div>
      </div>
    </div>
  )
}

export default Calander
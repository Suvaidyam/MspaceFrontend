import React from 'react'

const Time = () => {
    return (<>

        <div className='mt-3 items-center justify-center flex flex-wrap w-[100%] px-0 lg:px-8'>
            <button type="button" class=" px-[76px] py-3    flex mb-2 text-sm font-medium text-[#2ed341] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> <svg className=" w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg> <span className='text-lg'>Find Space</span> </button>

        </div>
    </>
    )
}

export default Time

import React from 'react'

const Findbtn = (props) => {
    props.setbtnClick("abc")
    const capacity = (event) => {
        // console.log(event.target.value)
        props.setcapacity(event.target.value)
    }
    return (
        <>
            <div className=' justify-center items-center px-3'>
                <div>

                    <label htmlFor="first_name" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Capacity</label>
                    <input onChange={capacity} type="text" id="first_name" className="bg-white border shadow border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Quantity" required />


                </div>
                <div className='mt-3'>

                    <button onClick={props.getBookingData} type="button" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-16 py-2.5 mr-2 mb-2 dark:bg-blue-600 shadow dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">FIND A SPACE</button>
                </div>
            </div>
        </>
    )
}

export default Findbtn

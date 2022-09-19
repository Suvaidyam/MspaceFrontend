import React from 'react'

const AddPeople = () => {
    return (
        <>
            <div className="w-full">
                <div className="w-[500px] p-3 rounded-md bg-gray-300 flex-col flex gap-2">
                    <div className="flex items-center justify-between">
                        <p className='font-semibold text-gray-700'>Add People</p>
                        <p className='font-semibold cursor-pointer'>
                            <svg id="clear_black_24dp" xmlns="http://www.w3.org/2000/svg" width="18.046" height="18.046" viewBox="0 0 13.046 13.046" >
                                <path id="Path_887" data-name="Path 887" d="M0,0H13.046V13.046H0Z" fill="none" />
                                <path id="Path_888" data-name="Path 888" d="M12.61,5.766,11.844,5,8.805,8.039,5.766,5,5,5.766,8.039
                                ,8.805,5,11.844l.766.766L8.805,9.572l3.039,3.039.766-.766L9.572,8.805Z" transform="translate(-2.282 -2.282)" fill="#3330e4" />
                            </svg>
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="w-full">
                            <input className='w-full rounded-md border border-gray-500 outline-none p-2' type="text" />
                        </div>
                        <p className='font-semibold text-gray-700'>Add Meeting</p>
                        <div className="w-full">
                            <input className='w-full rounded-md border border-gray-500 outline-none p-2
                        placeholder:font-light placeholder:text-base font-semibold text-md text-gray-600' type="text"
                                placeholder='Meeting Name' />
                        </div>
                        <div className="w-full mt-5">
                            <button className='w-full p-2 bg-[#5800FF] rounded-md text-white font-semibold'>Send Invite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPeople
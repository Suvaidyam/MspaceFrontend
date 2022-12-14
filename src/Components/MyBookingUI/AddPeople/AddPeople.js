import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const AddPeople = (props) => {

    const [user, setUser] = useState([])
    console.log('user', user)


    const [data, setData] = useState('')

    const addMember = () => {
        setUser(data)
    }
    const sele = [
        { name: 'Rahul' }
    ]
    return (
        <>
            <div className="">
                <div className="w-[500px] px-3 py-4 rounded-md shadow-inner  bg-white flex-col flex gap-2">
                    <div className="flex items-center justify-between">
                        <p className='font-semibold text-gray-700'>Add People</p>
                        {sele.map((e) => {
                            <p>{e.name}</p>
                        })}
                        <p className='font-semibold cursor-pointer'>
                            <AiOutlineClose onClick={props.handleClose} />
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className="w-full">
                            <input value={user} className='w-full rounded-md border border-gray-300 outline-none p-2' type="text" />
                        </div>
                        <p className='font-semibold text-gray-700'>Add Meeting</p>
                        <div className="w-full">
                            <input className='w-full rounded-md border border-gray-300 outline-none p-2
                              placeholder:font-light placeholder:text-base font-semibold text-md text-gray-600' type="text"
                                placeholder='Meeting Name' onChange={(e) => setData(e.target.value)} />
                        </div>
                        <div className="w-full mt-5">
                            <button className='w-full p-2 bg-[#5800FF] rounded-md text-white font-semibold' onClick={addMember}>Send Invite</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPeople
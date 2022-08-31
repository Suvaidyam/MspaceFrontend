import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Logo from '../../Assets/logo-1.png'

const CreateSpace = () => {
    const [code, setCode] = useState();
    const [file, setFile] = useState();
    const [spaceType, setUserType] = useState('');
    const [maxParticipant, setmaxParticipant] = useState();
    const [company , setCompany] = useState([]);
    const [Company , setcompany] = useState('');


    const getCompany = () =>{
      axios.get('http://localhost:4000/company-list')
      .then((res)=>{
        // console.log(res.data)
        setCompany(res.data.company)
      })
    }
     useEffect(()=>{
      getCompany()
     },[])

     

    const uploadFile =(e)=>{
     const data = new FormData()
     data.append('code',code)
     data.append('file',file)
     data.append('company',Company)
     data.append('spaceType',spaceType)
     data.append('maxParticipant',maxParticipant)
     axios.post(`http://localhost:4000/companyspace`,data)
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))
    }

    
  return (
    <>
    <>
  {/* Modal toggle */}
  <button
    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
    data-modal-toggle="defaultModal"
  >
    Toggle modal
  </button>
  {/* Main modal */}
  <div
    id="defaultModal"
    tabIndex={-1}
    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
    aria-modal="true"
    role="dialog"
  >
    <div className="relative  w-full max-w-xl h-full md:h-auto">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex justify-between items-start dark:border-gray-600">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="max-w-[1720px] m-auto  md:flex-none lg:flex">
      <div className="col-1 min-h-full w-full ">
        <div className="min-h-full flex   items-center justify-center md:w-full lg:min-w-[550px]  ">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img   className=" h-12 mt-3 w-auto justify-center" src={Logo} alt="Workflow"/>
                 <h1 className="mt-4  text-3xl tracking-tight font-semibold text-gray-900">
                 Create Space
                    </h1>
                   <h4 className="mt-2  text-md text-gray-600">
                  Please provide following details to continue
               </h4>
            </div>
            {/* jhlerhglerhgulherlughiler */}
            <div className="flex flex-col items-center justify-center ">
         
       <div className="w-[550px] px-8 pb-3">
       <div className=''>
            <label className="block mb-2 text-sm font-medium text-gray-900
             dark:text-gray-300 ">Seat Code*</label>
            <input type="text" id="code" onChange={(e)=>setCode(e.target.value)} className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your Seat Code" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900
             dark:text-gray-300 pt-2">Seat img*</label>
            <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])} className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your Seat Code" />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900
             dark:text-gray-300 pt-2">Max Participant* </label>
            <input type="text" id="maxParticipant" onChange={(e)=>setmaxParticipant(e.target.value)} className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your Participant Number" />
        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900
             dark:text-gray-300 pt-2">Choose Company*</label>
        <select onChange={(e)=>setcompany(e.target.value)} className=" rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
             border-gray-300 placeholder-gray-500 text-gray-900 
             sm:text-sm" id="company" name="company" as="select">
              {company.map((e)=>{
                const {_id} = e
                return <option key={_id} value={e._id}>{e.name}</option>;
              })}
          <option  value="">Select Company</option>
          <option  value="newCompany">New Company</option>
        </select>
        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900
             dark:text-gray-300 ">Choose Seat*</label>
        <select onChange={(e)=>setUserType(e.target.value)} className=" rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
             border-gray-300 placeholder-gray-500 text-gray-900 
             sm:text-sm" id="company" name="company" as="select">
          <option  value="">Select Seat Type</option>
          <option  value="SEAT">SEAT</option>
          <option  value="MEETING_ROOM">MEETING ROOM</option>
        </select>
        </div>
        <div className='mt-3'>
        <button type="submit" onClick={uploadFile} className="text-white bg-blue-700 hover:bg-blue-800 
         font-medium  text-lg w-full  pt-4 text-center
         dark:bg-blue-600 dark:hover:bg-blue-700 ">Create Space</button>
        </div>
         </div>
        </div>  
    
       </div>
       </div>
        </div>
     </div>
        
        {/* hh */}
      </div>
    </div>
  </div>
</>


    {/* djshfhwhw */}


    </>
  )
}

export default CreateSpace
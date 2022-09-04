import React from 'react'
import { Field, ErrorMessage } from "formik";
// import FileUploder from '../FileUploder/FileUploder';

const Other = (props) => {
    const getName = (e)=>{
      props.setcompanyName(e.target.value)  
    }
    const getCode = (e)=>{
      props.setcompanyCode(e.target.value)
    }
  return (
    <>
    <div>
                  <div className="mt-6">
                    <label htmlFor="companyName" className="block font-medium">Company Name</label>
                    <Field
                      type="text"
                      name="companyName"
                      className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Your Company Name"
                      onChange={getName}
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='companyName' component='p'/>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="companyCode" className="block font-medium">Company Code</label>
                    <Field
                      type="text"
                      name="companyCode"
                      className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Your company code"
                      onChange={getCode}
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='companyCode' component='p'/>
                  </div>
                  {/* <div className="mt-6">
                    <label htmlFor="companyCode" className="block">Company Logo</label>
                    <FileUploder setcompanyLogo={props.setcompanyLogo}/>
                    <ErrorMessage className='text-red-600 mb-4' name='companyCode' component='p'/>
                  </div> */}
                  
                  </div>
    </>
  )
}

export default Other
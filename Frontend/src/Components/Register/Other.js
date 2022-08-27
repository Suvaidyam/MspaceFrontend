import React from 'react'
import { Field, ErrorMessage } from "formik";

const Other = () => {
  return (
    <>
    <div>
                  <div className="mt-6">
                    <label htmlFor="companyName" className="block">Company Name</label>
                    <Field
                      type="text"
                      name="companyName"
                      className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Your Company Name"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='companyName' component='p'/>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="companyCode" className="block">Company Code</label>
                    <Field
                      type="text"
                      name="companyCode"
                      className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Your Email"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='companyCode' component='p'/>
                  </div>
                  </div>
    </>
  )
}

export default Other
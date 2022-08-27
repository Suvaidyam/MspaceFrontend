import React from 'react'
import { Field, ErrorMessage } from "formik";

const Other = () => {
  return (
    <>
    {/* qpjfiebsgkbfiohvncxiobvicxbiobvfiobfiobvfiobicv */}
    <div>
                  <div className="mt-6">
                    <label htmlFor="companyName" className="block">Company Name</label>
                    <Field
                      type="text"
                      name="companyName"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Company Name"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='companyName' component='p'/>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="companyCode" className="block">Company Code</label>
                    <Field
                      type="text"
                      name="companyCode"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Email"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='email' component='p'/>
                  </div>
                  </div>
                  {/* wjdhio;asgfiudsgiufgdsiyfvdsiyvigiusgfiudsgfiudiugfiu */}
    </>
  )
}

export default Other
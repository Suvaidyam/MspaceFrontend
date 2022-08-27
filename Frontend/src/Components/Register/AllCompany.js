import React, { useState, useEffect } from "react";
import Other from "./Other";
import { Field, ErrorMessage } from "formik";


const axios = require('axios');


const Slect = (props) => {
  const [company , setcompany] = useState([]);
  const [companyData,setcompanyData]=useState('')
  const getCompany = () =>{
    axios.get('http://localhost:4000/company-list')
    .then((res)=>{
      // console.log(res.data)
      setcompany(res.data.company)
    })
  }
   useEffect(()=>{
    getCompany()
   },[])

  //  console.log(companyData)
  return (
    <>
      <div className="mt-6">
        <label htmlFor="company" className="block">
          Slect Company
        </label>
        <Field onChange={(e)=>{setcompanyData(e.target.value)}} className="border p-2 w-4/5 rounded" id="company" name="company" as="select">
          <option  value="">Select Company</option>
           
          {company.map((ab) => {
            const {_id} = ab
            return <option key={_id} value={ab._id}>{ab.name}</option>;
          })}
          <option  value="newCompany">New Company</option>
        </Field>
        <ErrorMessage className='text-red-600 mb-4' name='allCompany' component='p'/>
        {
          companyData==="newCompany" ? <Other/> : <></>
        }
        
        
      </div>
    </>
  );
};

export default Slect;

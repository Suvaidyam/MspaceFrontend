import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
const axios = require('axios');






const Slect = () => {
  const [company , setcompany] = useState([]);
  const getCompany = () =>{
    axios.get('http://localhost:4000/company-list')
    .then((res)=>{
      console.log(res.data)
      setcompany(res.data.company)
    })
  }
   useEffect(()=>{
    getCompany()
   },[])


  return (
    <>
      <div className="mt-6">
        <label htmlFor="allCompany" className="block">
          Slect Company
        </label>
        <Field className="border p-2 w-4/5 rounded" id="allCompany" name="allCompany" as="select">
          <option  value="None">Select Company</option>
           
          {company.map((ab) => {
            const {_id} = ab
            return <option key={_id} value={ab._id}>{ab.name}</option>;
          })}
        </Field>
        <br />
        <ErrorMessage className="text-danger" name="state" component="small" />
      </div>
    </>
  );
};

export default Slect;

import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
const axios = require('axios');






const Slect = () => {
  const [company , setcompany] = useState([]);
  const getCompany = async() =>{
    try{
      const response = await axios.get('http://localhost:4000/company-list');
      console.log('response  ', response)
      setcompany(response.data)
      return response.data;
      
    }catch(error) {
      console.log(error)
      return [];
    };
  }


  return (
    <>
      <div className="mt-6">
        <label htmlFor="allCompany" className="block">
          Slect Company
        </label>
        <Field className="border p-2 w-4/5 rounded" id="allCompany" name="allCompany" as="select">
          <option  value="None">Select State</option>
          {company.map((ab) => {
            return <option value={ab._id}>{ab.name}</option>;
          })}
        </Field>
        <br />
        <ErrorMessage className="text-danger" name="state" component="small" />
      </div>
    </>
  );
};

export default Slect;

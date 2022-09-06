import "./register.css";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SlectCompany from "./AllCompany";
import Logo from "../../Assets/logo.png";
import google from "../../Assets/google.png";
import microsoft from "../../Assets/microsoft.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrMessage from "../ErrorMessage/ErrMessage";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required !"),
  email: Yup.string()
    .email()
    .required("Email is required !"),
    password: Yup
  .string()
  .required('Password is required')
  .min(5, 'Your password is too short.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmpassword: Yup
  .string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const Register = () => {

  const [open , setOpen]=useState(false)

const toggle =()=>{
  setOpen(!open)
}
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [companyCode, setcompanyCode] = useState("");
  const [errMessage, seterrMessage] = useState([]);
  const [companyLogo, setcompanyLogo] = useState(null);
  const [disable, setdisable] = useState(true);
  const [buttonCheck, setbuttonCheck] = useState("group relative w-full flex justify-center mt-4 py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-indigo-400");
  console.log(companyLogo)
  const submit = (value) => {
    const { name, email, password } = value;
    // console.log(companyLogo)
    let formData = { name, email, password };
    Object.assign(formData,{
      companyLogo
    })
    const postData = () => {
      if (company === "newCompany") {
        Object.assign(formData, {
          companyName: companyName.toUpperCase(),
          companyCode: companyCode,
        });
      } else {
        Object.assign(formData, {
          company
        });
      }
      console.log(formData)
    };
    postData();
    axios
      .post(`http://localhost:4000/auth/register`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
        seterrMessage(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        seterrMessage(err.response.data.message);
      });
  };
  const acceptTearmsCondition = (e) => {
    console.log(e.target.checked);
    if(e.target.checked === true){
      setdisable(false)
      setbuttonCheck("group relative w-full flex justify-center mt-4 py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-[#5800FF]")
    }else{
      setdisable(true)
      setbuttonCheck("group relative w-full flex justify-center mt-4 py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-indigo-400")
    }
  };
  return (
    <>
      <div className="lg:flex md:flex-none  m-auto  max-w-screen-2xl">
        <div className="custom-tilled bg-[#5800FF] relative  lg:w-1/2 md:w-full flex flex-col  items-center justify-center">
          <div className="custom-img absolute z-100"></div>
          <img className="w-32 absolute top-16 left-36" src={Logo} alt="Logo" />
          <div className=" text-white md:p-0 min-h-full md:w-screen md:ml-0 md:mr-0 lg:mr-48 lg:ml-10 flex flex-col  items-center justify-center mt-28 md:mt-0">
            <p className="text-xl">Already Have An Account ?</p>
            <p className="text-sm mt-2">
              Login to find a better space for yourself
            </p>
            <Link to="/">
              <button
                type="button"
                className="group relative border-white flex  mb-3 justify-center py-3 px-14 mt-5 rounded-sm border border-transparent text-md font-medium  text-white  hover:bg-indigo-700 focus:outline-none "
              >
                LOGIN
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full flex flex-col  items-center justify-center">
          <div className="flex justify-start items-start flex-col">
          <h1 className=" text-4xl font-bold mt-10 lg:mx-5">
            Sign up for an Account
          </h1>
          <p className="lg:mx-5">
            Please provide following details to continue
          </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {() => (
              <Form className="px-3">
                <div className="mt-10 ">
                  <label htmlFor="name" className="block font-medium">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
             border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
              focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                  <ErrorMessage
                    className="text-red-600 mb-4"
                    name="name"
                    component="p"
                  />
                </div>
                <div className="mt-6">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    className="text-red-600 mb-4"
                    name="email"
                    component="p"
                  />
                </div>

                <SlectCompany
                  setCompany={setCompany}
                  setcompanyCode={setcompanyCode}
                  setcompanyName={setcompanyName}
                  setcompanyLogo={setcompanyLogo}
                />

                <div className="mt-6 relative">
                  <label htmlFor="password" className="block font-medium">
                    Password
                  </label>
                  <Field
                    type={(open === false)?'password':'text'}
                    name="password"
                    className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Your Password"
                    
                  />
                   <p className='absolute right-2 bottom-3 cursor-pointer eye' id='eye'>
                   {
                          (open === false)?<svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>:
                        <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                        }
                   </p>
                </div>
                  <ErrorMessage
                    className="text-red-600 mb-4"
                    name="password"
                    component="p"
                  />
                <div className="mt-6">
                  <label htmlFor="confirmpassword" className="block font-medium">
                    Confirm Pasword
                  </label>
                  <Field
                    type="password"
                    name="confirmpassword"
                    className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Your Confirm Password"
                  />
                  <ErrorMessage
                    className="text-red-600 mb-4"
                    name="confirmpassword"
                    component="p"
                  />
                </div>
                <div></div>
                <div className="flex mt-4">
                  <input
                    onChange={acceptTearmsCondition}
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    I accept Mspace
                    <b className="text-[#5800FF]"><Link to="termsCondition"> terms & condition</Link></b>
                  </label>
                </div>
                <button
                  type="submit"
                  className={buttonCheck}

                    disabled={disable}
                >
                  SIGNUP
                </button>
                <div className="mt-6 ">
                  <p className="text-center text-xs font-medium">
                    Or SignUp Using
                  </p>
                </div>
                <div className="flex justify-center mt-6 mb-6">
                  <div className="border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2 flex">
                    <img
                      className="w-[20px] h-[20px] mr-3"
                      src={google}
                      alt="google"
                    />
                    <p> Contnue with Google</p>
                  </div>
                  <div className="border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2 flex">
                    <img
                      className="w-[20px]  h-[20px] mr-3"
                      src={microsoft}
                      alt="microsoft"
                    />
                    <p> Contnue with Microsoft</p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        < ErrMessage error={errMessage} className = {"notice"}/>
      </div>
    </>
  );
};

export default Register;

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
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [companyCode, setcompanyCode] = useState("");
  const [errMessage, seterrMessage] = useState([]);
  const [disable, setdisable] = useState(true);
  const [buttonCheck, setbuttonCheck] = useState("group relative w-full flex justify-center mt-4 py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-indigo-400");

  const submit = (value) => {
    const { name, email, password } = value;
    let formData = { name, email, password };
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
    };
    postData();
    axios
      .post(`http://localhost:4000/auth/register`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
        seterrMessage(res.data.message);
        navigate("/home");
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
          <img className="w-40 absolute top-8 left-16" src={Logo} alt="Logo" />
          <div className=" text-white md:p-0 min-h-full md:w-screen md:ml-0 md:mr-0 lg:mr-48 lg:ml-10 flex flex-col  items-center justify-center md:mt-28 sm:mt-28 xs:mt-28">
            <p className="text-xl">Don't Have An Account</p>
            <p className="text-sm mt-2">
              Create a new account and find a better space for yourself
            </p>
            <Link to="/">
              <button
                type="button"
                className="group relative border-white flex  mb-3 justify-center py-3 px-12 mt-5 rounded-sm border border-transparent text-md font-normal  text-white  hover:bg-indigo-700 focus:outline-none "
              >
                SIGNUP
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full flex flex-col  items-center justify-center">
          <h1 className="text-[36px] font-bold mt-10 lg:mx-5">
            Sign up for an Account
          </h1>
          <p className="lg:mx-5">
            Please provide following details to continue
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {() => (
              <Form className="px-3">
                <div className="mt-10 ">
                  <label htmlFor="name" className="block">
                    Full Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
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
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
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
                />

                <div className="mt-6">
                  <label htmlFor="password" className="block">
                    Password
                  </label>
                  <Field
                    type="text"
                    name="password"
                    className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
                      border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
                       focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    className="text-red-600 mb-4"
                    name="password"
                    component="p"
                  />
                </div>
                <div className="mt-6">
                  <label htmlFor="confirmpassword" className="block">
                    Confirm Pasword
                  </label>
                  <Field
                    type="password"
                    name="confirmpassword"
                    className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
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
                    <b className="text-[#5800FF]">terms & condition</b>
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
        <ErrMessage error={errMessage} />
      </div>
    </>
  );
};

export default Register;

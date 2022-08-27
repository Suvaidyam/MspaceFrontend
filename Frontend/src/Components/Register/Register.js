import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Slect from "./AllCompany";
import Logo from "../../Assets/logo.png";
import blue from "../../Assets/blue-side.svg";
import google from "../../Assets/google.png"
import microsoft from "../../Assets/microsoft.png"

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  h-[768px] max-w-screen-2xl 2xl:mx-auto">
        <div
          className="w-[100%] bg-no-repeat"
          style={{ backgroundImage: `url(${blue})` }}
        >
          <div className="custom-img absolute z-100"></div>
          <img
            className="w-[23%] mt-[30px] ml-[85px] z-0"
            src={Logo}
            alt="Logo"
          />
          <div className="text-white ml-[85px] mt-48">
            <p className="text-[24px]">Already Have An Account?</p>
            <p className="text-[16px] mt-2">
              Login to find a better space for yourselft?
            </p>
            <button className="border px-8  py-3 mt-5 ml-20">LOGIN</button>
          </div>
          <div className="custom-img2 absolute z-100 overflow-hidden"></div>
        </div>
        <div className="">
          <h1 className="text-[36px] font-bold mt-10 lg:mx-5">
            Sign up for an Account
          </h1>
          <p className="lg:mx-5">
            Please provide following details to continue
          </p>
          
            <Formik
              initialValues={{ name: "", password: "" }}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form");
                setSubmitting(false);
              }}
            >
              {() => (
                <Form>
                  <div className="mt-10">
                    <label htmlFor="fullName" className="block">Full Name</label>
                    <Field type="text" name="fullName" placeholder="Enter Your Name" className="border p-2 w-4/5 rounded" />
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="block">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <Slect/>
                  <div className="mt-6">
                    <label htmlFor="password" className="block">Pasword</label>
                    <Field
                      type="password"
                      name="password"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  <div>
                    
                  </div>
                  <div className="flex mt-4">
                  <input type="checkbox" name="remember-me" id="remember-me" />
                  <label htmlFor="remember-me"className="ml-2 block text-sm text-gray-900">I accept Mspace <b className="text-[#5800FF]">terms & condition</b></label>
                  </div>
                  <button className="w-4/5 bg-[#5800FF] p-3 rounded mt-4 text-white">SIGNUP</button>
                  <div className="mt-6 w-4/5">
                  <p className='text-center text-xs font-medium'>Or SignUp Using</p>
                  </div>
                  <div className="flex justify-center w-4/5 mt-6">
                  <div className='border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2 flex'> <img className="w-[20px] h-[20px] mr-3" src={google} alt="google" /><p> Contnue with Google</p></div>
                  <div className='border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2 flex'> <img className="w-[20px] h-[20px] mr-3" src={microsoft} alt="microsoft" /><p> Contnue with Microsoft</p></div>
    
                  </div>
                </Form>
              )}
            </Formik>
          
        </div>
      </div>
    </>
  );
};

export default Register;

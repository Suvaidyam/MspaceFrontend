import './register.css'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Slect from "./AllCompany";
import Logo from "../../Assets/logo.png";
import blue from "../../Assets/blue-side.svg";
import google from "../../Assets/google.png"
import microsoft from "../../Assets/microsoft.png";
import { Link } from "react-router-dom";



const initialValues = {
  name:'',
  email: '',
  password: '',
  company:"",
  companyName:"",
  companyCode:""
}
const passwordRegex = RegExp(
  /[A-Z]+[a-z]+@+[0-9]/
)
const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required !'),
  email: Yup.string().email('Invailid email format ?').required('Email is required !'),
  password: Yup.string().matches(passwordRegex,'One UpperCase ,LowerCase and Special ')
  .min(6, 'password must be 6 characters at min ')
  .max(16, 'password must be 16 characters at max ')
  .required('Password is required !'),
  rePassword: Yup.string().matches(passwordRegex,'One UpperCase ,LowerCase and Special ')
  .min(6, 're password must be 6 characters at min ')
  .max(16, ' re password must be 16 characters at max ')
  .required('re Password is required !'),
  company: Yup.string(),
  // companyName: Yup.string().required("please Enter Company Name"),
  // companyCode: Yup.string().required("please Enter Company Code"),

})


const Register = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  m-auto mb-5 max-w-screen-2xl 2xl:mx-auto">
        <div
          className="h-screen bg-no-repeat"
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
            <Link to="/" className="z-50">
            <button type="button" className="border px-12  py-3 mt-5 ml-20 rounded hover:bg-[#4501c3]">LOGIN</button>
            </Link>
          </div>
          <div className="custom-img2 absolute overflow-hidden"></div>
        </div>
        <div className="">
          <h1 className="text-[36px] font-bold mt-10 lg:mx-5">
            Sign up for an Account
          </h1>
          <p className="lg:mx-5">
            Please provide following details to continue
          </p>
          
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form");
                setSubmitting(false);
              }}
            >
              {() => (
                <Form>
                  <div className="mt-10">
                    <label htmlFor="name" className="block">Full Name</label>
                    <Field type="text" name="name" placeholder="Enter Your Name" className="border p-2 w-4/5 rounded" />
                    <ErrorMessage className='text-red-600 mb-4' name='name' component='p'/>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="block">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Email"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='email' component='p'/>
                  </div>
                  <Slect/>
                
                  
                  <div className="mt-6">
                    <label htmlFor="password" className="block">Pasword</label>
                    <Field
                      type="text"
                      name="password"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Password"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='password' component='p'/>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="rePassword" className="block">Confirm Pasword</label>
                    <Field
                      type="password"
                      name="rePassword"
                      className="border p-2 w-4/5 rounded"
                      placeholder="Enter Your Confirm Password"
                    />
                    <ErrorMessage className='text-red-600 mb-4' name='rePassword' component='p'/>
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

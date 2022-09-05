import React, { useState } from 'react'
import './Login.css'
import Logo from '../../Assets/logo-1.png'
import Google from '../../Assets/google.png'
import Microsoft from '../../Assets/microsoft.png'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link, useNavigate } from "react-router-dom";



const initialValues = {
  email: '',
  password: ''
}
const validationSchema = Yup.object({
  email: Yup.string().email('Invailid email format ?').required('Email is required !'),
  password: Yup.string().required('Password is required !')

})
const Login = () => {

const [open , setOpen]=useState(false)

const toggle =()=>{
  setOpen(!open)
}

  const navigate = useNavigate();

  const onSubmit = values => {
    axios
      .post(
        `http://localhost:4000/auth/login`,
        { email: values.email, password: values.password },

      )
      .then((res) => {
        console.log(res.data)
        sessionStorage.setItem('token', (res.data.token))
        if (res.data.token) {
          navigate('/home')
        } else {
          console.log("unauthorized")

        }

      })
      .catch((err) => {
        console.log(err.message)
      });
  }
  return (
    <>
      <div className="max-w-[1720px] m-auto  md:flex-none lg:flex">
        <div className="col-1 h-screen lg:w-[50%] md:px-0 lg:px-16">
          <div className="min-h-full flex  items-center justify-center md:w-full lg:min-w-[462px]  py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className=" h-12 w-auto justify-center" src={Logo} alt="Workflow" />
                <h1 className="mt-4  text-3xl tracking-tight font-semibold text-gray-900">
                  Log in to your Account
                </h1>
                <h4 className="mt-2  text-md text-gray-600">
                  Please provide following details to continue
                </h4>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="mt-8 space-y-6" method="POST">
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email" className="text-lg font-medium">
                        Email
                      </label>
                      <Field id="email" name="email" type="email" autoComplete="email"
                        className="appearance-none rounded-sm font-medium block w-full mb-2 px-3 mt-2 py-3 border
             border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
              focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your email" />
                      <ErrorMessage className='text-red-600 mb-4' name='email' component='p' />
                    </div>
                    <div className='relative'>
                      <label  className="text-lg font-medium">
                        Password
                      </label>
                      <Field id="password" name="password" type={(open === false)?'password':'text'} autoComplete="current-password"
                        className="appearance-none mt-2 mb-2 font-medium rounded-sm  block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your Password" />
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
                      <ErrorMessage className='text-red-600' name='password' id="error" component='p' />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900" >
                        Remember Me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot password? </Link>
                    </div>
                  </div>
                  <div>
                    <button type="submit"
                      className="group relative w-full flex justify-center py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-[#5800FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >  LOG IN
                    </button>
                  </div>
                  <div>
                    <p className='text-center text-xs font-medium'>Or Login Using</p>
                  </div>
                  <div className="sm:flex xs:flex-none justify-center">
                    <div className='border-2 justify-center rounded-sm text-xs font-medium px-3 py-3 mx-2 my-3 sm:my-0 flex'> <img className='w-4 mx-2' src={Google} alt="" /> Contnue with Google</div>
                    <div className='border-2 justify-center rounded-sm text-xs font-medium px-3 py-3 mx-2 flex'><img className='w-4 mx-2' src={Microsoft} alt="" />Contnue with Microsoft</div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-2  text-white md:p-0 lg:pl-32 min-h-full md:w-screen lg:w-[50%] flex flex-col  items-center justify-center bg-[#5800FF]">
          <p className='text-xl' >Don't Have An Account</p>
          <p className='text-sm mt-2'>Create a new account and find a better space for yourself</p>
          <Link to="/register">
            <button
              type="button"
              className="group relative border-white flex  mb-3 justify-center py-3 px-12 mt-5 rounded-sm border border-transparent text-md font-normal  text-white  hover:bg-indigo-700 focus:outline-none "
            >
              SIGNUP
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
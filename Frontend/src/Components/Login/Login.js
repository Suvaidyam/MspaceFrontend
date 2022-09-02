import React from 'react'
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
  const navigate = useNavigate();

  const onSubmit = values => {
    axios
      .post(
        `http://localhost:4000/auth/login`,
        { email: values.email, password: values.password },

      )
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        if (res.data.token) {
          navigate('/home')
        } else {
          console.log("unauthorized")

        }
        // sessionStorage.setItem('token', res.data.token)
        // // console.log(res.data.token)
        //   if(res.data.token){
        //     // const token = sessionStorage.getItem(token);
        //     console.log(res.data.token)
        //     navigate('/home')
        //   }else{
        //     console.log("unauthorized")

        //   }
      })
      .catch((err) => {
        console.log(err.message)
      });
  }
  return (
    <>
      <div className="max-w-[1720px] m-auto  md:flex-none lg:flex">
        <div className="col-1 min-h-full md:w-screen lg:w-[50%] md:px-0 lg:px-16">
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
                      <label htmlFor="email" className="text-lg ">
                        Email
                      </label>
                      <Field id="email" name="email" type="email" autoComplete="email"
                        className="appearance-none rounded-sm  block w-full mb-2 px-3 mt-2 py-3 border
             border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none
              focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your email" />
                      <ErrorMessage className='text-red-600 mb-4' name='email' component='p' />
                    </div>
                    <div className='relative'>
                      <label htmlFor="password" className="text-lg">
                        Password
                      </label>
                      <Field id="password" name="password" type="password" autoComplete="current-password"
                        className="appearance-none mt-2 mb-2  rounded-sm  block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Enter your Password" />
                      <p className='absolute right-2 bottom-3 eye' id='eye'>Hide</p>
                      <ErrorMessage className='text-red-600' name='password' id="error" component='p' />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900" >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password? </Link>
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
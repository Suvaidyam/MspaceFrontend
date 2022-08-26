import React from 'react'
import Logo from '../../Assets/logo.png'
const Register = () => {
  return (
    <>
    {/* <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 md:grid-cols-12 ">
  <div className='col-span-5 bg-[#5800FF]'>01</div>
  <div className='col-span-7'>09</div>
</div> */}
    <div className=" w-full flex">
    <div className="col-3  min-h-full w-[45%] items-center justify-center bg-indigo-600">
           <img className='w-[20%] mt-9 ml-24' src={Logo} alt="Logo" />
        </div>
        <div className="col-1 min-h-screen w-[55%] px-40">
        <div className="min-h-full flex  py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <imgjustify-center
        className="my-6 h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
        alt="Workflow"
      />
      <h1 className="mt-6  text-3xl tracking-tight font-bold text-gray-900">
      Sign up for an Account
      </h1>
      <h4 className="mt-2  text-md text-gray-600">
      Please provide following details to continue
      </h4>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="text-lg ">
            Email 
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required=""
            className="appearance-none rounded-sm relative block w-full px-3 mt-2 mb-6 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required=""
            className="appearance-none mt-2 mb-6 rounded-sm relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            {" "}
            Remember me{" "}
          </label>
        </div>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Forgot your password?{" "}
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 rounded-sm border border-transparent text-md font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* Heroicon name: solid/lock-closed */}
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          LOG IN
        </button>
      </div>
      <div>
        <p className='text-center text-xs font-medium'>Or Login Using</p>
      </div>
      <div className="flex justify-center">
        <div className='border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2'>Contnue with Google</div>
        <div className='border-2 rounded-sm text-xs font-medium px-4 py-3 mx-2'>Contnue with Microsoft</div>
      </div>
    </form>
  </div>
</div>
        </div>
        
     </div>


    </>
  )
}

export default Register
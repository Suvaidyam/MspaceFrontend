import React from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomePage from '../HomeUI/HomePage'
import MyBooking from '../MyBooking/MyBooking';
import Profile from '../Profile/Profile';
import TermsCondition from '../TermsCondition/TermsCondition'
import Error from '../404/Error';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Router = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/termsCondition" element={<TermsCondition />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter></>
  )
}

export default Router
import React from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomePage from '../HomeUI/HomePage'
import CreateSpace from '../CreateSpace/CreateSpace';
import MyBooking from '../MyBooking/MyBooking';
import Profile from '../Profile/Profile';
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/space" element={<CreateSpace />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter></>
  )
}

export default Router
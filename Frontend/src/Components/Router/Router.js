import React from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomePage from '../HomeUI/HomePage'
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
        </Routes>
      </BrowserRouter></>
  )
}

export default Router
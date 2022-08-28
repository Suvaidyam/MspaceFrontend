import React from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import Navbar from '../Navbar/Navbar'
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
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </BrowserRouter></>
  )
}

export default Router
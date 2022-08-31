import React from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomePage from '../HomeUI/HomePage'
import CreateSpace from '../CreateSpace/CreateSpace';
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
        </Routes>
      </BrowserRouter></>
  )
}

export default Router
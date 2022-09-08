import React, { Component } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import HomePage from "../HomeUI/HomePage";
import Profile from "../Profile/Profile";
import TermsCondition from "../TermsCondition/TermsCondition";
import Error from "../404/Error";
import MyBooking from "../MyBookingUI/Mybooking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "../Protected/Protected";
import Viewall from "../MyBookingUI/Viewall";
import All from "../MyBookingUI/All/All";
import Today from "../MyBookingUI/Today/Today";
import Upcomming from "../MyBookingUI/Upcoming/Upcomming";
import Previous from "../MyBookingUI/Previous/Previous";
import Cancelled from "../MyBookingUI/Cancelled/Cancelled";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/termsCondition" element={<TermsCondition />} />
          <Route path="/home" element={<Protected Component={HomePage} />} />
          <Route path="/profile" element={<Protected Component={Profile} />} />
          <Route path="*" element={<Error />} />
          <Route
            path="/MyBooking"
            element={<Protected Component={MyBooking} />}
          />
          <Route path="/viewall/" element={<Protected Component={Viewall} />}>
            <Route path="all" element={<Protected Component={All} />} />
            <Route path="today" element={<Protected Component={Today} />} />
            <Route path="upcoming" element={<Protected Component={Upcomming} />} />
            <Route path="previous" element={<Protected Component={Previous} />} />
            <Route path="cancelled" element={<Protected Component={Cancelled} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

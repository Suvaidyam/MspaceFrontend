import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
      <div className='flex justify-between px-16  border-b-2 py-2 '>

        <div className=''><NavLink to="all">All</NavLink></div>
        <div><NavLink to="today"> Today's</NavLink></div>
        <div><NavLink to="upcoming">Upcoming</NavLink></div>
        <div><NavLink to="previous">Previous</NavLink></div>
        <div><NavLink to="cancelled">Cancelled</NavLink></div>

      </div>
    </>
  )
}

export default Nav
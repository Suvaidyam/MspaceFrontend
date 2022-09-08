import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='flex justify-between px-16  border-b-2 py-2 '>
      
        <div className=''><Link to="all">All</Link></div>
        <div><Link to="today"> Today's</Link></div>
        <div><Link to="upcoming">Upcoming</Link></div>
        <div><Link to="previous">Previous</Link></div>
        <div><Link to="cancelled">Cancelled</Link></div>

    </div>
    </>
  )
}

export default Nav
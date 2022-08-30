import React from 'react'

const ErrMessage = (props) => {
  return (
    <div className='absolute bg-red-600 text-white bottom-[-35%] rounded-none'>{props.error}</div>
  )
}

export default ErrMessage
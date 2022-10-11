import React from 'react'
import Cards from '../AllCards/Cards'

const Today = () => {
  return (
    <>
      <Cards cancleMeeting="Cancel Meeting" invitePeople="Invite People" btn={'Today'} btncolor={'mx-2 bg-green-200 px-4 rounded-md border-2 text-green-500 border-green-500'} />

    </>
  )
}

export default Today
import React from 'react'
import Cards from '../AllCards/Cards'

const Today = () => {
  return (
    <>
    <div className="mt-12" >
    <Cards btn={'Today'} btncolor={'mx-2 bg-green-200 px-4 rounded-md border-2 text-green-500 border-green-500'}/>
    </div>
    <div className="my-6" >
    <Cards btn={'Today'} btncolor={'mx-2 bg-green-200 px-4 rounded-md border-2 text-green-500 border-green-500'}/>
    </div>
    <div className="mb-4">
    <Cards btn={'Today'} btncolor={'mx-2 bg-green-200 px-4 rounded-md border-2 text-green-500 border-green-500'}/>
    </div>
      </>
  )
}

export default Today
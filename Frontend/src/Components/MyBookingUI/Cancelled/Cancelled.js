import React from 'react'
import Cards from '../AllCards/Cards'

const Cancelled = () => {
  return (
    <>
    <div className="mt-12">
    <Cards btn={'Cancelled'} btncolor={'mx-2 bg-red-200 px-4 rounded-md border-2 border-red-500 text-red-500'}/>
    </div>
    <div className="my-6">
    <Cards btn={'Cancelled'} btncolor={'mx-2 bg-red-200 px-4 rounded-md border-2 border-red-500 text-red-500'}/>
    </div>
    <div className="mb-4">
    <Cards btn={'Cancelled'} btncolor={'mx-2 bg-red-200 px-4 rounded-md border-2 border-red-500 text-red-500'}/>
    </div>
      </>
  )
}

export default Cancelled
import React from 'react'
import Cards from '../AllCards/Cards'

const Previous = () => {
  return (
    <>
    <div className="mt-12">
    <Cards btn={'Previous'} btncolor={'mx-2 bg-gray-200 px-4 rounded-md border-2 border-gray-500 text-gray-500'}/>
    </div>
    <div className="my-6">
    <Cards btn={'Previous'} btncolor={'mx-2 bg-gray-200 px-4 rounded-md border-2 border-gray-500 text-gray-500'}/>
    </div>
    <div className="mb-4">
    <Cards btn={'Previous'} btncolor={'mx-2 bg-gray-200 px-4 rounded-md border-2 border-gray-500 text-gray-500'}/>
    </div>
      </>
  )
}

export default Previous
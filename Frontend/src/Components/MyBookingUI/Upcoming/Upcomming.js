import React from 'react'
import Cards from '../AllCards/Cards'

const Upcomming = () => {
  return (
    <>
    <div className="mt-12">
    <Cards btn={'Upcoming'} btncolor={'mx-2 bg-yellow-200 px-4 rounded-md border-2 border-[#FFA500] text-[#FFA500]'}/>
    </div>
    <div className="my-6">
    <Cards btn={'Upcoming'} btncolor={'mx-2 bg-yellow-200 px-4 rounded-md border-2 border-[#FFA500] text-[#FFA500]'}/>
    </div>
    <div className="mb-4">
    <Cards btn={'Upcoming'} btncolor={'mx-2 bg-yellow-200 px-4 rounded-md border-2 border-[#FFA500] text-[#FFA500]'}/>
    </div>
      </>
  )
}

export default Upcomming
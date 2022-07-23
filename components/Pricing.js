import React from 'react'
// import Navbar from './Navbar'
import PriceCard from './PriceCard'

const Pricing = () => {
  return (

<div>
	{/* <Navbar/> */}
	<div className="flex flex-col lg:flex-row w-screen mt-12 items-center justify-center  gap-y-7  md:gap-x-7 flex-wrap p-10 ">
	<PriceCard/>
	<PriceCard/>
	<PriceCard/>
	<PriceCard/>
	</div>
	</div>
  )
}

export default Pricing
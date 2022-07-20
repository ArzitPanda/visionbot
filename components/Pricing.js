import React from 'react'
import Navbar2 from './Navbar2'
import PriceCard from './PriceCard'

const Pricing = () => {
  return (

<div>
	<Navbar2/>
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
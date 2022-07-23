import React from 'react'
// <<<<<<< HEAD
// import Navbar from './Navbar'
// =======
import Navbar2 from './Navbar2'
// >>>>>>> parent of 251d048 (add half carrear component)
import PriceCard from './PriceCard'

const Pricing = () => {
  return (

<div>
{/* <<<<<<< HEAD */}
	{/* <Navbar/> */}
{/* ======= */}
	<Navbar2/>
{/* >>>>>>> parent of 251d048 (add half carrear component) */}
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
import React from 'react'
import Teststyle from './Teststyle'

const CardCase = ({imgUrl,problem,solution,heading}) => {
  return (
    <div className=" h-full w-9/12 overflow-y-hidden md:w-4/5 md:h-full bg-slate-800 rounded-lg mx-25 flex items-center justify-start md:justify-between flex-col md:flex-row sm:gap-y-2 md:gap-x-2 ">
    <img src={imgUrl} alt="img.png" className="w-4/6 md:w-4/12 h-2/6 md:h-full object-cover sm:mt-10 "/>
<div className="bg-slate-800 rounded-lg w-11/12 md:w-8/12  sm:h-screen md:h-5/6 flex items-center justify-center p-10
 ">
    <div className="flex items-center justify-between flex-col gap-y-10 p-5"> 
    <h2 className="text-gray-300 bg-slate-900 px-10 py-1 text-lg md:text-xl  m:mt-10 font-bold font-poppins text-center md:text-left">{heading}</h2>
       <div classname="flex items-center flex-col md:flex-row p-15">
        <h2 className="text-gray-300 w-full md:w-5/12 bg-slate-900 px-1 py-1 text-md md:text-lg gont-bold font-poppins text-center rounded-xl">problem statement</h2>
        <p className="text-blue-50 font-thin text-xs">
          {problem}  
        </p>
       </div>


       <div classname="flex items-center flex-col md:flex-row p-1">
        <h2 className="text-gray-300 bg-slate-900 px-10 py-1 my-1 text-md md:text-lg gont-bold font-poppins text-center rounded-xl md:w-5/12">solution</h2>
        <p className="text-blue-50 font-thin text-xs text-center md:text-left">
          {solution}  
        </p>
       </div>
    </div>
</div>



</div>
  )
}

export default CardCase
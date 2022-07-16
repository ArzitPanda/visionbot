import React from 'react'
import Teststyle from './Teststyle'

const CardCase = ({imgUrl,problem,solution,heading}) => {
  return (
    <div className="min-h-full w-9/12 overflow-y-hidden lg:w-4/5 lg:h-full bg-slate-900 rounded-lg mx-25 flex items-center justify-start lg:justify-between flex-col lg:flex-row sm:gap-y-2 lg:gap-x-2 ">
       <div className="w-full lg:h-full lg:w-3/5 flex flex-col items-center justify-evenly">
       <h2 className="text-gray-300 bg-slate-900 px-10 py-5 text-sm lg:text-xl   font-bold font-poppins text-center lg:text-left">{heading}</h2>
    <img src={imgUrl} alt="img.png" className="w-11/12 mt-1 lg:w-11/12 h-5/6 lg:h-full object-cover sm:my-2 rounded-2xl scale-75"/>
       </div>
<div className="bg-slate-800 rounded-lg w-11/12 lg:w-8/12  h-10/12 sm:mt-15 sm:h-screen lg:h-5/6 flex items-center justify-center p-2 lg:p-7
 ">
    <div className="flex items-center justify-around flex-col gap-y-6 p-1"> 
   
       <div className="flex items-center flex-col  p-15">
        <h2 className="text-gray-300 w-full lg:w-5/12 bg-slate-900 px-1 py-1 text-md lg:text-md font-bold font-poppins text-center rounded-xl">problem statement</h2>
        <p className="text-blue-50 font-thin text-xs">
          {problem}  
        </p>
       </div>


       <div className="flex items-center flex-col  p-1">
        <h2 className="text-gray-300 bg-slate-900 px-10 py-1 my-1 text-md lg:text-md gont-bold font-poppins text-center rounded-xl lg:w-5/12">solution</h2>
        <p className="text-blue-50 font-thin text-xs text-center lg:text-left">
          {solution}  
        </p>
       </div>
    </div>
</div>



</div>
  )
}

export default CardCase
import React from 'react'

const Heading = ({c,to,form}) => {
  return (
    <div className="w-full text-slate-200 shadow-xl flex items-center flex-row justify-between py-1 px-10   h-24 lg:h-36 border-b-2 border-slate-300  ">

        <h2 className="flex flex-1 text-center lg:pl-3 lg:text-left  p-2 text-xs md:text-xl lg:text-4xl">{c.toUpperCase()}</h2>
        <div className="flex flex-row items-center text-xs md:text-xl ">
           <span className=" px-2 bg-blue-700 rounded-full mr-2 "> {to+" "}</span><div className="text-xs md:text-xl">/{form}</div>
        </div>
    </div>
  )
}

export default Heading
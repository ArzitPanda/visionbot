import React from 'react'

const Teststyle = ({name,test}) => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col text-center md:items-start md:text-left tmd:pl-10 my-6 mx-10">
        <h3 className="text-gray-100 font-bold text-xl text-left md:text-3xl p-2">{name}</h3>
        <p className="text-yellow-100 font-thin mt-4">{test}</p>
    </div>
  )
}

export default Teststyle
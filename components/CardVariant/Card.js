import Link from 'next/link';
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai' 



const Card = (props) => {

const{photoURL,name,list,source}=props;


  return (
    <section className=" md:py-12 md:flex md:justify-center">
    <div className={`bg-gray-800 md:mx-8 md:flex  md:${props.rev===true?"flex-row-reverse":"flex-row"}  md:max-w-5xl  md:min-w-5xl md:shadow-lg md:rounded-md`}>
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
            <img className="h-64 w-96 bg-cover md:rounded-md md:h-full" src={photoURL}/>
       </div>

        <div className="flex max-w-xl sm:items-center sm:justify-center sm:text-center md:text-left flex-col md:items-start px-6 py-12 md:max-w-5xl md:w-[500px]">
            <h2 className="text-2xl font-bold text-white md:text-3xl p-1">{name}<span className="text-blue-400">Idea</span></h2>
            <div className="mt-4 text-gray-400 flex flex-col items-start">
                {list.map((data,i)=>{
                  return(
                    <div key={i} className='flex flex-row items-start justify-between px-1 py-1'>
                      <AiOutlineArrowRight color='white' size={20}/>
                      {data}
                    </div>
                  )
                })}
            </div>
            <Link href={`/${source}`}>
            <div className="mt-8 py-2 cursor-pointer">
                <div className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</div>
            </div>
            </Link>
        </div>
    </div>
</section> 
  )
}

export default Card
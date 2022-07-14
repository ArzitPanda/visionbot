import React from 'react'
import {motion} from 'framer-motion'

const Jumbo = () => {
  return (
  
<motion.div className=" relative overflow-hidden h-2/3 drop-shadow-sm shadow-inner "
initial={{ x: "-2500px" }}
animate={{ x: "0px" }}
transition={{type:"spring",stiffness:50,duration:2,delay:"3s"}} 


>
    
    <div className="bg-gradient-to-b from-myColor  via-gray-900 to-black w-full flex relative z-20 items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16 items-center justify-center">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 items-center justify-center">
                <span className="w-20 h-2 bg-white mb-12">
                </span>
               
                <p className=" text-white text-xl md:text-3xl">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-violet-800 border-2 border-transparent text-white text-md mr-4 hover:bg-violet-400">
                        Login
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 bg-violet-200 text-violet-800 dark:text-white hover:bg-violet-400 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div className="hidden md:block sm:w-1/3 lg:w-3/5 relative">
                <img src="Rd.svg" className="max-w-xs  md:max-w-lg m-auto"/>
            </div>
        </div>
    </div>
</motion.div>





  )
}

export default Jumbo
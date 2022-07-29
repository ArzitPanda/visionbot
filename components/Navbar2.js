import React,{useContext, useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Store } from '../pages/_app';
import { useRouter } from 'next/router';
import {BsFillArrowDownCircleFill,BsFillArrowUpCircleFill} from 'react-icons/bs'


const Navbar2 = ({data3}) => {
  

 
const {asPath} = useRouter();
const [value,setValue] =useState(false)
  const data=useContext(Store);
    console.log(data);
  const[nav,setNav]= useState(1);

  const ChangeNav=()=>{
    if(asPath==="/Solutions")
    {
      setNav(2);
      console.log("set nav 2")
      return;
    }
    if(asPath==="/")
    {
      setNav(1);
      return;
    }

    if(asPath==="/Casestudies")
    {
      setNav(3);
      return;
    }
    if(asPath==="/Price")
    {
      setNav(4);
      return;
    }
   
 
  }

  const Navlist="p-1 px-2 flex items-center justify-center cursor-pointer text-center rounded-lg transition-colors hover:bg-violet-800 active:rounded-sm"







  
  return (
    <motion.div className='w-full  flex flex-col md:flex-row items-center justify-between px-5 py-3 gap-y-3 bgimg4 z-30 filter:backdrop-blur-md ' 
    
    initial={{ y: "-150px" }}
    animate={{ y: "0px" }}
    transition={{type:"spring",stiffness:120,duration:2}} 
    >
        <div className='h-full flex items-center justify-center flex-col '>
        <img src="logo.png" alt="visionBot.png" className="object-contain w-20 lg:w-28 "/>
        
        </div>
        <motion.ul  
        
          initial={{opacity:".5"}}
          animate={{opacity:1}}
          
        
        
        className='w-full flex md:w-3/5 text-xs items-center justify-between text-[#EEEADE] px-1 md:px-3 lg:pl-24 py-2 lg:pr-6 rounded-3xl glowing  md:text-lg bg-gray-800'>
            <Link href="/">
            <li className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===1?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800 active:rounded-sm`} 
            
            
            
            onClick={()=>ChangeNav()}>Home</li>
            </Link>
         <Link href="/Solutions">
         <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===2?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Solution</li>
         </Link>
         <Link href="/Casestudies">
            <li  className={` px-2 py-2 hidden md:flex items-center justify-center cursor-pointer text-center ${nav===3?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}><h5 className='leading-tight text-xs md:text-lg'>Case Studies</h5></li>
             </Link>
             <Link href="/Price">
            <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===4?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Pricing</li>
             </Link>
            <li className='buttonAnimate  '><h6>Login</h6></li>
            <div className="flex md:hidden items-center justify-center" onClick={()=>{setValue(!value)}}>
            {value === false && (<BsFillArrowDownCircleFill size={20} color="white" />)}
            {value === true && (<BsFillArrowUpCircleFill size={20} color="white"/>)}
            </div>


        </motion.ul>
        {value === true && (<ul className="bg-slate-800 w-full flex flex-col gap-y-3 my-2 items-center justify-center md:hidden rounded-2xl py-2">

              <Link href="/"><li className="w-10/12 text-center text-white font-semibold shadow-xl px-3 py-1 hover:bg-purple-800 rounded-md">Login</li></Link>
              <Link href="/Casestudies"><li className="w-10/12 text-center text-white font-semibold shadow-xl px-3 py-1 hover:bg-purple-800 rounded-md">CaseStudies</li></Link>
              <Link href="/AboutUs"><li className="w-10/12 text-center text-white font-semibold shadow-xl px-3 py-1 hover:bg-purple-800 rounded-md">About us</li></Link>
              <Link href="/"><li className="w-10/12 text-center text-white font-semibold shadow-xl px-3 py-1 hover:bg-purple-800 rounded-md">Demo</li></Link>

        </ul>)}




    </motion.div>
  )
}

export default Navbar2
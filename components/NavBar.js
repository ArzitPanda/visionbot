import React,{useContext, useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Store } from '../pages/_app';
import { useRouter } from 'next/router';


const NavBar = ({data3}) => {
  
  
  
  const[navStyle,setNavStyle]=useState()
  const data=useContext(Store);
    console.log(data);
const[nav,setNav]=useState("");
const {asPath} =useRouter();
console.log("from nav"+useRouter().asPath);
  

useEffect((

 

)=>{ ChangeNav();},[nav])



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
   
 
  }

  const Navlist="p-1 px-2 flex items-center justify-center cursor-pointer text-center rounded-lg transition-colors hover:bg-violet-800 active:rounded-sm"







  
  return (
    <motion.div className='w-full  md:w-11/12 flex flex-col md:flex-row items-center justify-between px-5 py-2 gap-y-3  bg-blue-100 md:rounded-full md:mt-2 mx-auto border-slate-300 border-2 shadow-sm shadow-blue-800  z-30' 
    
    initial={{ y: "-150px" }}
    animate={{ y: "0px" }}
    transition={{type:"spring",stiffness:120,duration:2}} 
    >
        <div className='h-full flex items-center justify-center flex-col '>
        <img src="logo.png" alt="visionBot.png" className="object-contain w-20 lg:w-24 "/>
        
        </div>
        <motion.ul  
        
          initial={{opacity:".5"}}
          animate={{opacity:1}}
          
        
        
        className='w-full flex md:w-3/5 items-center justify-between text-[#EEEADE] px-3 lg:pl-24 py-2 lg:pr-6 rounded-3xl glowing  md:text-lg bg-gray-800'>
            <Link href="/">
            <li className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===1?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800 active:rounded-sm`} 
            
            
            
            onClick={()=>ChangeNav()}>Home</li>
            </Link>
         <Link href="/Solutions">
         <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===2?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Solution</li>
         </Link>
         <Link href="/Casestudies">
            <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===3?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}><h5 className='leading-tight'>Case Studies</h5></li>
            </Link>
            <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===4?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Pricing</li>
            <li className='buttonAnimate  '><h6>Login</h6></li>



        </motion.ul>
        



    </motion.div>
  )
}

export default NavBar
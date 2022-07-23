import React,{useContext, useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import { Store } from '../pages/_app';
import { useRouter } from 'next/router';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const NavBar = ({data3}) => {
  
  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const [isMouse, toggleMouse] = React.useState(false);
  const[isToggle,setIsToggle] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
  
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
    if(asPath==="/Price")
    {
      setNav(4);
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
          
        
        
        className='w-screen sm:mx-3  flex md:w-3/5 items-center justify-between text-[#EEEADE] px-3 lg:pl-24 py-2 lg:pr-6 rounded-3xl glowing  md:text-lg bg-gray-800'>
            <Link href="/">
            <li className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===1?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800 active:rounded-sm`} 
            
            
            
            onClick={()=>ChangeNav()}>Home</li>
            </Link>
         <Link href="/Solutions">
         <li  className={`p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===2?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Solution</li>
         </Link>
         <Link href="/Price">
            <li  className={` p-1 px-2 flex items-center justify-center cursor-pointer text-center ${nav===4?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}>Pricing</li>
            </Link>
         <Link href="/Casestudies">
            <li  className={`hidden lg:flex py-2 md:px-2 overflow-y-hidden items-center justify-center cursor-pointer text-center ${nav===3?`bg-violet-800`:`bg-transparent`}  rounded-lg transition-colors hover:bg-violet-200 hover:text-violet-800  active:rounded-sm`} 
            
            onClick={()=>ChangeNav()}><h5 className='leading-tight py-1 tracking-tight'>Case Studies</h5></li>
            </Link>

            <motion.div className="block md:hidden"   whileTap={{ rotateZ:180 }}  transition={{type:"spring",stiffness:120,duration:2}}  onClick={()=>{isToggle==false?setIsToggle(true):setIsToggle(false)}} >
                <BsFillArrowDownCircleFill  color="white" size={25}/>


            </motion.div>


            <li className='buttonAnimate  '><h6>Login</h6></li>



        </motion.ul>
        <motion.div className= {`flex flex-col justify-center items-center md:hidden w-screen  gap-y-3 bg-blue-300 transition-transform`} initial={{x:"-100px",display:isToggle ?"flex":"none"}} animate={{ x:"0px" ,display:isToggle ?"flex":"none"}}  transition={{type:"spring",stiffness:120,duration:2}} >
        <Link href="/Casestudies"><div className="w-11/12  mt-2 py-1  text-slate-700 rounded-lg transition-colors text-center font-semibold text-sm capitalize hover:bg-slate-900 hover:text-slate-200">Case Studies</div></Link>
       <Link href="https://app.visionbot.io/signup.aspx"><div className="w-11/12  py-1  text-slate-700 rounded-lg transition-colors text-center font-semibold text-sm capitalize hover:bg-slate-900 hover:text-slate-200">Login </div></Link>
       <Link href="/Privacy"><div className="w-11/12  py-1  text-slate-700 rounded-lg transition-colors text-center font-semibold text-sm capitalize hover:bg-slate-900 hover:text-slate-200"> Privacy</div></Link>
       <Link href="/ContactUs"><div className="w-11/12  py-1  text-slate-700 rounded-lg transition-colors text-center font-semibold text-sm capitalize hover:bg-slate-900 hover:text-slate-200">Contact us</div></Link>
       <Link  href="/Awards"><div className="w-11/12 mb-2 py-1  text-slate-700 rounded-lg transition-colors text-center font-semibold text-sm capitalize hover:bg-slate-900 hover:text-slate-200">Awards</div></Link>
        </motion.div>



    </motion.div>
  )
}

export default NavBar
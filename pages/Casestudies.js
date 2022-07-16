import React, { useState } from 'react'
import CardCase from '../components/CardCase'
import NavBar from '../components/NavBar'
import Teststyle from '../components/Teststyle'
import { Case } from '../Data/CaseStudy'
import { useRouter } from 'next/router';




const Casestudies = () => {

const [datap,setDataP]=useState(Case[0]);
const {asPath}=useRouter();

console.log(asPath);

  return (
    <div className="bgCaseStudy w-screen h-screen ">
            <NavBar data3={asPath}/>
            <div className="w-full h-5/6 flex items-center overflow-y-hidden justify-between md:justify-start md:mt-10 flex-row md:flex-col sm:gap-x-3 md:gap-y-14">
           <CardCase heading={datap.heading} imgUrl={datap.imgUrl}  problem={datap.problem} solution={datap.solution}/>
            <div className=" h-full w-3/12 md:mb-10  md:w-11/12 md:h-1/5 flex items-center flex-col md:flex-row justify-around md:bg-slate-500 rounded-t-lg">
                
                {Case.map((ele,o)=>{return(<div key={o} className="w-10/12 md:w-1/12 h-[40px] md:h-full cursor-pointer  hover:border-2" onClick={()=>{

                    setDataP(ele);
                    console.log(ele);
                }}>
                    <img src={ele.imgUrl} alt="eleme" className='w-full h-full object-contain'/> 
                    <span className="tooltip-text bg-blue-200 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50&quot;">{ele.heading}</span>
                </div>)})}
            </div>
            </div>

    </div> 
  )
}

export default Casestudies

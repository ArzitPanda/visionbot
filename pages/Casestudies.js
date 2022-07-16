import React, { useState } from 'react'
import CardCase from '../components/CardCase'
import NavBar from '../components/NavBar'
import Teststyle from '../components/Teststyle'
import { Case } from '../Data/CaseStudy'
import { useRouter } from 'next/router';
import FooterBot from '../components/FooterBot'
import Heading from '../components/Heading'




const Casestudies = () => {

const [datap,setDataP]=useState(Case[0]);
const {asPath}=useRouter();

console.log(asPath);

  return (
    <div className="bgCaseStudy w-screen">
            <NavBar data3={asPath}/>
            <Heading c={'CaseStudies'} form='casestudies' to={'home'}/>
          <div className="flex flex-col items-center gap-y-11  w-11/12 md:w-8/12  mx-auto mt-5 mb-10">
            {Case.map((ele,key)=>{return(<div key={key} className="flex flex-col md:flex-row bg-slate-800 md:bg-slate-600 rounded-2xl shadow-2xl shadow-slate-900 items-center">
                      <img src={ele.imgUrl} alt="img" className="w-11/12 md:w-5/12 md:h-11/12 h-5/12  object-cover rounded-xl ring-1 ring-slate-500" />
                      <div className="flex flex-col items-center justify-around px-5 py-3 text-slate-600 bg-slate-800 w-11/12 md:w-7/12">
                        <h2 className='text-lg md:text-xl bg w-full rounded-3xl shadow-md text-center text-slate-50 font-bold bg-slate-500 my-3'>{ele.heading}</h2>
                        <div className='flex flex-col gap-y-2 items-center justify-around'>
                          <h5 className='text-lg md:text-xl uppercase font-semibold text-slate-50 bg-slate-900  w-full'>Problem statement</h5>
                          <p className="text-sm md:text-lg text-zinc-100">{ele.problem}</p>
                        </div>
                        <div className='flex flex-col gap-y-2 items-center justify-around pb-6 md:pb-3'>
                          <h5 className='text-lg md:text-xl uppercase font-semibold text-slate-50 bg-slate-900 w-full'>Solution</h5>
                          <p className="text-sm md:text-lg text-zinc-100">{ele.solution}</p>
                        </div>
                      </div>
                    
              </div>)})}



          </div>
          <FooterBot/>
    </div> 
  )
}

export default Casestudies

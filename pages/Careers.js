import React from 'react'
import FooterBot from '../components/FooterBot';
import Heading from '../components/Heading';
import Navbar2 from '../components/Navbar2';
import {BsArrowRightCircleFill} from 'react-icons/bs'
const  Careers = () => {
  return (
    <div className="bg-slate-900"> 
       <Navbar2/>
       <Heading c={"Careeers"} form="home" to={"Careers"}/>
       <div className="w-full md:w-9/12 my-4 bg-slate-800 text-yellow-100 text-lg text-center md:text-left flex flex-col items-center p-5 mx-auto rounded-xl gap-y-8 md:gap-y-3 shadow-sm">
       We have continued requirements for talented professionals to be a part of our current and future projects.
       <br/>
       <span className="text-white text-base md:text-lg font-semibold">We would be glad to discuss with individuals with the following preferred skill sets:</span>
       </div>
        <ul className="w-full md:w-10/12 my-2 bg-slate-700 text-yellow-100 text-lg text-center md:text-left grid  grid-cols-1 md:grid-cols-3 p-5 mx-auto rounded-xl gap-y-3 gap-x-8 md:gap-x-3 shadow-lg">
       <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Machine Learning - R / Python</li>

       <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/>   Predictive Analytics</li>

       <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Hadoop and Big Data Platform</li>

       <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Hadoop Programmers - Java</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Spark developers</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> SAS Admin / developer</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Computer Vision</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Financial Analytics</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Visualization</li>

        <li className="flex items-center gap-x-2"><BsArrowRightCircleFill color="white" size={15}/> Containerization and deployment</li>
        </ul>
        <h3 className="w-full md:w-11/12 mx-auto text-center md:text-left text-white font-bold text-lg my-3 bg-slate-700 shadow-sm rounded-lg p-5">Please Upload your resume</h3>
<div className="w-full md:w-11/12 mx-auto bg-slate-800 grid md:grid-cols-2 grid-cols-1  justify-center items-center gap-y-7 gap-x-7 rounded-lg p-5">

<div className="flex flex-col items-start gap-y-1  p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900">Name*</label>
<input type="text" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your name"/>
</div>
<div className="flex flex-col items-start gap-y-1 p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900" >Email**</label>
<input type="text" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your email"/>
</div>
<div className="flex flex-col items-start gap-y-1 p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900">Phone</label>
<input type="number" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your phone"/>
</div>
<div className="flex flex-col items-start gap-y-1 p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900">Qualification</label>
<input type="text" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your Qualification"/>
</div>
<div className="flex flex-col items-start gap-y-1 p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900">Experience</label>
<input type="text" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your experience"/>
</div>
<div className="flex flex-col items-start gap-y- p-3 shadow-2xl bg-slate-800 rounded-lg">
<label className="text-white font-semibold px-4 py-2  rounded-lg bg-slate-900">Skill sets</label>
<input type="text" className="flex w-full flex- h-12 mt-2  bg-slate-900 rounded-lg px-1 py-2 file:rounded-full text-yellow-50" placeholder="enter your skills"/>
</div>

<div className="flex flex-col items-start gap-y-5 p-3 mb-5 shadow-2xl bg-slate-800 rounded-lg ">
<label className="text-white font-semibold px-4 py-2 rounded-lg bg-slate-900 ">Upload Resume*</label>
<input type="file" className="flex w-full flex- h-16  bg-slate-900 rounded-lg px-2 py-4 file:rounded-full text-yellow-50" placeholder="upload your resume"/>
</div>

</div>
<div className="md:w-11/12 w-full mx-auto  flex items-center justify-center py-5">
  <button className="bg-violet-700 px-5 py-2 font-semibold rounded-lg text-white border-b-1 border-slate-400 ">Submit</button>
</div>
<FooterBot/>

    
    </div>
  )
}

export default Careers 
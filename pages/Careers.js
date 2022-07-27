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
        <h3 className="w-5/6 mx-auto text-center md:text-left text-white font-bold text-lg my-3 bg-slate-700 shadow-sm rounded-lg p-5">Please Upload your resume</h3>

<FooterBot/>

    
    </div>
  )
}

export default Careers 
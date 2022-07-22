import React from 'react'
import Heading from '../components/Heading'
import FooterBot from '../components/FooterBot'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import NavBar from '../components/NavBar';
import {Cert} from "../Data/Cert"
const Awards = () => {





  return (
    <div className="bg-slate-900 w-screen">
    <NavBar/>
       

    <Heading c={'awards'} to="awards" form={'home'}/>
        <div className='px-1 md:px-10 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 items-center gap-x-9'>

        {Cert.map((ele,key)=>{return(<div className="text-yellow-50  h-96 md:h-80  text-base md:text-lg my-7 bg-slate-800 rounded-xl lg:p-4 flex flex-col items-center justify-center">

                <img src={ele.imgLink}  className="self-center flex-shrink-0 rounded-lg w-3/5 h-2/5 md:h-3/5 border object-contain rounded-sm md:justify-self-start shadow-xl "/>
                <div className="flex flex-col h-36 p-2">
			<h4 className="text-lg font-semibold text-center md:text-left ">{ele.head}</h4>
			<p className="text-gray-400 text-center md:text-left">{ele.desc}</p>
		</div>

        </div>)})}
    


        </div>


        <FooterBot/>
    </div>
  )
}

export default Awards
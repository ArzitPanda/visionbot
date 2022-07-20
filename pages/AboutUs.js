import React from 'react'
import { profiles } from '../Data/Profile'
import Profile from '../components/Profile'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'
import FooterBot from '../components/FooterBot'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const AboutUs = () => {





  return (
    <div className="bg-slate-900">
        <NavBar/>
           

        <Heading c={'about us'} to="about us" form={'home'}/>
        <div className="flex flex-col items-center justify-center gap-y-7 w-11/12 mx-auto text-yellow-50  text-lg my-7 bg-slate-800 rounded-xl p-4">
        <p>
        We are a team of developers and programmers with backgrounds in data science, machine learning and cloud services. Visionbot is an evolution based on Neural Networks and Deep learning and forms a culmination of the projects and development work we have done in the field of computer vision applications over the last few years.


        </p>
        <p>
        At Visionbot we are in a continuous mode of developing new solutions around ML and AI. Visionbot platform leverages the scalability and availability of Cloud services to offer computer vision solutions. Our motto is to ensure excellent user experience on this platform. Do give us a shout whenever you need to reach us.
        </p>


            </div>
            <div className="flex items-center justify-center w-11/12 mx-auto md:justify-start">
        <span className="bg-slate-700 text-yellow-50 text-center text-3xl py-2 px-5 rounded-lg ">Founders</span>
        </div>
         {profiles.map((ele,idx)=>{return(<div className="my-6" key={idx}>
         <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInLeftBig' >
         <Profile  name={ele.name} about={ele.about} imgsrc={ele.imgsrc}  />
          </AnimationOnScroll>
          
        </div>)})}
        <FooterBot/>
    </div>
  )
}

export default AboutUs
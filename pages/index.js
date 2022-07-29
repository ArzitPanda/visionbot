import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Store, useStore} from './_app';
import { useContext } from 'react';
import NavBar from '../components/NavBar';
import BigCard from '../components/BigCard';
import HowItWorks from '../components/HowItWorks';
import ReviewCard from '../components/ReviewCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselMod from '../components/CarouselMod';
import FooterBot from '../components/FooterBot';
import Jumbo from '../components/Jumbo';
import CardOne from '../components/CardVariant/CardOne';
import { Statistic } from '../components/Statistics';
import VideoComp from '../components/VideoComp';
import SlideShow from '../components/SlideShow';
import Navbar2 from '../components/Navbar2';
import Implementation from '../components/Implementation';
import Heading from '../components/Heading';
import Describe from '../components/Describe';
import NewFooter from '../components/NewFooter';
import { useRouter } from 'next/router';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from 'framer-motion';
export default function Home() {
    const data=useContext(Store);
    console.log(data);
const {nav,setNav} =data;
const {asPath}=useRouter();
  return (


    <div className={`w-screen  bg-slate-900 relative `} >
       <Head>
       <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
</Head>

    <Navbar2 data3={asPath}/>

    <div className="w-screen h-7/12 relative ">
      <div className="z-20 top-0 absolute bg-black h-full w-full text-white bg-opacity-70 flex flex-col items-center justify-center">

      <div className="flex-1 flex flex-col relative z-20 h-11/12 items-center justify-center" >
                <span className="w-20 h-2 bg-white mb-12">
                </span>
                <motion.div initial={{x:"-100px",opacity:0}}
                
                animate={{ x: "0px",opacity:1 }}
    transition={{type:"spring",stiffness:120,duration:2}} 
                className="font-bebas-neue uppercase text-3xl md:text-6xl font-black flex flex-col leading-none text-white ">
                objective data{' '}
                    <span className="text-2xl md:text-5xl mt-1 py-3 text-blue-700">
                       subjective Visuals
                    </span>
                </motion.div>
                <p className="text-sm sm:text-base text-white w-1/2 text-center hidden md:block">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-violet-800 border-2 border-transparent text-white text-md mr-4 hover:bg-violet-400">
                        Try Demo
                    </a>
                   
                </div>
                <span className="w-20 h-2 bg-white mt-12">
                </span>
            </div>
        <div className="hidden w-full bg-[#0E2A47] bg-opacity-70 h-36 lg:block  ">

      


        </div>


      </div>
      <div className="w-full flex justify-center">
     
      </div>
      <video className="h-96 md:h-full object-cover w-full z-10 " preload="auto" loop={true} autoPlay={true} muted={true} >
                            <source src="bannervideo_white.mp4" type="video/mp4"/>
      </video>
     </div>
    <div className="bgimage">
    <Jumbo/>
     <Statistic/>
    </div>
    <CarouselMod/>
   <VideoComp/>
  
    <BigCard/>
    <AnimationOnScroll animateOnce={true} animateIn='animate__backInLeft ' delay={300} initiallyVisible={true}>
    <CardOne/>
          
          </AnimationOnScroll>
   
          <AnimationOnScroll animateOnce={true} animateIn='animate__slideInLeft ' delay={10}>
    <HowItWorks/>
    </AnimationOnScroll>
   <Describe/>
   <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInLeftBig'>
          <FooterBot/>
          </AnimationOnScroll>
      
     
    </div>
  )
}
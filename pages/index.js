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


export default function Home() {
    const data=useContext(Store);
    console.log(data);
const {nav,setNav} =data;

  return (
    <div className={`w-screen  bg-[#05010E]`} >
        <NavBar/>
     <Jumbo/>
     <Statistic/>
   <VideoComp/>
    <BigCard/>
    <CarouselMod/>
    <CardOne/>
   <div className="flex flex-col md:flex-row items-center justify-around mb-20">

   <img src="tech-3041437_1920.jpg" alt="hello" className="imgBg"/>


   </div>
    <HowItWorks/>
    <FooterBot/>
      
     
    </div>
  )
}

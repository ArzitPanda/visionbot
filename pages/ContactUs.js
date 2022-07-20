import React,{useState} from "react";
import { useEffect } from "react";
import Head from 'next/head'
import FooterBot from "../components/FooterBot";
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import Image from 'next/image'
import {BsPinMapFill,BsTelephoneFill} from 'react-icons/bs'
export default function ContactUs() {
    const [showpass, setShowPass] = useState(false)
    const [width,setWidth]=useState("");
    useEffect(() => {
      
        setWidth(window.innerWidth);
        console.log(width);
     
    }, [width])
    
    return (
        <div className="bg-slate-800">
            <Head>
       <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
</Head>
        <NavBar/>
        <Heading c={width<=586?'contact us':'Get in touch with us'} to="contact us" form={"Home"}/>
            <div className="bg-indigo-50">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                    <div className=" md:hidden sm:mb-8 mb-6">
                        <Image src={"/logo.png"} height="120" width="120" className="w-32 h-32 object-contain"/>
                    </div>
                    <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold py-2 leading-6 text-gray-800">
                           connect with us
                        </p>
                       
                        <div>
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Name*{" "}
                            </label>
                            <input  type="name" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2" placeholder= "Enter your Name Name*" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email*{" "}
                            </label>
                            <input  type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Enter your Email*" />
                        </div>
                        <div>
                            <label htmlFor="Subject" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Subject{" "}
                            </label>
                            <input id="Subject" aria-labelledby="Subject" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="Subject" />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Tell us AbouT yourself
                               {" "}
                            </label>
                            <textarea id="email" rows={7} aria-labelledby="tell us about yourself"  className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-400 text-gray-800 text-left  pt-1 w-full pl-3 mt-2 " placeholder="Tell us about yourself" />
                        </div>
                        
                           
                    
                        <div className="mt-8">
                            <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                             Send Request
                            </button>
                        </div>
                    </div>
                    <div className="xl:w-1/3 md:w-1/2 lg:ml-16  md:mt-0 mt-6 lg:mb-2">
                        <div className="pl-8 md:block hidden">
                        <Image src={"/logo.png"} height="170" width="170" className="w-32 h-32 object-contain"/>
                        </div>
                        <div className="flex flex-col md:mb-56">
                                <div className="flex flex-col items-center justify-center mb-3 gap-y-3  p-2 rounded-lg bg-gray-200 text-center md:text-left" >
                                    <BsPinMapFill color="blue" size={20} />
                                   <h3 className="font-bold capitalize text-lg text-slate-800 text-left mr-6">Amvar Data Tech Pvt Ltd.</h3>
                                   <p className="text-sm text-slate-500">
                                    <span className="font-semibold capitalize text-slate-600 text-lg">
                                   Regd Office:
                                   </span>
                                    <br/>
                                102, Eden Park, 20,Vittal Mallya Road,
                                <br/>
                                    Bangalore - 560 001
                                   </p>

                                    
                                    </div>    
                                <div className="flex flex-col items-center gap-y-3 mb-3 rounded-lg  p-2 bg-gray-200">
                                <BsTelephoneFill color="blue" size={20} />
                                    <p className="font-semibold capitalize text-slate-600 text-lg">
                                    +91 (733) 773-0600
                                    </p>
                                    </div>    
                                <div className="flex flex-col items-center gap-y-3 rounded-lg mb-3  p-2 bg-gray-200">
                                    
                                <BsPinMapFill color="blue" size={20} />
                                <h3 className="font-bold capitalize text-lg text-slate-800 text-left mr-6">VisionBot.Inc</h3>
                                    
                                    
                                    
                                    </div>    
                                <div className="flex flex-col items-center gap-y-3 rounded-lg mb-3  p-2 bg-gray-200">
                                <BsTelephoneFill color="blue" size={20} />
                                    <p className="font-semibold capitalize text-slate-600 text-lg">
                                    +1 (415) 795-7663
                                    </p>
                                    </div>    


                        </div>
                        
                    </div>
                </div>
            </div>
        <FooterBot/>
        </div>
    );
}

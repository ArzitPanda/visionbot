import React from 'react'
import Card from '../components/CardVariant/Card'
import FooterBot from '../components/FooterBot'
import Heading from '../components/Heading'
import Implementation from '../components/Implementation'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { data } from '../Data/pages'
import Head from 'next/head'
import { useRouter } from 'next/router';

const Solutions = () => {

 const {asPath}=useRouter();

  return (
   <div className="w-screen h-screen scrollbar-hide">
    <Head>
       <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
</Head>
    <ul className="background -z-10">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
        <NavBar data3={asPath}/>
        <div className="w-full flex items-center justify-center">
      <Heading c="solution" form="Home" to="solution"/>
      </div>
        {data.map((data,i)=><Card key={i} photoURL={data.photoURL} name={data.name} list={data.list} source={data.slug}/>)}
         <FooterBot />
    
   </div>
  )
}

export default Solutions

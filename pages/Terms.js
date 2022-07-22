import  Head  from 'next/head'
import React from 'react'
import FooterBot from '../components/FooterBot'
import Heading from '../components/Heading'
import Navbar2 from '../components/Navbar2'
import Teststyle from '../components/Teststyle'
import { Conditions } from '../Data/Conditions';

const Terms = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black privacy">
 <Head>
       <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
</Head>

        <Navbar2/>
        <Heading c={"Terms & Conditions"} form="Home" to="Terms & Conditions"/>
      {Conditions.map((ele,i)=>{return(<Teststyle key={i} name={ele.name} test={ele.text}/>)})}
      <FooterBot/>
    </div>
  )
}

export default Terms;
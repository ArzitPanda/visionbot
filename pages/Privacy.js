import  Head  from 'next/head'
import React from 'react'
import FooterBot from '../components/FooterBot'
import Heading from '../components/Heading'
import Navbar2 from '../components/Navbar2'
import Teststyle from '../components/Teststyle'
import { PrivacyData } from '../Data/PrivacyData'

const Privacy = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black privacy">
 <Head>
       <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
</Head>

        <Navbar2/>
        <Heading children={"Privacy Policy"} form="Home" to="Privacy"/>
      {PrivacyData.map(ele=>{return(<Teststyle name={ele.name} test={ele.test}/>)})}
      <FooterBot/>
    </div>
  )
}

export default Privacy
import React from 'react'
import Contact from '../components/Contact'
import FooterBot from '../components/FooterBot'
import NavBar from '../components/NavBar'
import Head from 'next/head'
 import {useRouter} from 'next/router';
const Contact = () => {
    const{asPath}=useRouter();

    console.log(asPath);

  return (
    <div>
        <NavBar/>
        <Contact/>
        <FooterBot/>
    </div>
  )
}

export default Contact
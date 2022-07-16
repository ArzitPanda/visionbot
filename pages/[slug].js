import React from 'react'
import Heading from '../components/Heading'
import Implementation from '../components/Implementation'
import NavBar from '../components/NavBar'
import TopSection from '../components/TopSection'
import { data } from '../Data/pages'
import Head from 'next/head'
import MidSection from '../components/MidSection'
const ExamplePage = ({posts}) => {
  return (
    <div className="bg-slate-900 w-screen">
    
        <NavBar/>

        <div className="w-screen flex-col items-center justify-center gap-y-2">
        <Heading c={posts[0].name} form="solution" to={posts[0].name}/>
        </div>
        <h2 className="text-slate-200 bg-slate-800 py-5 rounded-xl shadow-xl text-xl md:text-3xl font-semibold text-center">AI DRIVEN AUTOMATED VIDEO MONITORING FOR {posts[0].name.toUpperCase()}</h2>
     
      
      <TopSection/>
      <MidSection solution={posts[0]}/>
        <Implementation />
        </div>
  )
}

export default ExamplePage

export const getStaticPaths =async ()=> {

  

    

    const paths = data.map((val)=>({

      params:{
        slug:val.slug,
      }
    }))

    return {

      paths,
      fallback:"blocking",


    };

}

export const getStaticProps= async ({params})=>{

  
 


  const datas= data.filter((value)=>{return value.slug===params.slug})

  console.log(datas);
  return{

      props:{

         posts:datas,
         

      },
      revalidate:60,
  }

}
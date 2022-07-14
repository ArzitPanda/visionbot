import React from 'react'
import Card from './Card'
import { data } from '../../Data/pages' 






const CardOne = () => {




const arr=data.slice(0,3);



  return (
    <section className="w-screen body-font bg-[#0a345f] ">
    
      <div className="w-full  flex  items-center justify-center flex-wrap  gap-y-3  ">
      {arr.map(data=><Card photoURL={data.photoURL} name={data.name} list={data.list}/>)}
      
        
      </div>
    
  </section>
  )
}

export default CardOne
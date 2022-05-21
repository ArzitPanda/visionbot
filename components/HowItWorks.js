import React from 'react'






const HowItWorks = () => {
    
    
    


return (
<div className={"w-full flex flex-col justify-center bg-slate-900 items-center px-1 md:px-20 py-5 shadow-sm shadow-blue-500 "}>
     <h1 className="fontSize">{`How it Works`}</h1>
   <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-evenly p-1 ">
   <div className="w-11/12 lg:w-7/12">
      
      <p className="text-[#757579]   leading-loose tracking-wider">
      As an enterprise your organization is routinely creating a significant collection of videos both from CCTV cameras and corporate events and creative video formats. Your organisation may have also made investments made in Video management hardware and software surveillance, security, access control to meet regulatory requirements.

Visionbot offers businesses get the most out of their visual content helping derive powerful insights and driving decision making.

Improves Operational efficiency by its capability to detect specific objects and analysis of events in real time for the specific tasks of your organisational workflows

Helping you achieve an ROI by ability to derive objective analysable data from subjective visuals
      </p>

          
      
   </div>
   <img src="HowItWorks.svg" className=' w-9/12 md:w-2/6 object-contain' />
   </div>
</div>
)
}

export default HowItWorks;
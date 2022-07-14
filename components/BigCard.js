import React from 'react'



const data={


    headLine:"Services",
    
    data1:[{headings:"Object Detection and Reporting.",
    content:"Whether your visual content includes images or videos Visionbot helps you detect objects and provide you the report based on your pre defined Outcomes. You can utilize our standard UI or APIs to upload visuals and access reports."
    },
    {headings:"Bulk images / offline Video Analytics.",
    content:"If your business has large visual content either from professional video source or video surveillance systems you can utilize Visionbot services to extract pre defined outcomes: events or alerts.Visionbot utilizes the latest AI techniques for object detection and classification and provides you with Reports that can be analysed by standard Data Analysis tools."
    
    },
    {headings:"Cloud based visual content storage and access.",
    content:"As an owner of visual content you are aware of the cost associated with of storing TB of visual content. Visionbot’s Intelligent content classification helps storing only select content either in local storage or securely in the cloud thereby allowing content retention for a significantly longer time."
    }
    ]
    
    
    }



const BigCard = () => {
    
        const {data1,headLine} =data;
        


  return (
    <div className={"w-full flex flex-col bgimg6 justify-center items-center px-1 md:px-20 py-5 shadow-sm shadow-blue-500"}>
      <div className='w-full flex items-center lg:justify-start justify-center mb-12 mt-6 border-b-2 border-gray-200'>
         <h1 className="text-5xl text-left p-2 text-slate-200">{headLine.toUpperCase()}</h1>
         </div>
       <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly p-1 ">
       <div className="w-11/12 lg:w-7/12">
          
          {
          data1.map(element=>{
                  return(<div className="backdrop-blur-md backdrop-brightness-50 backdrop-opacity-5 backdrop-contrast-50 ">
                <div className="text-slate-400 font-bold p-1 border-b border-white">
                    {element.headings.toUpperCase()}
                </div>
                <div className="text-white font-medium text-sm lg:text-lg my-4 ">
                    {element.content}
                </div>
           </div>)})}
              
          
       </div>
       <img src="GitRequest.svg" className=' w-11/12 md:w-4/6 object-contain' />
       </div>
    </div>
  )
}

export default BigCard
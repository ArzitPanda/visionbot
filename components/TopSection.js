import React from 'react'
import {TbReportAnalytics} from 'react-icons/tb'
import {MdOutlineEventNote} from 'react-icons/md'
import {IoAlertCircle} from  'react-icons/io5'
import {IoAnalyticsSharp} from 'react-icons/io5'
const TopSection = () => {
  return (
    <div className="text-center md:text-left bg-slate-800  p-12 gap-y-4  flex flex-col items-center justify-center tracking-wide  m-10 font-semibold text-gray-300 rounded-lg shadow-lg">
    <p>
  <b className="text-white">VisionBot</b> is a Cloud Based AI & Computer Vision Platform that derives analysable objective data regarding objects, people and events from streaming or stored videos. Our target market is retail enterprises that need custom object and event detection through 24x7 visual monitoring to improve operational efficiency.
    </p>
    <p>
    <b className="text-white">VisionBot</b>  leverages Neural Networks and Deep learning to achieve accuracy of detection and minimising false positives. We have built this platform based on our team's deep skill sets and experience in data science, machine learning and cloud services. We remain in a continuous mode of bringing innovative new solutions around Machine Vision that helps improve operational efficiency of Enterprises.
    </p>
    <p>

    <b className="text-white">VisionBot</b>  can also be offered as an on premise service in Hybrid / Private Cloud / Data Centre for enterprise requirements. It features an adaptive platform and learns on its own training. Users can also expedite training by providing preferences that makes it more efficient. works in both online (real time camera feed) or offline (stored video) modes. It offers the following features:
    </p>

    <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-x-32 gap-y-10  mt-10 text-center">

            <div className="flex items-center justify-evenly flex-row  ">
                <TbReportAnalytics size={30}/>
                 <h3>Incidents /events report</h3>
            
            
            
            </div>
            <div className="flex items-center justify-evenly flex-row"> 

            <MdOutlineEventNote size={30}/>
            <h3>Real time event logs</h3></div>
            <div className="flex items-center justify-between flex-row ml-10 gap-x-5">
                <IoAlertCircle size={30}/>
                 <h3>Alerts for pre-determined events</h3></div>
            <div className="flex items-center justify-evenly flex-row">
                <IoAnalyticsSharp size={30}/> 
                <h3>Predictive analytics</h3></div>




    </div>

  </div>
  )
}

export default TopSection
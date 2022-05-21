import React from 'react'

const VideoComp = () => {
  return (
    <div className="bg-slate-900 overflow-hidden relative flex flex-col-reverse md:flex-row gap=x-2">
    <div className="text-start w-full md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl py-2">
            <span className="block py-4">
                Deep Learning Based
            </span>
            <span className="block text-indigo-500 py-2">
                Intelligent Video
            </span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <div className="w-full md:w-3/5 flex items-center justify-center">
        <div className='rounded-xl  md:ml-3'>
    <video preload="auto" loop={true} autoPlay={true} muted={true} playsinline="" className=" h-full w-full md:w-4/5 rounded-lg ">
    <source src="https://visionbot.com/videos/bannervideo_white.mp4" type="video/mp4"/>

Your browser does not support the video tag.
</video>
</div>
</div>
    
</div>

  )
}

export default VideoComp
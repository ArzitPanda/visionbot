import React from 'react'
import useSound from 'use-sound';

const PriceCard = () => {

const[play]=useSound("beep1.mp3",{volume:.4})


  return (
    <div className=" w-11/12 lg:w-1/4 flex flex-col bg-slate-900 rounded-xl shadow-2xl shadow-gray-800 cursor-pointer hover:scale-110 z-20 hover:bg-gray-900 transition-all" onMouseEnter={play}>
    <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-900">
        <div className="space-y-2 py-4 text-white">
            <h4 className="text-2xl font-bold">Beginner</h4>
            <span className="text-6xl font-bold">Free</span>
        </div>
        <p className="mt-3 leading-relaxed text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
        <ul className="flex-1 mb-6 text-gray-400">
            <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Aenean quis</span>
            </li>
            <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Morbi semper</span>
            </li>
            <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tristique enim nec</span>
            </li>
        </ul>
        <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900 transition-colors hover:bg-violet-800">Get Started</button>
    </div>
    </div>
  )
}

export default PriceCard
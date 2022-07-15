import React from 'react'
import { useState } from 'react'
import {FaEye,FaAngleRight} from 'react-icons/fa'


const MidSection = ({solution}) => {

        // heading
        // imglinks
        // [description],
        // subheading:[{name,desc}],
        // [subtags]
    // const [arr,setArr]= useState(solution[0].solution)
    console.log(solution);
  return (


    <div>


            




          {

            solution.solution.length!=0 
            &&

           solution.solution.map((ele,key)=>{

                    return(
                        <div key={key} className={`mx-5 bg-slate-800 my-7 rounded-lg shadow-xl md:mx-10  md:gap-x-3 p-5 md:px-3 cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform md:py-4 gap-y-3 flex flex-col items-center hover:bg-slate-900 md:items-start justify-center md:justify-around ${key%2===0?"md:flex-row":"md:flex-row-reverse"}`}>
                            <div className="w-full h-3/12 md:h-full md:w-4/12  flex items-center justify-center">
                                <img src={ele.imgLink} alt={ele.heading+".png"} className="object-cover "/>
                            </div>
                            <div className="">
                                    <h2 className="bg-indigo-900 rounded-xl text-gray-100 font-semibold text-xl md:text-2xl  capitalize px-4 py-2">{ele.heading}</h2>
                                    {ele.description.map((val,key)=>{return(<div key={key} className="text-sm md:text-lg text-gray-200">

                                            <p>{val}</p>


                                    </div>)})}
                            {ele.subHeading.length!=0 &&
                                ele.subHeading.map((elemented,keys)=>{return(<div key={keys} className="flex items-start justify-center flex-col mt-5">

                                        <h4 className="text-gray-200 uppercase font-bold">{elemented.name}</h4>
                                        <p className="text-sm md:text-base text-start md:text-left text-gray-400">{elemented.desc}</p>



                                </div>)})
                            
                            }

                        {ele.subtags.length !=0 && 
                            <div className="grid grid-cols-2 gap-y-3 ">

                                {ele.subtags.map((element,key)=>{return(<div key={key} className="flex flex=col items-center justify-start gap-x-4">
                                    <FaAngleRight color='white'/>
                                        <div className="text-slate-400 text-lg font-semibold">{element}</div>




                                </div>)})}

                            </div>

                        }

                            </div>


                        </div>
                    )



            })
          }



    </div>
  )
}

export default MidSection
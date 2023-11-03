import React from 'react'
import Manblue from '../Maninblueshirt.jpeg' 
import Manwhite from '../Maninwhiteshirt (1).jpeg'
function Hero() {
  return (
    <>
    <div className='w-full h-[900px] bg-black'>
        <div className=' justify-around text-white p-4    '>
        <div className=' text-white absolute top-[30%] w-full md:[5%] h-full '>
        <h1 className=''>You’ve never experiened texting like this before</h1>
        <p>Pioneering the Future of Real-Time Chat: Shaping the Next Generation of Conversations</p>
       </div>
      <div className='flex  ml-auto  w-[600px]   border-2 bg-slate-400 items-center'>
      <img src={Manwhite} alt= "" className=' rounded-lg w-[278px] h-[378px]   object-contain'  />
      <img src={Manblue} alt="" className=' rounded-lg w-[279px] h-[378px]  object-contain' />
      </div>
        </div>
    </div>
    </>
  )
}
export default Hero

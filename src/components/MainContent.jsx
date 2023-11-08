import React from 'react'
import gif from '../Chat.gif'

export const MainContent = () => {
  return (
    <> 
<div className='w-full h-[900px] bg-white flex'>
    
    <div className='mt-44 ml-10' >
    <img src = {gif} alt =" "></img>

    </div>
        <div className=' justify-around text-black p-4 max-w-[1500px] m-auto items-center '>
         <h1 className='font-black text-[55px] mt-2 ml-24'>Reimaging text</h1>
         <p className='text-[30px] w-[650px] mt-8 ml-24'>Introducing our groundbreaking chat app that reimagines the way you connect and communicate,<br></br><br></br>

            offering innovative features for a more engaging and personalized chatting experience.<br></br><br></br>

            Join us in shaping the future of digital conversations</p>
    
     
        </div>
    </div>
    </>
  )
}

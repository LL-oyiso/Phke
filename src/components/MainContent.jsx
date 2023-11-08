import React from 'react'
import gif from '../Chat.gif'
import textscreen from '../Frame 13.svg'
 import friends from '../Rectangle 41.png'
 import friend2nd from '../Rectangle 42.png'
 import friend3rd from '../Rectangle 43.png'
 import pizza from '../pizza slice.gif'
import lock from '../lock.gif'
export const MainContent = () => {
  return (
    <>
    <div className='w-full h-[1200px] bg-black '>
    <div className='w-full h-[900px] bg-white flex'>
    
    <div className='mt-44 ml-10' >
    <img src = {gif} alt =" " />
    </div>
        <div className=' justify-around text-black p-4 max-w-[1500px] m-auto items-center '>
         <h1 className='font-black text-[55px] mt-2 ml-24'>Reimaging text</h1>
         <p className='text-[30px] w-[650px] mt-8 ml-24'>Introducing our groundbreaking chat app that reimagines the way you connect and communicate,<br></br><br></br>

            offering innovative features for a more engaging and personalized chatting experience.<br></br><br></br>

            Join us in shaping the future of digital conversations</p>
        </div>
    </div>

    <div className='bg-black  mt-24 w-full h-[1000px] flex'>
        <div className=' max-w-[1220px]'>

        </div>
        <div className='w-[680px]'>
        <h1 className='font-bold text-white ml-10 text-[55px]    '> Build your community</h1>
        <h2 className='text-white text-[40px] ml-10 mt-24 '>Customizable chat rooms</h2>
                <p className='text-white text-[35px] ml-10 '>Users can create public or private chat rooms based on topics, interests, or communities.</p>

                <h2 className='text-white text-[40px] ml-10 mt-24 '>Private Messaging</h2> 
                <p className='text-white text-[35px] ml-10 ' >Private one-on-one messaging is applied by default between users. Users can initiate private conversations with others.</p>
        </div>

        <div className=' flex ml-auto  mr-20 -gray-800'>
            <div className='mt-32'>
            <img src={friend2nd} alt =" "  className='w-[190px] object-contain mr-20 ' />
            <img src ={friend3rd} alt = " "  className='w-[210px] object-contain mt-10 ml-20' />
            <img src ={friends} alt = " "  className='w-[190px] object-contain ml-20 mt-10 '/>
            </div>
            <div>
            <img src={pizza} alt =" " className='object-contain w-[200px] mr-10  ' />
            <img src={textscreen} alt=" " className=' object-contain h-[700px]' />
    
            </div>
        </div>

        


    
    </div>
    <div className='bg-[#0761B4] h-[600px] flex '>
        <img src={lock} alt =" "  className='w-[600px] object-contain'/>
        <div className=''>
            

    </div>
    </div>

    </>
  )
}

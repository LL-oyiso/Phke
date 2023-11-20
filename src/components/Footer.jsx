import React from 'react'

export default function Footer () {
  return (
    <div className='w-full bg-black h-[350px]  text-white justify-around font-[Monterrat] flex '>
    <div className='w-[580px] flex mt-20'>
   <a href ="#hero"> <h1 className='text-bold  font-[KronaOne] px-10 py-10 text-2xl'>RUN START </h1></a>
   <ul className='ml-10 mt-5 text-3xl '>
   <a href ="#creators"><li className ="text-xl" >The Creators</li></a> 
   <a href ="#specs"> <li className ="text-xl">Specs</li></a>
   <a href ="#subscribe" className ="text-xl"><li>Subscribe</li></a>
   </ul>
   <ul className='ml-10 mt-5 text-3xl '>
   <a href ="#creators"><li className ="text-xl" >Future work</li></a> 
   <a href ="#specs"> <li className ="text-xl">Work</li></a>
   <a href ="#subscribe" className ="text-xl"><li>Subscribe</li></a>
   </ul>
    </div>
    
    <div className='px-10 w-[600px]    '>
    <h1 className="text-1xl font-[Montserrat] mt-28 ">SUBSCRIBE/SUBSCRIBE/SUBSCRIBE/SUBSCRIBE</h1>
    <h2 className=' mt-10  ml-3'>Sign up for our newsletter</h2>
    <div className=''>
    <input className='mt-5 py-2 border-4 border-black text-center rounded-3xl w-[300px] h-[50px]'></input>
    <button className ="bg-white text-black px-6 py-2 ml-10  rounded-3xl text-xl"> SUBSCRIBE</button>
    

    </div>
  
   
    </div> 
  
  </div>
 
  )
}

import React from 'react'
import lock from '../lock.gif'



const Security = () => {
  return (
    <div className='bg-[#63788d] h-[600px] flex '>
    <img src={lock} alt =" "  className='w-[600px] object-contain'/>
    <div className=''>
        <h1 className='font-bold text-white mt-28    ml-32 text-[55px] '>Express yourself securely</h1>
        <p className='text-white text-[35px] ml-32 w-[750px]'>Proactively averting harm from the outset, granting enhanced choices and command, providing considerate reactions, and embracing your openness in a private, secure, and assured manner</p>
    </div>
</div>
  )
}

export default Security
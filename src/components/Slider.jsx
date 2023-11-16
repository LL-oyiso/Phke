import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Slider() {
    
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    
  return (
    <div className='w-3/4 m-auto'>
        <div className='mt-20'>
      
          {/* iterate through this using a map */}
          {data.map((d) => (
            <div className='bg-white h-[450px] text-black rounded-xl'> 
                <div className=' h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'> 
                   
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold'> {d.name}</p>
                    <p>{d.review}</p>
                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                </div>
            </div>
          ))}
         
        </div>

        
    </div>
  )
}

const data = [
    {
        name: 'Loyiso Tose',
        review:'Loprem iwenbrjnrnnffkfjfd'
    },
    {
        name: 'Loyiso Tose',
        review:'Loprem iwenbrjnrnnffkfjfd'
    },
    {
        name: 'Loyiso Tose',
        review:'Loprem iwenbrjnrnnffkfjfd'
    },
    {
        name: 'Loyiso Tose',
        review:'Loprem iwenbrjnrnnffkfjfd'
    }
]


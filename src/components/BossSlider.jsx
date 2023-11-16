// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

// export  function BossSlider() {
    
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
//       };
    
//   return (
//     <Slider {...settings}>
//     <div className='w-3/4 m-auto'>
//         <div className='mt-20'>
      
//           {/* iterate through this using a map */}
//           {data.map((d) => (
//             <div className='bg-white h-[450px] text-black rounded-xl'> 
//                 <div className=' h-40 rounded-t-xl bg-indigo-500 flex justify-center items-center'> 
                   
//                 </div>

//                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
//                     <p className='text-xl font-semibold'> {d.name}</p>
//                     <p className='text-center'>{d.review}</p>
//                     <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
//                 </div>
//             </div>
//           ))}
         
//         </div>

        
//     </div>
//     </Slider>
//   )
// }

// const data = [
//     {
//         name: 'Loyiso Tose',
//         review:'Loprem iwenbrjnrnnffkfjfd'
//     },
  
// ]

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export  function BossSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
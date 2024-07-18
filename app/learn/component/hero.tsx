import React from 'react'
import {Cairo} from 'next/font/google';

const cairo = Cairo({
     subsets:['latin'],
     weight:["400","900"]

})

const Hero = () => {
  return (
    <div className={"w-full min-h-[88vh]  flex flex-col justify-start items-center md:justify-between md:items-start py-8"+" "+cairo.className}>
         <div className="right bg-red-500 w-full lg:w-[50%]">
            Image
         </div>

         <div className="right w-full lg:w-[50%]">
            <h1 className="capitalize font-bold text-start text-6xl">
                   ابدا معنا واحجز مقعدك
            </h1>
            <p className='text-gray-700 font-bold mt-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At harum molestiae quia vitae quos sint tempora sunt cumque. Odio necessitatibus exercitationem fugit. Vero rerum id dolorum suscipit tenetur. Eligendi, enim.
            </p>
            <button className='px-[40px] py-2 bg-green-500 text-white font-bold  rounded-full mt-7  hover:opacity-70'>subscribe</button>
         </div>
    </div>
  )
}

export default Hero
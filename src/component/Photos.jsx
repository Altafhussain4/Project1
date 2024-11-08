import React from 'react'
import pic4 from "./pics/wedding.jpg"
import pic5 from "./pics/rocks.jpg"
import pic6 from "./pics/sailboat.jpg"
import pic7 from "./pics/underwater.jpg"
import pic8 from "./pics/chef.jpg"
import pic9 from "./pics/wedding1.jpg"
import pic10 from "./pics/p6.jpg"


const Photos = () => {
  return (
    <>
    <div className='text-2xl font-serif mt-5 ml-48 pl-16 '>
          <p className='text-white text-2xl font-serif pl-16'>My Photos</p>
          <hr className='w-[10rem] mt-5 ml-16'></hr>
          
          <div className='flex justify-center gap-4'>
                {/* left div */}
                <div className='mt-4 '>
                <img src={pic4} alt="" className='h-[18rem] w-auto'/>
                <img src={pic5} alt="" className='w-[28.85rem] h-auto mt-3' />
                <img src={pic6} alt="" className='h-[19.25rem] w-auto mt-3'/>
               
                </div>
                {/* Right div */}
                <div>
                <img src={pic7} alt="" className='h-[29rem] w-auto mt-4'/>
                <img src={pic8} alt="" className='h-[19.25rem] w-auto mt-3'/>
                <img src={pic9} alt="" className='h-[18rem] w-auto mt-3'/>
                <img src={pic10} alt="" className='h-[21.65rem] w-auto mt-3'/>
                </div>
          </div>
        </div>
    </>
  )
}

export default Photos
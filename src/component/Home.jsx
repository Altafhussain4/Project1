import React from 'react'
import pic1 from "./pics/man_smoke.jpg"
export default function Home() {
  return (
    <div>



    <div className="content ml-60 p-5 flex-1 transition-all duration-300">
        <h1 className="text-white text-5xl font-bold  text-center mt-10 ">I'm Jhon Doe.</h1>
        <p className="text-white text-center m-8">Photographer and Web Desinger</p>
    </div>
<img src={pic1} alt="" className='h-100 w-100 m-auto '/>
    </div>
  )
}

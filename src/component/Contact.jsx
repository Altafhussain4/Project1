import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useState } from 'react'

export default function Contact(){
//     const[counter , setCounter ] = useState("1")
const[counter , setCounter] =useState("2")
// const [change, setChange] = ('altafhussain');
  return (

    <>
    
    <div className='mx-40 h-full bg-black p-28'>

<p className="text-2xl font-serif text-white  ">My Name</p>
<hr className='w-[10rem] mt-5 '></hr>

<div className='text-slate-400 text-sm mt-5 '>
<p> Chicago, US</p><br />
<p> Phone: +00 151515</p><br />
<p> Email: mail@mail.com</p><br />
<p>Let's get in touch. Send me a message:</p>
<div onClick={()=>{setCounter(counter*2)}} className='bg-white p-4 mt-3 rounded-lg w-fit cursor-pointer'>
    {counter}
 </div>
</div>

<div className='bg-white mt-3'>
    <input type="text" placeholder='Name' className='p-3 text-black'/>
    </div>

    <div className='bg-white mt-3'>  
          <input type="text" placeholder='Email'  className='p-3 mt-2 text-orange-500'/>
    </div>
    <div className='bg-white mt-3'>  
          <input type="text" placeholder='Subject' className='p-3 mt-2 text-orange-500'/>
    </div>
    <div className='bg-white mt-3'>  
          <input type="text" placeholder='Message' className='p-3 mt-2 text-orange-500'/>
    </div>

    <div>  
          <input type="text" placeholder='Send Message' className='p-3 mt-2 text-orange-500'/>
    </div>
    <div className='mt-3 text-slate-500'>
      <a href="//facbook.com">{<FacebookIcon/>}</a>
      <a href="//instagram.com">{<InstagramIcon/>}</a>
      <a href="//pintrest.com">{<PinterestIcon/>}</a>
      <a href="//twitter.com">{<TwitterIcon/>}</a>
      <p className='text-slate-500 mt-2'>Powered by Altafhussain.com</p>
      
    </div>
    </div>

    
   
    </>


  )
}



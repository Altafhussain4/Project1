import React from 'react'
import pic2 from "./pics/bandmember_g2.jpg"
import pic3 from "./pics/avatar_g2.jpg"

export default function About() {
  return (
    <>
    
    <div className='mx-40 h-auto bg-black p-28'>

<p className="text-2xl font-serif text-white  ">My Name</p>
<hr className='w-[10rem] mt-5 '></hr>
<p className='text-gray-500 text-xm mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
   Delectus assumenda fugit, fuga esse sequi nemo aliquid velit cumque iste itaque accusamus aut 
   repellendus recusandae beatae possimus suscipit distinctio inventore facere iusto consequatur 
   mollitia! Odio commodi praesentium, iusto aliquam quasi sapiente minus illo adipisci rerum veniam
    sequi voluptatem quae officia omnis facere quod molestias maiores consectetur alias nobis laudantium 
    quisquam nisi? Obcaecati mollitia, repellendus fugit pariatur eum enim dolorem eaque alias amet quisquam nulla,
     nostrum animi quasi laboriosam harum, aspernatur doloremque? Ullam mollitia voluptas molestias quos labore 
     quia dolores ratione illo placeat nesciunt ipsa non quidem neque, rerum esse eos illum?</p>
     <p className='text-2xl font-serif text-white mt-5'>My Skills</p>
     <p className='text-l font-serif text-gray-500 mt-10'>Photography</p>
     <p className='text-l font-serif text-gray-500 mt-10'>Web Design</p>
     <p className='text-l font-serif text-gray-500 mt-10'>Photoshop</p>

     <div className='bg-white p-5 mt-10 flex gap-32 justify-center'>
     <p className='text-black font-serif text-xl'>11+ <br/> Partners</p>
     <p className='text-black font-serif text-xl'>55+ <br/> Projects Done</p>
     <p className='text-black font-serif text-xl'>89+ <br/> Happy Clients</p>
     <p className='text-black font-serif text-xl'>150+ <br/> Meetings</p>  

     </div>

     <div>
      <p className='text-2xl font-serif text-white mt-5' >My Price</p>
     </div>
     {/* oouterdiv */}
     <div className='flex gap-4 justify-center py-10 '>
     {/* Basic */}
     <div className='bg-white text-center '>
      <p className='text-3xl p-4 text-white bg-slate-700 px-40'>Basic</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Web Design</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Photography</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>5GB Storage</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Mail Support</p>
      <p className='text-gray-700 text-3xl text-center py-6 border-b border-b-slate-400'>$ 10 <p className='text-sm'>Per Month</p> </p>
      <div className='bg-slate-100 py-4 '>
        <div 
        onClick={()=>{
            console.log("Sign up is clicked....")
        }}
        className='p-3 bg-white w-fit m-auto hover:bg-black hover:text-white hover:cursor-pointer rounded-2xl '><p>Sign up</p></div>
      </div>
     </div>
     {/* pro */}
     <div className='bg-white text-center '>
     <p className='text-3xl p-4 text-white bg-slate-700 text-center px-40'>Pro</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Web Design</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Photography</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>50GB Storage</p>
      <p className='text-gray-700 text-sm text-center py-4 border-b border-b-slate-400'>Mail Support</p>
      <p className='text-gray-700 text-3xl text-center py-6 border-b border-b-slate-400'>$ 25 <p className='text-sm'>Per Month</p> </p>
      <div className='bg-slate-100 py-4 '>
      <div className='p-3 bg-white w-fit m-auto hover:bg-black  hover:text-white hover:cursor-pointer rounded-2xl'><p>Sign in</p></div>
      </div>
      </div>
     </div>
      </div>
      <div className='text-2xl font-serif text-white pl-16 ml-48'> 
        <p>My Reputation</p> 

         <div>
      <div className='font-serif text-white mt-5 ml-38 flex'>
        <img src={pic2} alt="" className='rounded-full h-20 w-20' />
        <div className='font-serif text-gray-500 ml-5 mt-5 text-sm'>
       <div><p>Chris Fox. CEO at Mighty Schools.</p></div>
       <div><p>John Doe saved us from a web disaster.</p></div>
       </div>
        </div>  
        </div>

        <div className='font-serif text-white mt-5 ml-38 flex'>
          <img src={pic3} alt="" className='rounded-full h-20 w-20' />
         <div className='font-serif text-gray-500 ml-5 mt-5 text-sm'>
         <div><p>Rebecca Flex. CEO at Company.</p></div>
         <div><p>No one is better than John Doe.</p></div>
         </div>  
        </div>   
      </div>
     

        
        
    </>

  )
}
 
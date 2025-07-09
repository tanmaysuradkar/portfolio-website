import React from 'react'

const projects = (props) => {
  return (
    <div  className='h-min-screen w-full p-8 pl-15 border-t-2 border-t-black '>
      <h1 className='text-4xl font-bold pt-3 pb-9  text-black'>Projects</h1>
      <div className='h-[90%] w-[95%] border-y-2 border-y-black'>
        <div onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}  className='h-18 relative cursor-pointer hover:text-white transition-colors duration-600 ease-[cubic-bezier(0.65_0.05_0.36_1)] w-full border-b-2 border-b-black font-medium flex items-center before:h-18 before:w-full before:z-5 before:bg-black before:absolute before:left-0 before:scale-x-0 before:origin-bottom-left z-10 before:transition-transform before:duration-900 before:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:before:origin-bottom-left hover:before:scale-x-100  text-start justify-between px-3 text-black text-2xl'>
          <h1 className='z-20'>LakshyaX</h1> <h1 className='z-20'>Remote management software</h1> <h1 className='z-20'>Next.js Stack and Expo</h1>
        </div>
        <div onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}  className='h-18 relative cursor-pointer hover:text-white transition-colors duration-600 ease-[cubic-bezier(0.65_0.05_0.36_1)] w-full font-medium flex items-center before:h-18 before:w-full before:z-5 before:bg-black before:absolute before:left-0 before:scale-x-0 before:origin-bottom-left z-10 before:transition-transform before:duration-900 before:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:before:origin-bottom-left hover:before:scale-x-100  text-start justify-between px-3 text-black text-2xl'>
          <h1 className='z-20'>Uber-clone</h1> <h1 className='z-20'>Taxi booking software</h1> <h1 className='z-20'>MERN Stack and expo</h1>
        </div>
      </div>
    </div>
    
  )
}

export default projects
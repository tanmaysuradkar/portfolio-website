import React from 'react'

const projects = (props) => {
  return (
    <div  className='h-min-screen bg-white relative w-full p-8 lg:pl-15 pl-2 border-t-2 z-20 border-t-black '>
      <h1 className='text-4xl z-30 font-bold pt-3 pb-9  text-black'>Projects</h1>
      <div className='h-[90%] w-[105%] lg:w-[95%] border-y-2 border-y-black'>
        
        <a href='https://github.com/tanmaysuradkar/Scatch/' onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}  className='h-18 relative cursor-pointer hover:text-white transition-colors duration-600 ease-[cubic-bezier(0.65_0.05_0.36_1)] w-full font-medium flex items-center before:h-18 before:w-full before:z-5 before:bg-black before:absolute before:left-0 before:scale-x-0 before:origin-bottom-left z-10 before:transition-transform before:duration-900 before:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:before:origin-bottom-left hover:before:scale-x-100  text-start justify-between px-3 text-black text-sm gap-2  lg:text-2xl'>
          <h1 className='z-20'>scatch</h1> <h1 className='z-20'>E-Commerce Web Platform</h1> <h1 className='z-20'>MERN Stack</h1>
        </a>
      </div>
    </div>
    
  )
}

export default projects
import React from 'react'

const Hero = () => {
  return (
     <section className="bg-[#f5f5f5] h-[80vh] py-24">
        <div className="max-w-7xl mx-auto px-4 h-full w-full sm:px-6 lg:px-8 md:flex bottom-0  justify-center row-auto flex-col ">
          <div className='h-[75%] flex gap-1 absolute flex-row-reverse bottom-0 font  right-1/110 w-[60%]'>
          <div className='h-[75%] w-75 bg-black right-1/100 '>
          </div>
           <div className=' h-1/3 w-65 bg-black'>
          </div>
          </div>
          
          <h1 className="text-2xl font-bold text-[#1e1e1e] mb-1">TANMAY SURADKAR</h1>
          <p className="text-xs text-[#757575]">Software Developers</p>
          <div className='flex gap-1 absolute bottom-35 px-15 py-10'>
            <div className='h-3 w-3 rounded-full bg-black'></div>
            <div className='h-3 w-3 rounded-full bg-black'></div>
          </div>
        </div>
      </section>
  )
}

export default Hero
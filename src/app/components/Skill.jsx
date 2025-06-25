import React from 'react'

const Skill = () => {
  const Skill = {

  }
  return (
    <section className="py-2 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1e1e1e] ">Skill </h2>
          <p className="text-[#757575]">Here are some technologies I have been working with:</p>
        </div>
        <div className="h-full w-full text-black gap-0.5">
          {/* <h1>Frontend:</h1> 
          <p className='pb-1'>HTML, CSS, JavaScript ES6+ , ejs , React Native , React.js</p>
          <p>JAVA , TypeScript , Pythen</p>
          <h1>Backend:</h1> 
          <p>Express.js , Node.js , Next.js</p>
          <h1>System design:</h1>
          <p>Docker , Redis , Kubernetes , fastAPI</p>
          <h1>Data basice:</h1> 
          <p>SQL , MongoDB</p>
          <p></p> */}
          <div className="w-1/1 flex justify-evenly items-center text-center pb-2.5 mt-[-35]">
            <div className='h-30 w-1/5  bg-[#f5f5f5] m-6 p-2 '>
              <h1 className='text-2xl font-bold text-[#1e1e1e] mb-2'>Frontend</h1>
              <p className='pb-1 text-md text-[#757575]'>HTML, CSS, JavaScript ES6+ , ejs , React.js , React Native</p>
              {/* <p className='text-[#757575]'> JAVA , TypeScript , Pythen</p> */}
            </div>
            <div className='h-30 w-1/5  bg-[#f5f5f5] m-6 p-2'>
              <h1 className='text-2xl font-bold text-[#1e1e1e] mb-2'>Backend</h1>
              <p className='pb-1 text-md text-[#757575]'>Express.js , Node.js , Next.js</p></div>
          </div>
          <div className="w-1/1 flex justify-evenly items-center text-center pb-2.5 ">
            <div className='h-30 w-1/5  bg-[#f5f5f5] m-6 p-2'>
              <h1 className='text-2xl font-bold text-[#1e1e1e] mb-2'>System design</h1>
              <p className='pb-1 text-md text-[#757575]'>Docker , Redis , Kubernetes , fastAPI</p>
            </div>
            <div className='h-30 w-1/5  bg-[#f5f5f5] m-6 p-2'>
              <h1 className='text-2xl font-bold text-[#1e1e1e] mb-2'>Data basice</h1>
              <p className='pb-1 text-md text-[#757575]'>MYSQL , MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
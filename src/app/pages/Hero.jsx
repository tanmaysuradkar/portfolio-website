import React from "react";
import Image from "next/image";

const Hero = (props) => {
  return (
    <div className=" h-[95vh] w-full z-20 relative bg-white flex justify-start items-center text-center">
      <div className="h-full w-full border-l-2 border-l-black">

        <div className="h-full relative flex justify-between  flex-col sm:flex-row ">
          <div className="h-full relative text-start pl-10 pt-5 !text-5xl font-bold text-black flex-row sm:flex-col  uppercase w-full sm:w-[76%]">
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="h-[10%] cursor-pointer font-medium uppercase">software</h1>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="h-[10%] cursor-pointer font-medium uppercase">developer</h1>
            <p onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-[10px] cursor-pointer leading-4 pt-2 lg:text-end">👋 Hi, I’m Tanmay. I’m a Polytechnic student learning AI/ML.</p>
            <p onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-[10px] cursor-pointer leading-4">
              And also by side learning Full-Stack Development. I enjoy building web and mobile apps and turning ideas into real projects.

              Right now, I’m working with:

              MERN Stack (MongoDB, Express.js, React, Node.js)

              Next.js & React Native

              SQL, TypeScript

              AI/ML basics and projects


              I love learning new things, solving problems, and creating useful software from scratch.
              I’m also open to opportunities in Software Development and AI/ML where I can learn and grow.</p>
            <div onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="h-50 w-50 mt-4  bg-amber-300 rounded-2xl overflow-hidden">
              <Image src="icon/text4.jpg" className=" object-cover" alt="TailwindCss" width={275} height={300} />
            </div>
            <div className="h-25 w-25  border-r-black border-r-2 border-b-black border-b-2 text-9xl mt-5 lg:mt-10">
              <div className="w-30 rotate-45 absolute mt-14 bg-black -ml-[3px] border-[1px] border-black"></div>
            </div>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-7xl cursor-pointer hidden lg:flex absolute bottom-16 right-20 font-medium">tanmay</h1>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-7xl cursor-pointer hidden lg:flex absolute bottom-0 right-10 font-medium">suradkar</h1>
          </div>
          <div className="lg:h-full h-1/2 uppercase text-gray-600 w-full relative sm:w-[40%] flex justify-center items-center text-cente flex-col   sm:border-l-2 border-black ">
            <div className="h-[5%] hidden lg:flex absolute top-0  text-gray-500 w-full justify-center items-center border-b-2 border-black">
              <h1 className="text-[20px] font-bold uppercase">
                I'm Unemployed you can hire me
              </h1>
            </div>
            <h1 className="text-xl   font-medium">to</h1>
            <h1 className="text-xl   font-medium">connet me</h1>
            <a href="https://www.linkedin.com/in/tanmaysuradkar/" onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-gray-700 rounded-4xl  font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Say hi
                </div>
                <div className="text-xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-gray-700 rounded-4xl  font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Say hi
                </div>
              </span>
            </a>
            <div className="text-xl   font-medium">
              <span className=" uppercase font-medium relative font-general text-xm  after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer">
                linkedin
              </span>{" "}
              else{" "}
              <span className="font-medium relative font-general text-xm  uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                email
              </span>{" "}
              and
            </div>
            <a href="https://www.linkedin.com/in/tanmaysuradkar/" onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-xl mb-3 capitalize cursor-pointer py-0 px-5 border-2 border-gray-700 rounded-4xl  font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  follow me
                </div>
                <div className="text-xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-gray-700 rounded-4xl  font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  follow me
                </div>
              </span>
            </a>
            <h1 className="text-xl   font-medium">
              <span className="font-medium relative font-general text-xm  uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                linkedin
              </span>{" "}
              and{" "}
              <span className="font-medium relative font-general text-xm  uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                github
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

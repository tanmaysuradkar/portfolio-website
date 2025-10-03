import React from "react";

const Hero = (props) => {
  return (
    <div  className=" h-[83vh] w-full z-20 relative bg-white flex justify-start items-center text-center">
      <div className="h-full w- flex text-start flex-col justify-center items-center">
        <div className="w-[30vw]">
          <h1 className="text-3xl sm:text-5xl text-black uppercase font-bold">
            !Hi there
          </h1>
          <h3 className="text-2xl sm:text-4xl text-black uppercase font-medium">
            I'm tanmay rahul suradkar
          </h3>
          <h3 className="text-2xl sm:text-4xl text-black uppercase font-medium">
            a software developer
          </h3>
        </div>
      </div>
      <div className="h-full w-[70%] border-l-2 border-l-black">
        <div className="h-[8%] text-black w-100% flex justify-center items-center border-b-2 border-black">
          <h1 className="text-[20px] font-bold uppercase">
            I'm Unemployed you can hire me
          </h1>
        </div>
        <div className="h-[91%] relative flex justify-between  flex-col sm:flex-row ">
          <div className="h-full  !text-6xl font-bold flex justify-center text-white items-center leading-47 text-center flex-row sm:flex-col tracking-[-5px]  uppercase w-full sm:w-[25%]">
            <h1 className=" [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]">
              one{" "}
            </h1>
            <h1 className=" [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]">
              step
            </h1>
          </div>
          <div className="h-full uppercase w-full sm:w-[74%] flex justify-center items-center text-cente flex-col  sm:border-l-2 border-black ">
            <h1 className="text-3xl mb-4 text-black font-medium">to</h1>
            <h1 className="text-3xl mb-4 text-black font-medium">connet me</h1>
            <button onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}  className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-2xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Say hi
                </div>
                <div className="text-2xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Say hi
                </div>
              </span>
            </button>
            <div className="text-3xl mb-4 text-black font-medium">
              <span className="
              ">
                INSTGRAM
              </span>{" "}
              else{" "}
              <span className="font-medium relative font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                email
              </span>{" "}
              and
            </div>
            <button onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}  className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-2xl mb-3 capitalize cursor-pointer py-0 px-5 border-2 border-black rounded-4xl text-black font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  follow me
                </div>
                <div className="text-2xl mb-3 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  follow me
                </div>
              </span>
            </button>
            <h1 className="text-3xl mb-4 text-black font-medium">
              <span className="font-medium relative font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                Instagram
              </span>{" "}
              and{" "}
              <span className="font-medium relative font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
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

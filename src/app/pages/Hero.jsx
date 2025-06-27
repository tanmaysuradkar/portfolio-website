import React from "react";

const Hero = () => {
  return (
    <div className=" h-[86vh] w-full flex justify-start items-center text-center">
      <div className="h-full w-1/3 flex text-start flex-col justify-center items-center">
        <div className="w-[85%]">
          <h1 className="text-5xl text-black uppercase font-bold">
            ! Hi there
          </h1>
          <h3 className="text-4xl text-black uppercase font-medium">
            I'm andreo suradkar
          </h3>
          <h3 className="text-4xl text-black uppercase font-medium">
            a software developer
          </h3>
        </div>
      </div>
      <div className="h-full w-[83%] border-l-2 border-l-black">
        <div className="h-[9%] text-black w-100% flex justify-center items-center border-b-2 border-black">
          <h1 className="text-4xl font-bold uppercase">
            I'm Unemployed you can hire me
          </h1>
        </div>
        <div className="h-[91%] relative w-100% flex ">
          <div className="h-full text-9xl font-bold flex justify-center text-white items-center leading-47 text-center flex-col tracking-[-10px]  uppercase w-1/2 ">
            <h1 className=" [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]">
              one
            </h1>
            <h1 className=" [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]">
              step
            </h1>
          </div>
          <div className="h-full uppercase flex justify-center items-center flex-col w-1/2 border-l-2 border-black ">
            <h1 className="text-4xl mb-4 text-black font-medium">to</h1>
            <h1 className="text-4xl mb-4 text-black font-medium">connet me</h1>
            <button className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-3xl mb-4 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Say hi
                </div>
                <div className="text-3xl mb-4 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Say hi
                </div>
              </span>
            </button>
            <div className="text-4xl mb-4 text-black font-medium">
              <span className="font-medium relative ms-10 font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                INSTGRAM
              </span>{" "}
              else{" "}
              <span className="font-medium relative ms-10 font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                email
              </span>{" "}
              and
            </div>
            <button className="group relative z-10 w-fit">
              <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="text-3xl mb-4 capitalize cursor-pointer py-0 px-5 border-2 border-black rounded-4xl text-black font-medium translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  follow me
                </div>
                <div className="text-3xl mb-4 capitalize cursor-pointer py-0.5 px-5 border-2 border-black rounded-4xl text-black font-medium absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  follow me
                </div>
              </span>
            </button>
            <h1 className="text-4xl mb-4 text-black font-medium">
              <span className="font-medium relative ms-10 font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
                Instagram
              </span>{" "}
              and{" "}
              <span className="font-medium relative ms-10 font-general text-xm text-black uppercase after:absolute after:-bottom-[-50%] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black hover:cursor-pointer cursor-pointer;">
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

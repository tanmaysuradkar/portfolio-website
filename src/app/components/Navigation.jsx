import React from "react";
import Link from "next/link";

const Navigation = (props) => {
  return (
    <header  className="border-b-2 z-40 flex w-full justify-center items-center h-7 relative border-[#000] bg-[#ffffff]">
      <div className="w-full mx-auto flex justify-around items-center">
        <div className=" w-full flex justify-between mx-10 h-8.5">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#1e1e1e] rounded flex items-center justify-center">
              <span className="text-[#ffffff] text-sm font-bold">T</span>
            </div>
          </div>
          <nav className="hidden md:flex justify-center text-center items-center space-x-25">
            {/* <Link href="/" className="text-[#2c2c2c] hover:text-[#1e1e1e] text-sm font-medium">Home</Link>
              <Link href="/contact" className="text-[#2c2c2c] hover:text-[#1e1e1e] text-sm font-medium">Contact</Link> */}
            <Link
              onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}} 
              href="#"
              className="font-medium relative ms-10 font-general text-[15px] text-black uppercase before:absolute before:-bottom-0.5 before:left-0 before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:bg-neutral-800 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:before:origin-bottom-left hover:before:scale-x-100 dark:before:bg-black cursor-pointer;"
            >
              Tanmay
            </Link>
          </nav>
          <div className="flex items-center space-x-5">
            <a href="tanmay-resume.pdf" onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}} className="group flex justify-center items-center -py-10 h-5 relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-5 border-2 text-black">
              <span className="relative inline-flex  overflow-hidden font-general text-[15px] uppercase">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-150%] group-hover:skew-y-12">
                  RESUME
                </div>
                <div className="absolute translate-y-[154%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  RESUME
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

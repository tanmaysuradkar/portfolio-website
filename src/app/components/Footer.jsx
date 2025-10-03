import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = (props) => {
   const scrollToTop = () => {
    const scrollStep = -window.scrollY / 50; // smaller = slower
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 16); // ~60fps
  };

  return (
    <footer className="bg-[#ffffff] border-t w-full py-12 px-12 -z-1 border-[#e3e3e3] ">
      {/* <!-- Header --> */}
      <header className="flex pb-25 justify-between items-center">
        <div className="text-gray-600 font-medium">© 2025</div>
        <button  onClick={scrollToTop} onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}} className="flex items-center gap-3 text-black font-medium hover:text-gray-900 transition-colors">
          BACK TO TOP
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </div>
        </button>
      </header>

      {/* <!-- Main Content --> */}
      <main className="flex flex-col  items-center justify-center">
        {/* <!-- Call to Action --> */}
        <div className="text-start  w-[89%] mb-16">
          <p className="text-black font-medium text-lg mb-8 tracking-wide">
            HAVE A PROJECT IN MIND?
          </p>

          {/* <!-- Large Text --> */}
          <h1 className="text-6xl left-0 -ml-3 md:text-9xl lg:text-12xl font-bold text-black leading-none tracking-tight mb-16">
            LET'S TALK
          </h1>
        </div>

        {/* <!-- Social Links --> */}
        <div className=" relative flex-row flex items-center justify-between  w-[89%]">
          <div className="flex  flex-wrap gap-4 justify-center">
            <a
            onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}
              href="https://github.com/tanmaysuradkar"
              className="px-8 py-4 border-2 border-gray-300 rounded-full text-black font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              GITHUB
            </a>
            <a
            onMouseEnter={()=>{props.sethover(true)}} onMouseLeave={()=>{props.sethover(false)}}
              href="https://www.linkedin.com/in/tanmaysuradkar/"
              className="px-8 py-4 border-2 border-gray-300 rounded-full text-black font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              LINKEDIN
            </a>
            
          </div>
          {/* <!-- Credits --> */}
          <div className="text-center text-sm text-black ">
            <p>
              Design by{" "}
              <span className="font-medium text-black">
                Tanmay Suradkar
              </span>
            </p>
            <p>
              Development by{" "}
              <span className="font-medium text-black">Tanmay Suradkar</span>
            </p>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;

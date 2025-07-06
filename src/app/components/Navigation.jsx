import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="border-b-2 border-[#000] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8.5">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-[#1e1e1e] rounded flex items-center justify-center">
              <span className="text-[#ffffff] text-sm font-bold">F</span>
            </div>
          </div>
          <nav className="hidden md:flex justify-center text-center items-center space-x-25">
            {/* <Link href="/" className="text-[#2c2c2c] hover:text-[#1e1e1e] text-sm font-medium">Home</Link>
              <Link href="/contact" className="text-[#2c2c2c] hover:text-[#1e1e1e] text-sm font-medium">Contact</Link> */}
            <Link
              href="#"
              className="font-medium relative ms-10 font-general text-[16px] text-black uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer;"
            >
              Menu
            </Link>
            
          </nav>
          <div className="flex items-center space-x-4">
            <button className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[#ffffff] px-3 border-2 text-black">
              <span className="relative inline-flex overflow-hidden font-general text-[11px] uppercase">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  RESUME
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  RESUME
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

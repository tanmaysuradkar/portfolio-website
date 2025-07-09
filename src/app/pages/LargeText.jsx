import React from "react";

const LargeText = (props) => {
  return (
    <div className="h-[73.6vh] px-3 border-t-2 border-t-black w-full text-black text-9xl leading-35 font-bold tracking-[-15px]">
      you can get in touch with me via{" "}
      <samp
        onMouseEnter={() => {
          props.sethover(true);
        }}
        onMouseLeave={() => {
          props.sethover(false);
        }}
        className=" relative after:absolute after:-bottom-[-40%] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer text-white tracking-[-6px] [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]"
      >
        mail
      </samp>{" "}
      or{" "}
      <samp
        onMouseEnter={() => {
          props.sethover(true);
        }}
        onMouseLeave={() => {
          props.sethover(false);
        }}
        className=" relative after:absolute after:-bottom-[-40%] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-105 dark:after:bg-black cursor-pointer text-white tracking-[-10px] [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]"
      >
        instagram
      </samp>{" "}
      or
  <samp
        onMouseEnter={() => {
          props.sethover(true);
        }}
        onMouseLeave={() => {
          props.sethover(false);
        }}
        className=" relative after:absolute after:-bottom-[-40%] after:left-0 after:h-[4px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]  hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-black cursor-pointer pl-10 text-white tracking-[-10px] [transform:scaleY(1.9)] [text-shadow:_1.5px_1.5px_0_black,_-1.5px_1.5px_0_black,_-1.5px_-1.5px_0_black,_1.5px_-1.5px_0_black]"
      >
        linkedIn.
      </samp>
      
    </div>
  );
};

export default LargeText;

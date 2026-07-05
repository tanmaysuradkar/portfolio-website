import React from "react";
import Image from "next/image";

const Hero = (props) => {
  return (
    <div className=" h-[100vh] w-full z-20 relative  flex justify-center items-center text-center">
      <div className="h-full w-full border-l-2 border-l-black">

        <div className="h-full relative flex justify-center items-center text-center">
          <div className="h-full relative text-start pl-5 pt-5 !text-4xl font-bold text-white flex-row sm:flex-col  uppercase w-full">
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-7xl cursor-pointer font-medium uppercase">Hi, I'm Tanmay. 👋</h1>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-2xl cursor-pointer font-medium uppercase">I’m a Software Engineer and ML Engineer. Polytechnic student learning AI/ML.</h1>
            <p onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-2xl font-bold cursor-pointer leading-4 pt-2 mt-15 my-2">About</p>
            <p onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-[10px] cursor-pointer leading-4">
              And also by side learning Full-Stack Development. I enjoy building web and mobile apps and turning ideas into real projects.

              Right now, I’m working with:

              MERN Stack (MongoDB, Express.js, React, Node.js)

              Next.js & React Native

              SQL, TypeScript

              AI/ML basics and projects


              I love learning new things, solving problems, and creating useful software from scratch.
              I’m also open to opportunities in Software Development and AI/ML where I can learn and grow.</p>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-7xl cursor-pointer hidden lg:flex absolute bottom-16 right-20 font-medium">tanmay</h1>
            <h1 onMouseEnter={() => { props.sethover(true) }} onMouseLeave={() => { props.sethover(false) }} className="text-7xl cursor-pointer hidden lg:flex absolute bottom-0 right-10 font-medium">suradkar</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

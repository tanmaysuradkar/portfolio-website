import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
const ScrollTextAnimation = (props) => {
  const ref = useRef(null);
  const [scrolls, setScrolls] = useState(0);

  const { scrollYProgress } = props.Scroll({
    target: ref,
    offset: ["start start", "start end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
     console.log(scrollYProgress)
      const anim = Math.floor(latest * 100);
      setScrolls(anim);
      console.log("Scroll progress:", anim);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div ref={ref}>
    
    <div  className="h-20 z-20 relative capitalize bg-white w-[350%] flex justify-start items-center border-t-2 overflow-x-hidden border-t-black">
      <props.motion.div
        animate={{
          x: `-${scrolls * 5}px`,
        }}
        transition={{
          type: "tween",
          ease: 'linear',
        }}
      >
        {" "}
        <h1 className="text-5xl w-[200%] flex items-center my-0.5  -ml-20 text-black font-bold">
          tanmay rahul suradkar <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text1.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp> software developer  <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text5.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp>
          tanmay rahul suradkar
        </h1>
      </props.motion.div>
    </div>
    <div className="h-20 z-20 -ml-96 relative capitalize bg-white w-[350%] flex justify-start items-center border-t-2 overflow-x-hidden  border-t-black">
      <props.motion.div
        animate={{
          x: `${scrolls * 5}px`,
        }}
        transition={{
          type: "tween",
          ease: 'linear',
        }}
      >
        {" "}
       <h1 className="text-5xl w-[200%] flex items-center -ml-70 my-0.5 text-black font-bold">
          tanmay rahul suradkar <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text2.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp> tanmay rahul suradkar  <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text4.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp>
          software developer
        </h1>
      </props.motion.div>
    </div>
    <div className="h-20 z-20 -ml-96 relative capitalize bg-white w-[350%] flex justify-start items-center border-t-2 overflow-x-hidden  border-t-black">
      <props.motion.div
        animate={{
          x: `-${scrolls * 5}px`,
        }}
        transition={{
          type: "tween",
          ease: 'linear',
        }}
      >
        {" "}
        <h1 className="text-5xl w-[200%] flex items-center my-0.5 ml-0 lg:ml-50 text-black font-bold">
          software developer <samp ><div className="h-12.5 rounded-full lg:mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text6.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp> tanmay rahul suradkar  <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text3.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp>
          tanmay rahul suradkar
        </h1>
      </props.motion.div>
    </div>
    <div className="h-20 z-20 -ml-96 relative capitalize bg-white w-[350%] flex justify-start items-center border-b-2 border-t-2 overflow-x-hidden border-b-black  border-t-black">
      <props.motion.div
        animate={{
          x: `${scrolls * 5}px`,
        }}
        transition={{
          type: "tween",
          ease: 'linear',
        }}
      >
        {" "}
        <h1 className="text-5xl w-[200%] flex items-center my-0.5  -ml-70 lg:-ml-50 text-black font-bold">
          tanmay rahul suradkar <samp ><div className="h-12.5 rounded-full lg:mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text4.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp> software developer  <samp ><div className="h-12.5 rounded-full mx-2.5 w-25 overflow-hidden bg-black"><Image src="icon/text1.jpg" className=" object-cover" alt="TailwindCss" width={144} height={30} /></div></samp>
          tanmay rahul suradkar
        </h1>
      </props.motion.div>
    </div>
    
    </div>
  );
};

export default ScrollTextAnimation;

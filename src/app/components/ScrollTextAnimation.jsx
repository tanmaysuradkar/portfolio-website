import React, { useEffect, useRef, useState } from "react";

const ScrollTextAnimation = (props) => {
  const ref = useRef(null);
  const [scrolls, setScrolls] = useState(0);

  const { scrollYProgress } = props.Scroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const anim = Math.floor(latest * 100);
      setScrolls(anim);
      console.log("Scroll progress:", anim);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <div
      
      ref={ref}
      className="h-20 w-[350%] flex justify-start items-center border-b-2 border-t-2 overflow-x-hidden border-b-black border-t-black"
    >
      <props.motion.div
        animate={{
          x: `-${scrolls * 15}px`,
        }}
        transition={{
          type: "tween",
          ease: 'linear',
        }}
      >
        {" "}
        <h1 className="text-6xl text-black font-bold">
          tanmay rahul suradkar ! tanmay rahul suradkar ?
          tanmay rahul suradkar $ tanmay rahul suradkar \ rahul suradkar.
        </h1>
      </props.motion.div>
    </div>
  );
};

export default ScrollTextAnimation;

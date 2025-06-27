import React from "react";

const Skills = () => {
  return (
    <div className="h-screen w-full p-5">
      <h1 className="text-6xl font-bold mb-3 text-black ">Things I'm good at <p className="text-xl">skills, interests, passion and hobbies</p></h1> 

      <div className="h-[92%] w-[99%] p-2 relative flex justify-center items-center">
        <div className="h-full w-1/2">
          <div className="h-[30%] mb-3 w-[98%] border-2 border-black p-5 ">
            <h1 className="text-black text-2xl capitalize font-medium">
              backend
            </h1>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              system design
            </h1>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              database
            </h1>
          </div>
        </div>
        <div className="h-[99.7%] w-1/2 ">
          <div className="h-[95%] mb-3 w-[98%] p-5 relative border-2 border-black ">
            <h1 className="text-black absolute bottom-5 text-2xl capitalize font-medium">
              fontend
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

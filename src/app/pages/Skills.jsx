import React from "react";
import Image from "next/image"

const Skills = () => {
  return (
    <div className="h-screen w-full p-5">
      <h1 className="text-6xl font-bold mb-3 text-black ">Things I'm good at <p className="text-xl">skills, interests, passion and hobbies</p></h1> 

      <div className="h-[92%] w-[99%] p-2 relative flex justify-start items-center">
        <div className="h-full w-[60%]">
          <div className="h-[30%] mb-3 relative w-[98%] border-2 border-black p-5 ">
            <h1 className="text-black text-2xl capitalize font-medium">
              backend
            </h1>
            <div className="h-[62.3%] w-full flex gap-1.5">
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/NextJs.png" alt="NextJs" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/NodeJs.png" alt="NodeJs" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/express.png" alt="express" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/FastAPI.png" alt="FastApi" width={144} height={30} />
              </div>
              
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                <h1 className="bg-blue-900 border-2 border-black absolute w-17">Postman</h1>
                  <Image src="/icon/Postman.png" alt="FastApi" width={144} height={30} />
              </div>
            </div>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              system design
            </h1>
                        <div className="h-[62.3%] w-full flex gap-1.5">
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Kubernetes.png" alt="Kubernetes" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Docker.png" alt="Docker" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Redis.png" alt="Redis" width={144} height={30} />
              </div>
            </div>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              database
            </h1>
            <div className="h-[62.3%] w-full flex gap-1.5">
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/MySQL.png" alt="MySQL" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/MongoDB.png" alt="MongoDB" width={144} height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[99.7%] w-[30%] flex-wrap ">
          <div className="h-[95%] mb-3 w-[98%] p-5 relative border-2 border-black ">
            <div className="h-[62.3%] absolute bottom-15  w-[90%] flex flex-wrap items-end gap-1.5">
              <div className="h-17 w-17 border-2 flex-wrap border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/TailwindCss.png" alt="TailwindCss" width={190} height={90} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/ReactJs.png" alt="ReactJs" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/TypeScript.png" alt="TypeScript" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/JavaScript.png" alt="JavaScript" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Java.png" alt="Java" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/gsap-min.webp" alt="gsap-min" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Github.png" alt="Github" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/ReduxJs.png" alt="Redux" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/FramerMotion.png" alt="JavaScript" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/ReactNative.png" alt="ReactNative" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/AndroidStudio.png" alt="Redux" width={144} height={30} />
              </div>
              <div className="h-17 w-17 border-2 border-black rounded-sm overflow-hidden ">
                  <Image src="/icon/Expo.png" alt="Expo" width={144} height={30} />
              </div>
            </div>
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

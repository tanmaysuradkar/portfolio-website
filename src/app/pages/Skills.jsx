import React from "react";
import Image from "next/image";
import Magnetic from "../components/magneticEffect"
const Skills = () => {
  return (
    <div className="h-screen z-20 relative bg-white pb-20 w-full p-5">
      <h1 className="text-6xl font-bold mb-3 text-black ">
        Things I'm good at{" "}
        <p className="text-xl pt-3">skills, interests, passion and hobbies</p>
      </h1>

      <div className="h-[90%] w-[99%] relative flex justify-start items-center">
        <div className="h-full w-[60%] lg:w-[50%]">
          <div className="h-[30%] mb-3.5 relative w-[98%] border-2 border-black p-5 ">
            <h1 className="text-black text-2xl capitalize font-medium">
              backend
            </h1>
            <div className="h-[62.3%] w-full grid grid-cols-3 lg:flex gap-1 lg:gap-1.5  relative">
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    NextJs
                  </h1>
                  <Image
                    src="icon/NextJs.png"
                    alt="NextJs"
                    width={144}
                    height={30}
                  />
                </div></Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    NodeJs
                  </h1>
                  <Image
                    src="icon/NodeJs.png"
                    alt="NodeJs"
                    width={144}
                    height={30}
                  />
                </div></Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    Express
                  </h1>
                  <Image
                    src="icon/express.png"
                    alt="express"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
              <Magnetic>

                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    FastApi
                  </h1>
                  <Image
                    src="icon/FastAPI.png"
                    alt="FastApi"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
              <Magnetic>

                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2  border-black rounded-sm overflow-hidden group flex justify-center items-center text-center ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    Postman
                  </h1>
                  <Image
                    src="icon/Postman.png"
                    alt="Postman"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
            </div>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              system design
            </h1>
            <div className="h-[62.3%] w-full grid grid-cols-3  lg:flex gap-1 lg:gap-1.5  relative">
              <Magnetic>

                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    Kubernetes
                  </h1>

                  <Image
                    src="icon/Kubernetes.png"
                    alt="Kubernetes"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
              <Magnetic>

                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    Docker
                  </h1>

                  <Image
                    src="icon/Docker.png"
                    alt="Docker"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
              <Magnetic>

                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                  <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                    Redis
                  </h1>

                  <Image
                    src="icon/Redis.png"
                    alt="Redis"
                    width={144}
                    height={30}
                  />
                </div>
              </Magnetic>
            </div>
          </div>
          <div className="h-[30%] mb-3 w-[98%] p-5 border-2 border-black ">
            <h1 className="text-black text-2xl capitalize font-medium">
              database
            </h1>
            <div className="h-[62.3%] w-full flex-wrap flex gap-1.5 relative">
              <Magnetic>
                 <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                  MySQL
                </h1>

                <Image
                  src="icon/MySQL.png"
                  alt="MySQL"
                  width={144}
                  height={30}
                />
              </div>
              </Magnetic>
             <Magnetic>
               <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2  hidden group-hover:flex px-1 rounded-sm border-black absolute ">
                  MongoDB
                </h1>

                <Image
                  src="icon/MongoDB.png"
                  alt="MongoDB"
                  width={144}
                  height={30}
                />
              </div>
             </Magnetic>
             
            </div>
          </div>
        </div>
        <div className="h-full w-[50%] lg:w-[30%] flex-wrap">
          <div className="h-[93.5%] lg:h-[95.9%] w-[100%] p-5 relative border-2 border-black ">
            <div className="h-[90%] relative w-[90%] grid grid-cols-2 lg:grid-cols-3 items-end gap-1">
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 flex-wrap flex justify-center items-center text-center border-black rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  TailwindCss
                </h1>

                <Image
                  src="icon/TailwindCss.png"
                  alt="TailwindCss"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  ReactJs
                </h1>

                <Image
                  src="icon/ReactJs.png"
                  alt="ReactJs"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  TypeScript
                </h1>

                <Image
                  src="icon/TypeScript.png"
                  alt="TypeScript"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  JavaScript
                </h1>

                <Image
                  src="icon/JavaScript.png"
                  alt="JavaScript"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Java
                </h1>

                <Image
                  src="icon/Java.png"
                  alt="Java"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  gsap-min
                </h1>

                <Image
                  src="icon/gsap-min.webp"
                  alt="gsap-min"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Github
                </h1>

                <Image
                  src="icon/Github.png"
                  alt="Github"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Redux
                </h1>

                <Image
                  src="icon/ReduxJs.png"
                  alt="Redux"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Framer Motion
                </h1>

                <Image
                  src="icon/FramerMotion.png"
                  alt="FramerMotion"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  ReactNative
                </h1>

                <Image
                  src="icon/ReactNative.png"
                  alt="ReactNative"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Android Studio
                </h1>

                <Image
                  src="icon/AndroidStudio.png"
                  alt="AndroidStudio"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
              <Magnetic>
                <div className="h-13 w-13 lg:h-15 lg:w-15 border-2 border-black flex justify-center items-center text-center rounded-sm overflow-hidden group  ">
                <h1 className="bg-white cursor-pointer text-black font-medium border-2 hidden group-hover:flex px-1 rounded-sm border-black absolute">
                  Expo
                </h1>

                <Image
                  src="icon/Expo.png"
                  alt="Expo"
                  width={144}
                  height={30}
                />
              </div>
                </Magnetic>
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

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-5 px-3 bg-white z-20 relative border-t-2 border-t-black">
      <div className="flex pl-10 flex-col pt-5 pb-5 lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
        <div className=" lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#1e1e1e] mb-3">About me</h3>
          <p className="text-black mb-6">Hey! I'm Tanmay Rahul Suradkar</p>
          <div className="space-y-1 text-black leading-relaxed">
            <p>
              A curious Software developer Unemployed and a creative Artist.:
            </p>
            <p>Currently diving deep into: </p>
            <p>- DSA(Data Structures & Algorithms) </p>
            <p>- Machine Learning & Deep Learning </p>
            <p>- Building cool stuff as a Full-Stack developer.</p>

            <p>When I'm not coding, you'll probably find me: </p>
            <p> - Making digital art</p>
            <p> - Playing video games</p>
            <p> - Creating fun lifestyle contant</p>
            <p> - Or just exploring cool tech updates</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#1e1e1e] mb-3">From</h3>
          <div className="space-y-1 text-black leading-relaxed">
            <p>
              Chhatrapati Sambhajinagar, maharashtra ɪɴ:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 px-5">
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Large content image"
            width={600}
            height={400}
            className="rounded-lg bg-[#d9d9d9] w-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl font-bold text-[#1e1e1e] mb-3">About me</h3>
          <p className="text-[#757575] mb-6">Hey! I'm Tanmay Rahul Suradkar</p>
          <div className="space-y-1 text-[#757575] leading-relaxed">
            <p>
              A curious Software developer and a creative Artist. From
              Chhatrapati Sambhajinagar, maharashtra ɪɴ:
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
      </div>
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
const page = () => {
  return (
        <div className="min-h-screen bg-[#ffffff]">
      <Navigation />
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12 py-10 px-4">    
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold text-[#1e1e1e] mb-3">Contact me</h3>
        <p className="text-[#757575] mb-6">Hey! I'm Tanmay Rahul Suradkar</p>
        <div className="space-y-1 text-[#757575] leading-relaxed">
          <p>
            A curious Software developer and a creative Artist. From Chhatrapati
            Sambhajinagar, maharashtra ɪɴ:
          </p>
          <p>mobile no. </p>
          <p>- (+91) 8805145192</p>

          <p>Email address</p>
          <p>- tanmaysuradkar2008@gmail.com </p>
           <p>Instagram id</p>
          <p>- tanmay_suradkar.26 </p>
           <p>github id</p>
          <p>- tanmaysuradkar</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Large content image"
                      width={600}
                      height={400}
                      className="rounded-lg bg-[#d9d9d9] w-full"
                    />
                  </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

'use client'

import React from "react";

const Aboutus = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white px-5 py-10 text-center">
      <div className="absolute w-[700px] h-[700px] max-lg:w-[600px] max-lg:h-[600px] max-md:w-[500px] max-md:h-[500px] max-sm:w-[350px] max-sm:h-[350px] rounded-full border border-gray-200 flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Middle Circle */}
        <div className="absolute w-[500px] h-[500px] max-lg:w-[430px] max-lg:h-[430px] max-md:w-[360px] max-md:h-[360px] max-sm:w-[250px] max-sm:h-[250px] rounded-full border border-gray-200" />
        {/* Inner Circle */}
        <div className="absolute w-[350px] h-[350px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[250px] max-md:h-[250px] max-sm:w-[170px] max-sm:h-[170px] rounded-full border border-gray-200" />

        {/* Dots */}
        <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 -top-1 -translate-x-1/2" />
        <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" />
        {/* <div className="absolute w-3 h-3 max-sm:w-2 max-sm:h-2 bg-green-200 shadow-[0_0_10px_rgba(209,250,229,0.5)] rounded-full left-0 top-1/3 -translate-x-1/2" /> */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-[800px]  -top-10">
        <h3 className="text-green-700 text-lg font-medium ">About us</h3>
        <div className="mb-6 py-10">
          <h2 className="text-black text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold">Redefining</h2>
          <h2 className="text-green-600 text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold">Digital Excellence</h2>
        </div>
        <p className="text-gray-600 text-xl font-semibold max-sm:text-base leading-7 mx-auto mt-4 max-w-[600px] px-4">
          At Dezprox, we harness innovation and technology to create limitless opportunities, transforming ideas into powerful digital experiences that drive success.
        </p>
      </div>

      {/* Team Members */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-[20%] left-[10%] max-lg:top-[15%] max-lg:left-[8%] max-md:top-[12%] max-md:left-[5%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <img src="/api/placeholder/64/64" alt="Team member" className="w-full h-full object-cover" />
            <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div>
          </div>
        </div>

        {/* Top Right */}
        <div className="absolute top-[20%] right-[10%] max-lg:top-[15%] max-lg:right-[8%] max-md:top-[12%] max-md:right-[5%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <img src="/api/placeholder/64/64" alt="Team member" className="w-full h-full object-cover" />
            <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[20%] left-[15%] max-lg:bottom-[15%] max-lg:left-[12%] max-md:bottom-[12%] max-md:left-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden">
            <img src="/api/placeholder/64/64" alt="Team member" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Middle Left */}
        <div className="absolute top-[40%] left-[15%] max-lg:top-[40%] max-lg:left-[12%] max-md:top-[40%] max-md:left-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden relative">
            <img src="/api/placeholder/64/64" alt="Team member" className="w-full h-full object-cover" />
            <div className="absolute w-2 h-2 bg-green-500 rounded-full right-1 bottom-1"></div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-[30%] right-[15%] max-lg:bottom-[25%] max-lg:right-[12%] max-md:bottom-[20%] max-md:right-[8%]">
          <div className="w-16 h-16 max-lg:w-14 max-lg:h-14 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10 rounded-full overflow-hidden">
            <img src="/api/placeholder/64/64" alt="Team member" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Aboutus;

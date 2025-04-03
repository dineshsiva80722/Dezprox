"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Globe, MousePointerClick, TrendingUp } from "lucide-react";


const data = [
    { name: "Marketing", value: 72, color: "#8B5CF6", change: "+19.8%", icon: TrendingUp },
    { name: "Organic search", value: 18, color: "#F59E0B", change: "-12.4%", icon: Globe },
    { name: "Direct traffic", value: 10, color: "#10B981", change: "+14.5%", icon: MousePointerClick },
  ];
  

const Vision = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className=" mb-16">
       <h2 className="text-4xl font-bold mb-4 md:text-5xl">Explore our most<br />powerful features</h2>
        <p className="text-gray-600 max-w-2xl ">
          Each feature is crafted to provide seamless integration and performance,
          ensuring a high level of functionality and efficiency.
        </p>
      </div>

      {/* Features List and Visual */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Features */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center mb-3">
              <span className="p-2 bg-gray-100 rounded-md mr-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <h3 className="font-medium">Meaningful calendar</h3>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center mb-3">
              <span className="p-2 bg-gray-100 rounded-md mr-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              <h3 className="font-medium">Insightful analytics</h3>
            </div>
            <p className="text-gray-600 ml-10">
              Our cutting-edge analytics deliver detailed trends, patterns, and actionable intelligence to help you make informed decisions.
            </p>
            {/* <div className="ml-10 mt-4 w-20 h-1 bg-gray-200 rounded"></div> */}
          </div>

          {/* Feature 3 */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center mb-3">
              <span className="p-2 bg-gray-100 rounded-md mr-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <h3 className="font-medium">Seamless integration</h3>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="pb-6">
            <div className="flex items-center mb-3">
              <span className="p-2 bg-gray-100 rounded-md mr-3">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
              <h3 className="font-medium">Effortless boards</h3>
            </div>
          </div>
        </div>

        {/* Right Column - Analytics Visual */}
        <div className="flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        <div className="relative h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl font-bold">1,248</div>
            <div className="text-gray-500">Total</div>
          </div>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold">{item.value}%</span>
                <span className={`${
                  item.change.startsWith("+") ? "text-green-600" : "text-red-600"
                } font-medium`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
      </div>
    </section>
  );
};

export default Vision;
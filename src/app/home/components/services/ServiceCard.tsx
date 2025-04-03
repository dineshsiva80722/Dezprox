// "use client";
// import React from 'react';
// import { Card } from '@/components/ui/card';

// export const ServiceCard = ({ service }: { service: any }) => {
//   const StatsIcon = service.stats.icon;

//   return (
//     <Card className="bg-white sticky top-32 w-11/12 mx-auto min-h-[33rem] rounded-lg p-10 shadow-sm">
//       <div className="flex justify-start gap-6">
//         {/* Left Column - Number and Line */}
//         <div className="flex w-4/12 flex-col">
//           <div className="w-8/12 mx-auto h-auto flex flex-col">
//             <h1 className="text-[200px] font-bold text-green-600 leading-none">
//               {service.number}
//             </h1>
//             <div className="w-full h-px bg-green-500 mt-4 relative">
//               <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-white border border-green-500" />
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Service Details */}
//         <div className="flex w-7/12 flex-col">
//           {/* Progress Bar */}
//           <div className="w-full h-px bg-gray-200 mb-8 relative">
//             <div 
//               className="h-px bg-green-500 absolute top-0 left-0" 
//               style={{ width: `${service.progress}%` }}
//             />
//             <div 
//               className="absolute -top-1 w-2 h-2 rounded-full bg-white border border-green-500"
//               style={{ right: `${100 - service.progress}%` }}
//             />
//           </div>

//           {/* Service Title and Description */}
//           <h3 className="text-5xl font-bold mb-2">{service.title}</h3>
//           <p className="text-gray-600 mb-10">{service.description}</p>

//           {/* Stats Card */}
//           <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8 w-2/3">
//             <div className="flex justify-between items-center mb-2">
//               <div className="flex items-center gap-2">
//                 <StatsIcon size={20} />
//                 <span className="font-medium">{service.stats.label}</span>
//               </div>
//               <span className="text-xs">↗</span>
//             </div>

//             <div className="flex justify-between items-center">
//               <span className="text-xl font-bold">{service.stats.value.toLocaleString()}</span>
//               <span className={`text-sm ${service.stats.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
//                 {service.stats.change > 0 ? '↗' : '↘'} {Math.abs(service.stats.change)}%
//               </span>
//             </div>

//             {/* Chart */}
//             <div className="mt-4 h-10">
//               <svg viewBox="0 0 200 40" width="100%" height="100%">
//                 <path 
//                   d="M0,30 C20,28 40,15 60,25 C80,35 100,20 120,10 C140,0 160,15 180,20 C200,25 220,15 240,10" 
//                   fill="none" 
//                   stroke={service.stats.change > 0 ? '#16A34A' : '#DC2626'} 
//                   strokeWidth="2" 
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Bottom Text and Button */}
//           <div className="flex justify-between items-center mt-auto">
//             <p className="font-medium">{service.feature}</p>
//             <div className="flex items-center">
//               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };





"use client";
import React from 'react';
import { Card } from '@/Components/ui/card';

interface Service {
  number: string;
  progress: number;
  title: string;
  description: string;
  feature: string;
  stats: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    value: number;
    change: number;
  };
}

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const StatsIcon = service.stats.icon;

  return (
    <Card className="bg-white sticky top-32 w-11/12 mx-auto min-h-[33rem] rounded-lg p-10 shadow-sm">
      <div className="flex justify-start gap-6">
        {/* Left Column - Number and Line */}
        <div className="flex w-4/12 flex-col">
          <div className="w-8/12 mx-auto h-auto flex flex-col">
            <h1 className="text-[200px] font-bold text-green-600 leading-none">
              {service.number}
            </h1>
            <div className="w-full h-px bg-green-500 mt-4 relative">
              <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-white border border-green-500" />
            </div>
          </div>
        </div>

        {/* Right Column - Service Details */}
        <div className="flex w-7/12 flex-col">
          {/* Progress Bar */}
          <div className="w-full h-px bg-gray-200 mb-8 relative">
            <div
              className="h-px bg-green-500 absolute top-0 left-0"
              style={{ width: `${service.progress}%` }}
            />
            <div
              className="absolute -top-1 w-2 h-2 rounded-full bg-white border border-green-500"
              style={{ right: `${100 - service.progress}%` }}
            />
          </div>

          {/* Service Title and Description */}
          <h3 className="text-5xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-10">{service.description}</p>

          {/* Stats Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-8 w-2/3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <StatsIcon size={20} />
                <span className="font-medium">{service.stats.label}</span>
              </div>
              <span className="text-xs">↗</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">{service.stats.value.toLocaleString()}</span>
              <span className={`text-sm ${service.stats.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {service.stats.change > 0 ? '↗' : '↘'} {Math.abs(service.stats.change)}%
              </span>
            </div>

            {/* Chart */}
            <div className="mt-4 h-10">
              <svg viewBox="0 0 200 40" width="100%" height="100%">
                <path
                  d="M0,30 C20,28 40,15 60,25 C80,35 100,20 120,10 C140,0 160,15 180,20 C200,25 220,15 240,10"
                  fill="none"
                  stroke={service.stats.change > 0 ? '#16A34A' : '#DC2626'}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Bottom Text and Button */}
          <div className="flex justify-between items-center mt-auto">
            <p className="font-medium">{service.feature}</p>
            <div className="flex items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
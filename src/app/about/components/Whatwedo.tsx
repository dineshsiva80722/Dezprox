import React from 'react';

export default function WhatWeDo() {

return (    
<section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
<div className="grid grid-cols-8 grid-rows-7 gap-2 p-4 bg-white">
  
  {/* Web Development (Col 1-2, Row 1-4) */}
  <div className="col-span-2 row-span-4 bg-gray-100 p-4 rounded-lg shadow-md relative h-[300px]">
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">Web Development</h3>
      <p className="text-xs text-gray-600">Building responsive websites.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* UI/UX Design (Col 3-4, Row 1-4) */}
  <div className="col-span-2 row-span-4 col-start-3 bg-gray-100 p-4 rounded-lg shadow-md relative" >
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">UI/UX Design</h3>
      <p className="text-xs text-gray-600">Designing user-friendly interfaces.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* E-commerce Solutions (Col 5-6, Row 1-4) */}
  <div className="col-span-2 row-span-4 col-start-5 bg-gray-100 p-4 rounded-lg shadow-md relative">
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">E-commerce</h3>
      <p className="text-xs text-gray-600">Building scalable online stores.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* SEO & Marketing (Col 7-8, Row 1-3) */}
  <div className="col-span-2 row-span-3 col-start-7 bg-gray-100 p-4 rounded-lg shadow-md relative" >
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">SEO & Marketing</h3>
      <p className="text-xs text-gray-600">Boosting online presence.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* Branding & Identity (Col 1-3, Row 5-7) */}
  <div className="col-span-3 row-span-3 col-start-1 row-start-5 bg-gray-100 p-4 rounded-lg shadow-md relative" >
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">Branding</h3>
      <p className="text-xs text-gray-600">Crafting unique identities.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* Mobile App Development (Col 4-6, Row 5-7) */}
  <div className="col-span-3 row-span-3 col-start-4 row-start-5 bg-gray-100 p-4 rounded-lg shadow-md relative">
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">Mobile Apps</h3>
      <p className="text-xs text-gray-600">Building powerful apps.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

  {/* Support & Maintenance (Col 7-8, Row 4-7) */}
  <div className="col-span-2 row-span-4 col-start-7 row-start-4 bg-gray-100 p-4 rounded-lg shadow-md relative" >
    <div className="absolute top-4 left-4">
      <h3 className="text-sm font-semibold text-gray-900">Support</h3>
      <p className="text-xs text-gray-600">Ensuring smooth performance.</p>
    </div>
    <div className="absolute bottom-4 right-4">
      <img src="https://via.placeholder.com/50" alt="Icon" className="w-10 h-10" />
    </div>
  </div>

</div>
</section>

  );
}

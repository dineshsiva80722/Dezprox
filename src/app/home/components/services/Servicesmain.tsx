import React from "react";
import { TextGenerateEffect } from '@/Components/ui/Textgenerateeffect';
import { ServiceCard } from "./ServiceCard";
import { services } from "./data/services";

export default function Servicesmain() {
  return (
    <section className="bg-[#F9FBF7] py-16 px-4 min-h-[150rem] w-full">
      <div className="container mx-auto">
        {/* Header */}
        <div className="sticky top-0  bg-transparent py-8">
          <div className="mb-10">
            <p className="text-green-600 font-medium text-center">Our Services</p>
            <TextGenerateEffect
              words="Suited for every scenario"
              as="h1"
              className="text-4xl font-bold text-center mt-2"
            />
          </div>
        </div>

        {/* Services List */}
        <section className="py-5 space-y-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      </div>
    </section>
  );
}
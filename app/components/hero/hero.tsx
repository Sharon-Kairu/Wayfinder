'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero3.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16 text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
          <span className="text-orange-500">Evidence-Driven Insights</span> for 
          <br /> Stronger Humanitarian & Development Impact
        </h1>

        <p className="text-gray-100 text-base md:text-lg leading-relaxed max-w-3xl">
          Delivering Monitoring, Evaluation, Research, and Data Systems 
          across Somalia and East Africa — empowering organizations with 
          reliable data and actionable strategies.
        </p>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => router.push('/about')}
            className="px-8 py-3 bg-orange-500 hover:bg-teal-500 transition-all duration-300 text-white font-semibold rounded-full shadow-lg"
          >
            Learn More About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

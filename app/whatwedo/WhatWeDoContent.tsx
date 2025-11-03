'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get('title');
  const desc = searchParams.get('desc');
  const img = searchParams.get('img');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-6 py-16 md:px-20">
      
      {/* Top Back Button */}
      <button
        onClick={() => router.back()}
        className="self-start mb-6 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        {title}
      </h1>

      {/* Image */}
      {img && (
        <div className="w-32 h-32 mb-8 p-5 flex items-center justify-center bg-teal-100 rounded-full">
          <Image
            src={img}
            alt={title || 'Activity image'}
            width={100}
            height={100}
            className="object-cover rounded-full"
          />
        </div>
      )}

      {/* Description with pop-up effect */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-gray-800 text-base md:text-lg leading-relaxed text-center max-w-3xl mb-12"
      >
        {desc}
      </motion.p>

      {/* Bottom Back Button */}
      <button
        onClick={() => router.back()}
        className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-all"
      >
        Back to previous
      </button>
    </div>
  );
};

export default WhatWeDoContent;

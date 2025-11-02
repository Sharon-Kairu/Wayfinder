'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const page= () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get data from query parameters
  const title = searchParams.get('title');
  const desc = searchParams.get('desc');
  const img = searchParams.get('img');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 md:px-20">
      <div className="max-w-4xl bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12 text-center relative">
        
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all"
        >
          ← Back
        </button>

        {/* Image/Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-teal-100 rounded-full flex items-center justify-center shadow-sm">
          {img && (
            <Image
              src={img}
              alt={title || 'Activity image'}
              width={80}
              height={80}
              className="object-cover rounded-full"
            />
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-blue-900 text-base md:text-lg leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default page;

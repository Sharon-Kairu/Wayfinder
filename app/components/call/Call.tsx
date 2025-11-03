'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const F: React.FC = () => {
  const router = useRouter();

  return (
    <section id='contact' className="bg-gray-50 py-16 px-6 md:px-20 text-center rounded-2xl mt-10 shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Work With Us 
      </h2>
      <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
        Let’s support your next programme with high-quality data and measurable results.
      </p>

      <div className="bg-white shadow-md rounded-2xl max-w-3xl mx-auto p-8 border-t-4 border-orange-500 text-left">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Contact Information</h3>
        <p className="text-gray-700"><span className="font-bold">Name:</span> Abdiweli Osman — Managing Director</p>
        <p className="text-gray-700"><span className="font-bold">Organization:</span> Wayfinder Research & Consultancy</p>
        <p className="text-gray-700"><span className="font-bold">Email:</span> info@wayfinderconsultancy.org / info.wayfinderconsultancy@gmail.com</p>

        

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="tel:+252612450115"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <FaPhoneAlt /> Call +252-612450115
          </a>

          <a
            href="https://wa.me/254727103426"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp /> WhatsApp +254-727103426
          </a>
        </div>
      </div>
    </section>
  );
};

export default F;

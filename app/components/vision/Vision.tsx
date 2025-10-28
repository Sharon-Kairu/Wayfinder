'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const coreValues = [
  {
    img: "/relationship.png",
    title: "Commitment to Excellence",
    desc: "We strive for the highest standards in our work, delivering exceptional consultancy services and impactful solutions.",
  },
  {
    img: "/empowerment.png",
    title: "Empowerment",
    desc: "We believe in the power of local communities and are dedicated to fostering their growth and development through training, mentorship, and support.",
  },
  {
    img: "/teamwork.png",
    title: "Collaboration",
    desc: "We work closely with international consultancies, donor agencies, and local stakeholders to ensure our projects are effective and sustainable.",
  },
  {
    img: "/trust.png",
    title: "Integrity",
    desc: "We uphold transparency, honesty, and ethical practices in all our engagements and operations.",
  },
  {
    img: "/idea.png",
    title: "Innovation",
    desc: "We embrace new ideas and approaches to address the complex challenges in the regions we serve.",
  },
  {
    img: "/teamwork (1).png",
    title: "Cultural Sensitivity",
    desc: "We respect and integrate local cultures and priorities into our projects, ensuring they are relevant and beneficial to the communities.",
  },
  {
    img: "/planting.png",
    title: "Sustainability",
    desc: "We are committed to creating lasting positive impacts that extend beyond the duration of our projects, focusing on long-term development and resilience.",
  },
];

const Vision = () => {
  return (
    <div id="vision" className="flex flex-col justify-center items-center px-6 md:px-20 py-16 mt-4 mb-4 gap-8">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* Vision Card */}
        <div className="bg-blue-900 rounded-xl p-8 flex flex-col items-center justify-start shadow-lg gap-6 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white p-4">
            <Image src="/focus.png" alt="Vision Image" width={40} height={40} className="object-contain" />
          </div>
          <h2 className="font-bold text-orange-500 text-2xl">OUR VISION</h2>
          <p className="text-white text-base leading-relaxed">
            To be the leading catalyst for sustainable development in the Horn of Africa, empowering communities and fostering transformative change through expert consultancy and impactful partnerships.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-blue-900 rounded-xl p-8 flex flex-col items-center justify-start shadow-lg gap-6 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white p-4">
            <Image src="/mission.png" alt="Mission Image" width={40} height={40} className="object-contain" />
          </div>
          <h2 className="font-bold text-orange-500 text-2xl">OUR MISSION</h2>
          <p className="text-white text-base leading-relaxed">
            We believe in the power of local communities and are dedicated to fostering their growth and development through training, mentorship, and support.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <h1 className="font-bold text-orange-500 text-2xl mt-6">Our Core Values</h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {coreValues.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-lg text-center h-full">
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white p-4 mb-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="font-bold text-orange-500 mb-2">{card.title}</h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{card.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Vision;

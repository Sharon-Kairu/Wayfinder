'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

// Define the Activity interface
interface Activity {
  img: string;
  title: string;
  desc: string;
}

const Do: React.FC = () => {
  const router = useRouter();

  const images = [
    { img: '/do_1.jpeg' },
    { img: '/do_2.jpeg' },
    { img: '/do_3.jpeg' },
    { img: '/do_4.jpeg' },
    { img: '/do_5.jpeg' },
    { img: '/do_6.jpeg' },
  ];

  const activities: Activity[] = [
    {
      img: '/data.png',
      title: 'Political Economy Analysis & Security Advisory',
      desc: `Wayfinder helps international organizations like the World Bank, EU, DFID, FCO, and the UN by providing advice on political economy, economic growth, and security in Somalia and East Africa. 
      We gather up-to-date information, understand local power structures, and create strategies to work with key local groups, even in high-risk areas.`,
    },
    {
      img: '/third-party.png',
      title: 'Third Party Monitoring & Performance Evaluation',
      desc: `Wayfinder specializes in third-party monitoring and performance evaluations using both quantitative and qualitative methods to deliver actionable insights.`,
    },
    {
      img: '/research.png',
      title: 'Research & Policy Advisory Services',
      desc: `Our multidisciplinary research network in Somalia conducts baseline assessments and studies to guide international and government programs.`,
    },
    {
      img: '/customer-care.png',
      title: 'Organizational Capacity Building & Human Resource Management',
      desc: `We provide staffing, recruitment, and HR management services to strengthen institutional performance and professional development.`,
    },
    {
      img: '/logistics-management.png',
      title: 'Operational & Logistics Management',
      desc: `Wayfinder offers logistical and operational expertise, helping clients safely access complex regions with reliable field support.`,
    },
    {
      img: '/civic.png',
      title: 'Community Engagement Strategy',
      desc: `We work closely with local communities to ensure that all projects are inclusive, trusted, and sustainable.`,
    },
  ];

  const handleExplore = (activity: Activity) => {
    router.push(
      `/whatwedo?title=${encodeURIComponent(activity.title)}&desc=${encodeURIComponent(activity.desc)}&img=${activity.img}`
    );
  };

  return (
    <div id="do" className="flex flex-col justify-center items-center bg-white py-16 px-6 md:px-12">
      <h1 className="text-blue-900 font-bold text-3xl md:text-4xl mb-10 text-center">
        WHAT WE DO
      </h1>

      {/* Sliding Images */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl mb-16"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image.img}
                alt={`Activity ${index + 1}`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/25 hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-2xl p-6 flex flex-col items-center text-center 
            shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500"
          >
            {/* Small Image/Icon */}
            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-teal-100 rounded-full shadow-sm overflow-hidden">
              <Image
                src={activity.img}
                alt={activity.title}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="font-semibold text-blue-900 text-lg md:text-xl mb-4">
              {activity.title}
            </h2>

            {/* Explore Button */}
            <button
              onClick={() => handleExplore(activity)}
              className="mt-auto bg-orange-500 text-white px-6 py-2 rounded-full font-medium 
              hover:bg-orange-600 hover:scale-105 transition-all duration-200"
            >
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Do;

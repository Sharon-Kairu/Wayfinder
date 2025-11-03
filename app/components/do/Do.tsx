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
      desc: `Wayfinder helps international organizations like the World Bank, EU, DFID, 
FCO, and the UN. They provide advice on political economy, economic 
growth, and security in Somalia and East Africa. 
Wayfinder gathers up-to-date information, understands local power 
structures, and creates strategies to work with important local groups, 
even in dangerous areas. They also offer security risk analysis, 
management planning, and ongoing advice to help these organizations 
work safely and effectively in volatile regions. 
Wayfinder gives detailed economic analysis to international and national 
organizations to help them plan economic growth programs. They have 
strong connections with private businesses and government officials. 
Wayfinder also works closely with many civil society organizations and 
NGOs in Somalia through various projects. `,
    },
    {
      img: '/third-party.png',
      title: 'Third Party Monitoring & Performance Evaluation',
      desc: `Wayfinder is an expert at third-party monitoring and checking how well things 
are working. Our team of experts has a lot of experience in looking at how well 
programs and projects are doing, making them more efficient, and reviewing 
their impact. 
We use both numbers (quantitative methods) and stories or opinions 
(qualitative methods) to understand what's happening. Our team of field 
monitors and data collectors across the region helps us get accurate 
information quickly. This helps our clients make fast decisions to improve their 
programs, even in complicated situations. 
`,
    },
    {
      img: '/research.png',
      title: 'Research & Policy Advisory Services',
      desc: `Wayfinder has built one of the most extensive and effective networks of 
multi-disciplinary researchers working in Somalia and has delivered 
formative baseline assessments on strategically themed areas to support 
the international community and the Somali government in designing 
appropriate programmes in newly recovered areas and emerging sectors of 
interest. 
Our research services combine in-depth qualitative assessments and 
quantitative surveys with systematic ground-truthing and triangulation of 
information to ensure only the highest quality of data is taken into account 
for the analysis and programme design phases. 
Our specialized consultants represent a diversity of fields with expertise in 
law, economics, financial management, public policy, security advice, and 
many other areas. 
We conduct baseline surveys to inform programme implementation as 
well as endline surveys to measure impact. 
We also conduct gender lens assessments to inform humanitarian and 
policy programs as well as child safeguard assessments. 
We also conduct environmental and social safeguard assessments to 
inform compliance to set frameworks and laws.`,
    },
    {
      img: '/customer-care.png',
      title: 'Organizational Capacity Building & Human Resource Management',
      desc: `Through our connections, we can reach many experienced professionals to 
take on various tasks. We understand that respect is crucial in today's fast- 
changing work environment. For people to do their best, we believe they 
need to be creatively empowered. 
Wayfinder is a network of professionals with many years of experience in 
organizational development, management, and training. We also specialize 
in website development. We offer expertise, skills, and techniques to help 
individuals and organizations tackle social development challenges in 
Somalia. 
For managing human resources, Wayfinder can use its network of 
consultants and staff to handle all administrative tasks. We can meet 
staffing needs and address any HR issues that come up. 
Wayfinder has a fully developed HR policy. We currently have 12 
permanent staff and 30 data collectors. Our team is experienced in 
management. We conduct job evaluations and grading to meet our clients' 
specific needs. It usually takes us four to six weeks to complete recruitment 
assignments, depending on the method used. During this process, we 
analyze individual jobs and outline job descriptions. 
`,
    },
    {
      img: '/logistics-management.png',
      title: 'Operational & Logistics Management',
      desc: `Wayfinder is a full-service consultancy firm. We provide technical expertise 
and also handle all operations and logistics on the ground. With over eight 
years of experience in difficult regions, we know the Somali context very 
well and take responsibility for operations, logistics, and security. 
We have a strong history of working with international organizations, 
helping them access areas that would be difficult to reach without our help. `,
    },
    {
      img: '/civic.png',
      title: 'Community Engagement Strategy',
      desc: `Wayfinder is a full-service consultancy firm. We provide technical expertise 
and also handle all operations and logistics on the ground. With over eight 
years of experience in difficult regions, we know the Somali context very 
well and take responsibility for operations, logistics, and security. 
We have a strong history of working with international organizations, 
helping them access areas that would be difficult to reach without our help.`,
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

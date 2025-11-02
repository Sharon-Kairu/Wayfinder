'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const team = [
  {
    name: 'Abdiweli Osman Abdi',
    role: 'Managing Director',
    bio: `Abdiweli Osman Abdi is a Development and M&E expert with over 10 years of progressive experience in programme evaluations, social research, and data analytics in development and emergency contexts across the Horn of Africa. 
He has extensive expertise in the management and evaluation of projects in protection, food security, WASH, climate change, and livelihoods. 
He is experienced in designing and implementing gender-sensitive monitoring systems with strong knowledge of IASC Gender and GBV guidelines. 
He holds a Master’s in Development Studies, a Post-Graduate Diploma in Monitoring & Evaluation, and a Bachelor of Arts in Sociology. 
He has significant hands-on experience in quantitative and qualitative research methods, advanced data analysis, and high-quality report writing. 
Abdiweli has worked with INGOs, UN agencies, and donors like the EU, WB, and USAID across Somalia and Kenya, leading major evaluations and assessments involving multi-sectoral themes. 
A native Somali fluent in English, Swahili, and Arabic.`,
  },
  {
    name: 'Adan Noor Hussein',
    role: 'Head of Programs',
    bio: `Adan Noor Hussein is a humanitarian programme leader with extensive experience coordinating field operations, partner engagement, and community-based research activities across Somalia. 
He has a strong track record supervising enumerators, ensuring quality control, applying safeguarding standards, and ensuring accurate and ethical data collection in complex environments. 
He holds a Master’s Degree in Development Studies, a Bachelor of Science in Psychology, and has undergone specialised training in Monitoring & Evaluation and Child Psychology. 
Adan is highly skilled in community entry, operational logistics, stakeholder engagement, team supervision, and delivery of multi-district research assignments. 
He has supported numerous TPM, baseline, labour market, WASH, and livelihoods assessments, ensuring full methodological compliance and timely reporting. 
A Somali native speaker, fluent in English and experienced in overseeing large field teams.`,
  },
  {
    name: 'Anis Yussuf Ibrahim',
    role: 'M&E and Environmental Specialist',
    bio: `Anis Yussuf Ibrahim is a Monitoring, Evaluation, and Environmental Governance specialist with extensive experience conducting research, surveys, and environmental assessments in fragile and hard-to-reach areas across Somalia. 
He holds an MSc in Environmental Governance and a BSc in Environmental Management and Conservation. 
Anis has strong expertise in data analysis using SPSS, PowerBI, and Excel, and is experienced with GIS and remote sensing tools including ArcMap, ENVI, and ArcGIS. 
He has supported donor-funded programmes in agriculture, climate resilience, WASH, livelihoods, and social protection, leading baseline studies, TPM missions, environmental screening, field coordination, and training of enumerators. 
Fluent in Somali, English, and Swahili, with strong reporting and facilitation skills.`,
  },
  {
    name: 'Mohamed Elmoge',
    role: 'Data Analyst',
    bio: `Mohamed Elmoge is a data and information management specialist with strong experience supporting monitoring, evaluations, and field research through digital data systems and advanced analytics. 
He holds a Master’s in Monitoring & Evaluation, a Bachelor’s degree in Business Administration, and a Post-Graduate Diploma in Statistics with professional training in Kobo, ODK, SPSS, Advanced Excel, and PowerBI. 
Mohamed designs survey tools, programs digital data collection platforms, conducts data cleaning and validation, and performs statistical and visual analysis for research assignments. 
He generates dashboards, summary visuals, and analytical reports that support donor reporting and evidence-based decision-making. 
Reliable, detail-oriented, and fluent in Somali and English, he provides data quality control and remote support to field teams across multiple regions.`,
  },
  {
    name: 'Yasmin Hassan',
    role: 'Head of Finance & Operations',
    bio: `Yasmin Hassan is a finance and operations professional with strong experience managing financial systems, HR procedures, logistics, and procurement for humanitarian and development programmes in Somalia. 
She holds a Bachelor’s Degree in Finance and a Master’s in Business Administration, with professional certifications in financial reporting, procurement, and organisational compliance. 
Yasmin oversees budgeting, payments, payroll, procurement documentation, compliance checks, asset tracking, and field logistics. 
She supports audits, maintains financial records, and ensures alignment with donor financial rules and organisational policies. 
She also manages HR files, enumerator contracting, field allowances, transport coordination, and administrative support for research teams working in Mogadishu and regional locations. 
Fluent in Somali and English, Yasmin ensures smooth operational support and financial accountability across all projects.`,
  },
];

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

const page = () => {
  const router = useRouter();
  const [selectedBio, setSelectedBio] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div id="about" className="bg-gradient-to-b from-white via-teal-50 to-white">
      {/* Back button (top) */}
      <div className="flex justify-start px-6 md:px-20 py-4">
        <button
          onClick={() => router.back()}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition font-medium"
        >
          ← Back
        </button>
      </div>

      {/* Who are we section */}
      <div className="bg-blue-900 text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center text-center rounded-2xl shadow-lg mx-4 mt-4">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          Who Are We
        </h1>
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-gray-100">
          Wayfinder Research & Consultancy is a Somalia-based M&E and
          research firm providing high-quality evidence for humanitarian and
          development programming. Since 2018, we have supported UN agencies,
          INGOs, and governments to design stronger, data-driven interventions
          in Somalia and across East Africa.
        </p>
      </div>

      {/* Vision & Mission */}
      <div id="vision" className="flex flex-col justify-center items-center px-6 md:px-20 py-16 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center p-4 mb-4">
              <Image src="/focus.png" alt="Vision" width={50} height={50} />
            </div>
            <h2 className="text-orange-500 font-bold text-2xl mb-2">Our Vision</h2>
            <p className="text-gray-100">
              To be the leading catalyst for sustainable development in the Horn of Africa,
              empowering communities and fostering transformative change through expert consultancy and impactful partnerships.
            </p>
          </div>

          <div className="bg-blue-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center p-4 mb-4">
              <Image src="/mission.png" alt="Mission" width={50} height={50} />
            </div>
            <h2 className="text-orange-500 font-bold text-2xl mb-2">Our Mission</h2>
            <p className="text-gray-100">
              We believe in the power of local communities and are dedicated to fostering their growth
              and development through training, mentorship, and support.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h1 className="text-orange-500 font-bold text-2xl mt-10 mb-4">Our Core Values</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl"
        >
          {coreValues.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image src={card.img} alt={card.title} width={60} height={60} />
                </div>
                <h2 className="text-orange-500 font-bold mb-2">{card.title}</h2>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Team Section */}
      <div className="px-6 md:px-20 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10">
          Meet The Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition flex flex-col items-center border-t-4 border-orange-500">
              <Image src="/profile.png" alt={member.name} width={100} height={100} className="rounded-full border-4 border-teal-500 mb-4" />
              <h2 className="text-blue-900 font-bold text-lg">{member.name}</h2>
              <p className="text-teal-600 mb-4">{member.role}</p>
              <button
                onClick={() => {
                  setSelectedName(member.name);
                  setSelectedRole(member.role);
                  setSelectedBio(member.bio);
                }}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition mt-auto"
              >
                View Bio
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedBio && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-6">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedBio(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">{selectedName}</h2>
            <p className="text-orange-500 mb-4">{selectedRole}</p>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{selectedBio}</p>
          </div>
        </div>
      )}

      {/* Back button (bottom) */}
      <div className="flex justify-center py-8">
        <button
          onClick={() => router.back()}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition font-medium"
        >
          ← Back to Previous Page
        </button>
      </div>
    </div>
  );
};

export default page;

'use client'
import React,{useState} from 'react';
import { motion } from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules';

type Group = {
  classification: string;
  timeline: string;
  desc: string;
};


const Experiences = () => {
  const [selected, setSelected] = useState<Group | null>(null);
  const groups = [
    {   
      classification: 'WASH needs assessment across Somalia',
      timeline: 'October 2023 - December 2023',
      desc: `Research and assessment services for UNICEF Programs in Somalia. 
      These services provide independent assessment of WASH needs in Somalia. 
      They use both quantitative and qualitative methods for routine checks, baseline surveys, 
      socio-economic studies, and performance measurements.`,
    },
    {
     
      classification: 'WASH needs assessment in Kahda district of Banadir region, Somalia',
      timeline: 'April 2024 - May 2024',
      desc: `Conducted WASH needs assessment for IDPs and host communities in Kahda district, Mogadishu. 
      This was done using qualitative and quantitative techniques, observations, and document reviews.`,
    },
    {
      
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'December 2018 - December 2021',
      desc: `A consortium made up of Wayfinder, Particip, and Axiom conducted third-party monitoring and 
      evaluation of EU-funded projects across all regions and districts of Somalia. 
      These projects covered various areas, including education, resilience, infrastructure, WASH, social policy, 
      health, communication for development, peacebuilding, democratization, public sector development, and livelihoods.`,
    },
    {
     
      classification: 'Third-party Monitoring and Evaluation',
      timeline: 'May 2022 - September 2022',
      desc: `Third-party monitoring of SIDA-funded “Humanitarian response for internally displaced persons 
      and host communities in Somalia.”`,
    },
    {
    
      classification: 'Assessment on Accountability to Affected Populations Across Somalia',
      timeline: 'September 2022 – December 2023',
      desc: `Wayfinder conducted assessments in 22 districts across all Somali states to evaluate 
      accountability to affected populations. 
      This included quantitative household surveys, qualitative interviews, and desk reviews.`,
    },
    {
      
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'September 2020 - November 2022',
      desc: `Research and evaluation services to help strengthen smallholder
        farming in Somalia. We will offer an independent view and reach
        areas that WFP/FAO staff can't access because of security concerns.`,
    },
    {
    
      classification: 'Operational & Logistics Management',
      timeline: ' March 2017 - December 2018',
      desc: `Wayfinder partnered with IFC, World Bank Group to facilitate and
        support Public-Private Dialogue in Somalia’s economic recovery
        sector. Recent support includes aiding the telecommunications
        sector and providing strategic advice to move the National
        Communication Act towards submission and approval by the
        National Federal Parliament. Wayfinder also advises IFC-World Bank
        on the Somalia context, political economic analysis, and business
        development.`,
    },
    {
      
      classification: 'Community Engagement Strategy',
      timeline: 'October 2017 - November 2018',
      desc: `A district baseline assessment, including conflict and clan mapping,
        was conducted in Kismayo and Garbaharey districts of Jubbaland
        State, Somalia.`,
    },
    {
      
      classification: 'Political Economy Analysis & Security Advisory',
      timeline: 'August 2017 - January 2018',
      desc: `A consortium of CMC and Wayfinder Consultancy conducted a peace
        and conflict assessment (PCA) in Kismayo, Somalia, for the Somali
        Reintegration Programme (GIZ SRP) and the Fish for Nutrition
        Project (GIZ FNP).`,
    },
    {
      
      classification: 'Operational & Logistics Management',
      timeline: 'May 2018 - August 2018',
      desc: `Conducted the final evaluation of the "Strengthening Civil Society
        and Public Engagement in Somalia" (SCOPES) project to assess its
        performance and achievements against the overall and specific
        objectives, and to identify factors of success or failure, following the
        OECD DAC Evaluation Criteria.`,
    },
    {
      
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'May 2016 - July 2016',
      desc: `Conducted an external evaluation of the emergency response for
        disaster-affected IDPs and host communities, implemented by
        Solidarites International in Lower Juba.`,
    },
    {
      
      classification: 'Political Economy Analysis & Security Advisory',
      timeline: ' January 2016 - December 2017',
      desc: `Provided security advisory services on a need basis for Jubbaland, Somalia.`,
    },
    {
  
      classification: 'Formative Research & Policy Advisory Service',
      timeline: 'December 2015 - January 2017',
      desc: `A consortium of ALTAI and Wayfinder conducted an Accountability
        Perception Survey in Somalia for DFID/Mott McDonald, including
        implementation and analysis.`,
    },
    { 
      classification: 'Somalia Monitoring & Learning Project-2 (SMLP-2) – USAID/BHA',
      timeline: 'May 2015 - January 2016',
      desc: `A consortium of INTEGRITY, AXIOM, and Wayfinder conducted
        research on accountability mechanisms along the supply chains of
        sesame and sugar in Kismayo, Somalia. This work was part of the
        DFID/Mott McDonald’s Implementation and Analysis of the
        Accountability Programme (IAAAP) in Somalia`,
    },
    {
      classification: 'Third-Party Monitoring (TPM) & Learning – USAID/BHA (SMLP-2)',
      timeline: '2022–2026',
      desc: `National third-party monitoring and learning for BHA-funded humanitarian programs in Mogadishu, Baidoa, Kismayo, Bardhere, and other hubs. Includes field verification, beneficiary perception surveys, CRM checks, learning briefs, and adaptive monitoring systems.`,
    },
    {
      classification: 'TPM of SIDA-Funded Humanitarian Response – Islamic Relief Sweden',
      timeline: '2022–2023',
      desc: `Independent monitoring missions in Berdale and Dinsoor verifying food security, WASH, protection, and shelter. Included household interviews, FGDs, DAC scoring, and accountability checks.`,
    },
    {
      classification: 'Inclusive Education Disability Baseline – SOS Children’s Villages Somalia',
      timeline: '2024–2025',
      desc: `Baseline evaluating inclusive education for children with disabilities in Baidoa. Included accessibility, teacher capacity, and measurable indicators for improvement.`,
    },
    {
      classification: 'Gender-Focused WASH Barriers Assessment – Multiple Partners',
      timeline: '2024',
      desc: `Assessed gender-specific WASH access constraints in Banadir, Baidoa, Balcad, and Hudur, focusing on safety, privacy, and disability access to guide inclusive interventions.`,
    },
    {
      classification: 'Local Labour Market Assessment (Green Jobs & MSMEs) – SOS Somalia',
      timeline: '2025',
      desc: `Study in Banadir, Baidoa, and Balcad analyzing employment trends, MSME challenges, and green economy opportunities to inform livelihood programming.`,
    },
    {
      classification: 'Baseline WASH Assessment – Serene Action for Change (SAC)',
      timeline: '2024',
      desc: `WASH infrastructure and hygiene assessment across Mogadishu IDP settlements to support emergency planning and rehabilitation.`,
    },
    {
      classification: 'Post-Campaign Communication Assessment – UNICEF & Partners',
      timeline: '2023',
      desc: `Evaluated communication campaigns on public health awareness, behaviour change, and message reach across South-Central Somalia.`,
    },
    {
      classification: 'Accountability to Affected Populations (AAP) Assessment – UNICEF',
      timeline: 'Sept–Oct 2022',
      desc: `22-district assessment analyzing awareness, inclusiveness, and feedback mechanisms to inform UNICEF’s AAP improvement strategy.`,
    },
    {
      classification: 'Youth Unemployment & Peacebuilding Study – IGAD-CEWARN',
      timeline: '2021',
      desc: `Explored links between joblessness and conflict, and identified peacebuilding and livelihood pathways for youth in Mogadishu.`,
    },
    {
      classification: 'Environmental & Social Impact Assessment – Green Growth Project',
      timeline: '2025–2026',
      desc: `Full ESIA for the Canada-funded Green Growth Project in Mogadishu, Baidoa, and Balcad including risk analysis, stakeholder consultations, and ESMP development.`,
    },
    {
      classification: 'Institutional Policies & Five-Year Strategic Plan – SAINE',
      timeline: '2024–2025',
      desc: `Developed governance and operational policies (Child Protection, PSEAH, GESI, MEAL, HR, etc.) and a Strategic Plan (2025–2030) to strengthen institutional systems.`,
    },
    {
      classification: 'Learning & Evidence Generation – USAID/BHA (SMLP-2)',
      timeline: '2022–2024',
      desc: `Produced learning briefs highlighting field trends, challenges, best practices, and recommendations for humanitarian partners in Somalia.`,
    },
  ];
  // Add this above your return statement, next to partners & groups arrays:
const why = [
  {
    img: '/score.png',
    text: 'Proven delivery in complex humanitarian and development contexts',
  },
  {
    img: '/management.png',
    text: 'Strong MEAL, TPM, survey, and verification systems',
  },
  {
    img: '/genders.png',
    text: 'Gender-responsive and disability-inclusive methodologies',
  },
  {
    img: '/ethics.png',
    text: 'Ethical community engagement and safeguarding practices',
  },
  {
    img: '/high-quality.png',
    text: 'High-quality reporting with actionable recommendations',
  },
  {
    img: '/innovation.png',
    text: 'Rapid deployment and experienced Somali research teams',
  },
  {
    img: '/shield.png',
    text: 'Trusted by INGOs, UN agencies, government, and donors',
  },
];

  const partners = [
  { 
    img: '/USAID.png',
    name: 'USAID',
    testimonial: 'Wayfinder provided reliable data insights that strengthened our humanitarian response. Their professionalism and attention to detail were exceptional throughout the project.'
  },
  { 
    img: '/cewarn.png',
    name: 'CEWARN',
    testimonial: 'Through Wayfinder’s expertise, we were able to monitor conflict dynamics more effectively. Their data-driven approach helped improve our early warning systems.'
  },
  { 
    img: '/SAC.png',
    name: 'SAC',
    testimonial: 'The Wayfinder team demonstrated strong technical capacity and collaboration. Their research contributions significantly enhanced our policy decisions.'
  },
  { 
    img: '/acted.png',
    name: 'ACTED',
    testimonial: 'We appreciated Wayfinder’s commitment to accuracy and timely delivery. Their findings helped us refine our program implementation strategies.'
  },
  { 
    img: '/DFID.webp',
    name: 'DFID',
    testimonial: 'Working with Wayfinder was an excellent experience. Their analysis provided actionable insights that informed our development programming.'
  },
  { 
    img: '/unicef.webp',
    name: 'UNICEF',
    testimonial: 'Wayfinder’s monitoring and evaluation support helped us measure project outcomes with precision. Their team brought clarity to complex data sets.'
  },
  { 
    img: '/ifc.webp',
    name: 'IFC',
    testimonial: 'The professionalism and methodological rigor of Wayfinder’s research were outstanding. Their reports were instrumental in shaping our strategic plans.'
  },
  { 
    img: '/SI.webp',
    name: 'Social Impact',
    testimonial: 'Wayfinder brought strong analytical skills and a practical understanding of local contexts. Their insights strengthened the overall quality of our evaluations.'
  },
  { 
    img: '/somalia_association.png',
    name: 'Somalia Association',
    testimonial: 'Our collaboration with Wayfinder resulted in actionable, evidence-based insights. Their expertise continues to influence our ongoing initiatives.'
  },
  { 
    img: '/undp.webp',
    name: 'UNDP',
    testimonial: 'Wayfinder’s evaluations have consistently added value to our programs. Their data-driven approach supports impactful and sustainable interventions.'
  },
  { 
    img: '/ifc.webp',
    name: 'IFC (Duplicate)',
    testimonial: 'Again, Wayfinder’s technical support and research guidance were top-notch. Their findings continue to guide our project evaluations effectively.'
  },
  { 
    img: '/fao.png',
    name: 'FAO',
    testimonial: 'Wayfinder provided accurate agricultural and food security assessments. Their work directly contributed to better resource allocation and planning.'
  },
  { 
    img: '/eu.webp',
    name: 'European Union',
    testimonial: 'Wayfinder’s monitoring systems improved the transparency and efficiency of our development projects across the region. A dependable research partner.'
  },
  { 
    img: '/SCC.webp',
    name: 'SCC',
    testimonial: 'The Wayfinder team offered valuable data insights that informed our community resilience programs. Their reports were concise, timely, and impactful.'
  },
  { 
    img: '/islamic.webp',
    name: 'Islamic Relief',
    testimonial: 'Wayfinder’s collaboration was instrumental in evaluating our humanitarian efforts. Their detailed reporting helped us enhance our project outcomes.'
  },
  { 
    img: '/giz.webp',
    name: 'GIZ',
    testimonial: 'We valued Wayfinder’s evidence-based recommendations and professional execution. Their data insights were critical for our program decision-making.'
  },
  { 
    img: '/mott.webp',
    name: 'Mott Foundation',
    testimonial: 'Wayfinder delivered high-quality data analysis and research support. Their commitment to accuracy and reliability made them an exceptional partner.'
  }
];

  
  return (
    <div id="experience" className="w-full py-10 mt-10">
      <h2 className="text-center text-blue-900 font-bold text-3xl mb-8">Our Experience Portfolio</h2>
      <div className="w-full py-12 relative">

  {/* Continuous scrolling container */}
  <div className="overflow-hidden m-6">
    <div className="flex animate-marquee gap-6">
      {groups.concat(groups).map((group, index) => ( // duplicate for seamless scroll
        <div
          key={index}
          className="bg-white rounded-xl shadow-md flex flex-col justify-between items-center p-6 border-t-4 border-orange-500 min-w-[250px]"
        >
          <h3 className="text-orange-600 font-semibold text-lg text-center mb-2">
            {group.classification}
          </h3>
          <p className="text-sm text-blue-900 italic mb-4 text-center">
            {group.timeline}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
            onClick={() => setSelected(group)}
          >
            View Project
          </button>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {selected && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full relative">
        <button
          onClick={() => setSelected(null)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">{selected.classification}</h2>
        <p className="text-sm text-blue-900 italic mb-4 text-center">{selected.timeline}</p>
        <p className="text-gray-700 text-base leading-relaxed text-center">{selected.desc}</p>
      </div>
    </div>
  )}

  {/* Full experience button */}
  <div className="flex justify-center mt-8">
    <a
      href="/full-experience"
      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
    >
      View Full Experience
    </a>
  </div>

  {/* Marquee animation */}
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      min-width: max-content;
      animation: marquee 140s linear infinite;
    }
  `}</style>
</div>


      {/*Why*/}
      <div className="flex flex-col p-6 bg-blue-900 shadow-lg m-6 rounded-2xl">
        <h1 className='text-center text-white font-bold mb-4 text-xl md:text-2xl'>Why Partners Choose Wayfinder</h1>
        {/* Checklist Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md col-span-1 lg:col-span- transition-transform duration-300 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-orange-500 hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow mb-4">
                <img
                  src={item.img}
                  alt="why choose wayfinder"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
      {/*Partners*/}
      <h2 className="text-center text-blue-900 font-bold text-3xl mt-16 mb-10">
        Our Valued Partners
      </h2>

      <div className="w-full bg-white py-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center p-8 mx-4 h-full">
                <div className="">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    width={50}
                    height={50}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-blue-900 font-semibold text-lg mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {partner.testimonial}
                </p>
                <div className="mt-2 w-12 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>
    
  </div>
  );
};

export default Experiences;

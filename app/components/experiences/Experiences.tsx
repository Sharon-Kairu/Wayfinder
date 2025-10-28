'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Experiences = () => {
  const groups = [
    {
      img: '/UNICEF.png',
      classification: 'WASH needs assessment across Somalia',
      timeline: 'October 2023 - December 2023',
      desc: `Research and assessment services for UNICEF Programs in Somalia. 
      These services provide independent assessment of WASH needs in Somalia. 
      They use both quantitative and qualitative methods for routine checks, baseline surveys, 
      socio-economic studies, and performance measurements.`,
    },
    {
      img: '/scc.jpg',
      classification: 'WASH needs assessment in Kahda district of Banadir region, Somalia',
      timeline: 'April 2024 - May 2024',
      desc: `Conducted WASH needs assessment for IDPs and host communities in Kahda district, Mogadishu. 
      This was done using qualitative and quantitative techniques, observations, and document reviews.`,
    },
    {
      img: '/europe_union.png',
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'December 2018 - December 2021',
      desc: `A consortium made up of Wayfinder, Particip, and Axiom conducted third-party monitoring and 
      evaluation of EU-funded projects across all regions and districts of Somalia. 
      These projects covered various areas, including education, resilience, infrastructure, WASH, social policy, 
      health, communication for development, peacebuilding, democratization, public sector development, and livelihoods.`,
    },
    {
      img: '/Islamic_Relief.png',
      classification: 'Third-party Monitoring and Evaluation',
      timeline: 'May 2022 - September 2022',
      desc: `Third-party monitoring of SIDA-funded “Humanitarian response for internally displaced persons 
      and host communities in Somalia.”`,
    },
    {
      img: '/UNICEF.png',
      classification: 'Assessment on Accountability to Affected Populations Across Somalia',
      timeline: 'September 2022 – December 2023',
      desc: `Wayfinder conducted assessments in 22 districts across all Somali states to evaluate 
      accountability to affected populations. 
      This included quantitative household surveys, qualitative interviews, and desk reviews.`,
    },
    {
      img: '/FAO.png',
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'September 2020 - November 2022',
      desc: `Research and evaluation services to help strengthen smallholder
        farming in Somalia. We will offer an independent view and reach
        areas that WFP/FAO staff can't access because of security concerns.`,
    },
    {
      img: '/ifc.png',
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
      img: '/undp.png',
      classification: 'Community Engagement Strategy',
      timeline: 'October 2017 - November 2018',
      desc: `A district baseline assessment, including conflict and clan mapping,
        was conducted in Kismayo and Garbaharey districts of Jubbaland
        State, Somalia.`,
    },
    {
      img: '/giz.jpg',
      classification: 'Political Economy Analysis & Security Advisory',
      timeline: 'August 2017 - January 2018',
      desc: `A consortium of CMC and Wayfinder Consultancy conducted a peace
        and conflict assessment (PCA) in Kismayo, Somalia, for the Somali
        Reintegration Programme (GIZ SRP) and the Fish for Nutrition
        Project (GIZ FNP).`,
    },
    {
      img: '/care.jpg',
      classification: 'Operational & Logistics Management',
      timeline: 'May 2018 - August 2018',
      desc: `Conducted the final evaluation of the "Strengthening Civil Society
        and Public Engagement in Somalia" (SCOPES) project to assess its
        performance and achievements against the overall and specific
        objectives, and to identify factors of success or failure, following the
        OECD DAC Evaluation Criteria.`,
    },
    {
      img: '/solidarities.png',
      classification: 'Third Party Monitoring & Performance Evaluation',
      timeline: 'May 2016 - July 2016',
      desc: `Conducted an external evaluation of the emergency response for
        disaster-affected IDPs and host communities, implemented by
        Solidarites International in Lower Juba.`,
    },
    {
      img: '/acted.png',
      classification: 'Political Economy Analysis & Security Advisory',
      timeline: ' January 2016 - December 2017',
      desc: `Provided security advisory services on a need basis for Jubbaland, Somalia.`,
    },
    {
      img: '/mott.png',
      classification: 'Formative Research & Policy Advisory Service',
      timeline: 'December 2015 - January 2017',
      desc: `A consortium of ALTAI and Wayfinder conducted an Accountability
        Perception Survey in Somalia for DFID/Mott McDonald, including
        implementation and analysis.`,
    },
    {
      img: '/DFID.jpg',
      classification: 'Formative Research & Policy Advisory Service',
      timeline: 'May 2015 - January 2016',
      desc: `A consortium of INTEGRITY, AXIOM, and Wayfinder conducted
        research on accountability mechanisms along the supply chains of
        sesame and sugar in Kismayo, Somalia. This work was part of the
        DFID/Mott McDonald’s Implementation and Analysis of the
        Accountability Programme (IAAAP) in Somalia`,
    },
  ];

  return (
    <div id="experiences" className="w-full py-10 mt-10">
      <h2 className="text-center text-blue-900 font-bold text-3xl mb-8">Our Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {groups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-center p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 flex justify-center items-center rounded-lg mb-4">
              <img
                src={group.img}
                alt={group.classification}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <h3 className="text-orange-600 font-semibold text-lg text-center mb-2">
              {group.classification}
            </h3>
            <p className="text-sm text-blue-900 italic mb-2 text-center">{group.timeline}</p>
            <p className="text-gray-700 text-sm leading-relaxed text-center">{group.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

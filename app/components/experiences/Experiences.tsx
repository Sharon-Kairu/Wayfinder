'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Experiences = () => {
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
  const partners = [
  { img: '/USAID.png' },
  { img: '/cewarn.png' },
  { img: '/SAC.png' },
  { img: '/acted.png' },
  { img: '/dfid.jpg' },
  { img: '/unicef.webp' },
  { img: '/ifc.webp' },
  { img: '/si.webp' },
  { img: '/somalia_association.png' },
  { img: '/undp.webp' },
  { img: '/ifc.webp' },
  { img: '/fao.jpg' },
  { img: '/islamic.webp' },
  { img: '/dfid.jpg' },
  { img: '/giz.webp' },
  { img: '/mott.webp' }
];

  return (
    <div id="experiences" className="w-full py-10 mt-10">
      <h2 className="text-center text-blue-900 font-bold text-3xl mb-8">Our Experience Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {groups.map((group, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-center p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: 'spring',
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            

            <h3 className="text-orange-600 font-semibold text-lg text-center mb-2">
              {group.classification}
            </h3>
            <p className="text-sm text-blue-900 italic mb-2 text-center">{group.timeline}</p>
            <p className="text-gray-700 text-sm leading-relaxed text-center">{group.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-6 bg-blue-900 shadow-lg m-6 rounded-2xl">
  {/* Title Card */}
  <div className="bg-white flex items-center justify-center m-3 p-6 rounded-2xl shadow-md col-span-1 lg:col-span-1 text-center transition-transform duration-300 hover:scale-105">
    <h3 className="text-orange-600 font-bold text-2xl md:text-4xl leading-tight">
      Why Partners <br /> Choose Wayfinder
    </h3>
  </div>

  {/* Checklist Card */}
  <div className="bg-white p-8 rounded-2xl shadow-md col-span-1 lg:col-span-3 transition-transform duration-300 hover:scale-105">
    <ul className="space-y-4 text-gray-700 leading-relaxed">
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        Proven delivery in complex humanitarian and development contexts
      </li>
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        Strong MEAL, TPM, survey, and verification systems
      </li>
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        Gender-responsive and disability-inclusive methodologies
      </li>
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        Ethical community engagement and safeguarding practices
      </li>
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        High-quality reporting with actionable recommendations
      </li>
      <li className="flex items-start">
        <span className=" font-bold text-xl mr-3">✔</span>
        Rapid deployment and experienced Somali research teams
      </li>
      <li className="flex items-start">
        <span className="font-bold text-xl mr-3">✔</span>
        Trusted by INGOs, UN agencies, government and donors
      </li>
    </ul>
  </div>
</div>


      <h2 className="text-center text-blue-900 font-bold text-3xl mt-3 mb-8">Our Valued Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
        {partners.map((partner, index) => (
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
                src={partner.img}
                alt='partner'
                className="max-w-full max-h-full object-contain"
              />
            </div>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

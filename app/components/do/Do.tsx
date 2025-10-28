import React from 'react'

const Do = () => {
  const activities = [
    {
      img: '/do_1.jpeg',
      title: '1. Political Economy Analysis & Security Advisory',
      desc: `Wayfinder helps international organizations like the World Bank, EU, DFID, FCO, and the UN by providing advice on political economy, economic growth, and security in Somalia and East Africa. 
      We gather up-to-date information, understand local power structures, and create strategies to work with key local groups, even in high-risk areas. 
      Our services also include security risk analysis, management planning, and ongoing advisory to help organizations work safely and effectively. 
      Additionally, we deliver detailed economic analysis for international and national organizations to support planning of economic growth programs, with strong connections to private businesses, government officials, and civil society organizations across Somalia.`
    },
    {
      img: '/do_2.jpeg',
      title: '2. Third Party Monitoring & Performance Evaluation',
      desc: `Wayfinder specializes in third-party monitoring and performance evaluations. 
      Our experienced team reviews project effectiveness, efficiency, and overall impact. 
      We use both quantitative (numbers) and qualitative (stories and insights) methods to provide a full understanding of program outcomes. 
      With a network of skilled field monitors and data collectors across the region, we deliver timely, accurate information that helps clients make data-driven decisions in complex environments.`
    },
    {
      img: '/do_3.jpeg',
      title: '3. Research & Policy Advisory Services',
      desc: `Wayfinder has built one of the most extensive and effective networks of multi-disciplinary researchers in Somalia. 
      We have conducted baseline assessments that support the international community and the Somali government in designing programs for newly recovered areas and emerging sectors of interest. 
      Our research combines in-depth qualitative studies and quantitative surveys with ground-truthing and triangulation to ensure data accuracy. 
      Our consultants have expertise in law, economics, public policy, financial management, and security. 
      We conduct baseline and endline surveys, gender and child safeguard assessments, and environmental and social safeguard assessments to support policy and program compliance.`
    },
    {
      img: '/do_4.jpeg',
      title: '4. Organizational Capacity Building & Human Resource Management',
      desc: `Wayfinder connects clients with a wide network of experienced professionals to meet staffing and organizational development needs. 
      We believe in creative empowerment and respect as the foundation of effective teamwork. 
      Our consultants are skilled in organizational development, management, training, and even web development. 
      We manage HR functions, conduct job evaluations, and provide recruitment support within 4–6 weeks depending on the approach. 
      With 12 permanent staff and 30 data collectors, we maintain a strong HR policy and proven experience in professional development and management.`
    },
    {
      img: '/do_5.jpeg',
      title: '5. Operational & Logistics Management',
      desc: `Wayfinder is a full-service consultancy firm providing technical expertise along with comprehensive operational and logistical support. 
      With over eight years of experience in fragile regions, we have deep local knowledge of the Somali context and take full responsibility for logistics, operations, and field security. 
      We have successfully helped international organizations access areas that would otherwise be difficult to reach.`
    },
    {
      img: '/do_6.jpeg',
      title: '6. Community Engagement Strategy',
      desc: `Wayfinder ensures that all projects are community-driven and inclusive. 
      We work with local leaders, community-based organizations, and youth networks to ensure active participation in project design, implementation, and evaluation. 
      This approach enhances trust, ownership, and sustainability of all development initiatives we support.`
    }
  ];
  return (
     <div id="do" className="flex flex-col justify-center items-center bg-white mt-6 mb-6 p-4 gap-8">
      <h1 className="text-blue-900 font-bold text-3xl mt-5 mb-4 text-center">WHAT WE DO</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="bg-blue-100 rounded-xl p-6 md:p-8 flex flex-col items-center justify-start shadow-lg gap-6 md:gap-10 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Left Side - Image */}
            <div className="flex items-center justify-center flex-shrink-0">
              <img
                src={activity.img}
                alt={activity.title}
                className="object-contain w-50 h-50 md:w-100 md:h-100"
              />
            </div>

            {/* Right Side - Text */}
            <div className="text-center md:text-left">
              <h2 className="font-bold text-orange-500 text-xl md:text-2xl mb-2">
                {activity.title}
              </h2>
              <p className="text-blue-900 text-base leading-relaxed">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Do
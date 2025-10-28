import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className="mt-20 flex flex-col items-center justify-center bg-white p-6">
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1  className='text-orange-600 font-bold text-2xl'>ABOUT US</h1> 
        <div className='h-2 w-30 bg-orange-600 rounded-xl'></div>  
      </div>
      <div className="bg-white p-4 md:p-10 flex flex-col justify-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Wayfinder is a research and consultancy firm started in 2009. We work with
            humanitarian and development partners to bring positive changes in the Horn of
            Africa. Our team has experts in Somalia and Kenya who can reach difficult areas.
            We focus on security, social, political, and economic development in Eastern
            Africa.
            We have worked with international consultancies and donor agencies to create
            community engagement strategies, analyze political and economic situations, and
            monitor and evaluate programs. Wayfinder is one of the few organizations that
            can access any part of Somalia and work closely with leaders at all levels. Our team
            includes experts in economic growth, agriculture, health, policy, conflict and
            security, program management, technical assistance, capacity building, and
            performance evaluation.
            Wayfinder is also committed to fostering local talent and building the capacity of
            local communities. We believe that sustainable development can only be achieved
            through the active participation and empowerment of local people. Our approach
            includes training and mentoring local professionals, supporting community-led
            initiatives, and ensuring that our projects are culturally sensitive and aligned with
            the needs and priorities of the communities we serve. By working closely with
            local stakeholders, we aim to create lasting positive impacts that extend beyond
            the duration of our projects
        </p>
      </div>
    </div>
  );
};

export default About;

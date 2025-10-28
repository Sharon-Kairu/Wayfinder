import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div
      id="home"
      className=" w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center px-10 py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero3.jpg')",
        
      }}
    >
        <div className="absolute inset-0 bg-black/40"></div>   
       <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed">
    At Wayfinder, we pride ourselves on our core values of integrity, excellence, innovation, collaboration, and community focus. Our services include Political Economy Analysis & Security Advisory, Third Party Monitoring & Performance Evaluation, Formative Research & Policy Advisory, Organizational Capacity Building, and more. We are dedicated to empowering organizations and communities through evidence-based solutions and sustainable development initiatives. Let us help you navigate complex challenges and achieve your goals.
  </p>
</div>

        
    </div>
  )
}

export default Hero
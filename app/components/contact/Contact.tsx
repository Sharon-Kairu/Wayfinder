import React from 'react'
import { MdEmail, MdCall } from "react-icons/md";
import Image from 'next/image';

const Contact = () => {
  return (
    <div id='contact' className='bg-white m-6 p-2 rounded-xl flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-orange-500 font-bold text-xl md:text-2xl '>Get it touch with us</h1>
            <div className='h-2 w-15 bg-orange-500 rounded-xl'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Image
              src='/contact.jpg'
              alt='alt'
              width={300}
              height={300}
              
              />
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex flex-row items-center justify-center'>
                    <MdCall/>
                    <p className='md:text-xl text-blue-900'>+254 727 103426</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <MdCall/>
                    <p className='md:text-xl text-blue-900'>+252 612 450115</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <MdEmail/>
                    <p className='md:text-xl text-blue-900'>info.wayfinderconsultancy@gmail.com</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <MdEmail/>
                    <p className='md:text-xl text-blue-900'>info@wayfinderconsultancy.org</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
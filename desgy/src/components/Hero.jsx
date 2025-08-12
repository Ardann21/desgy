import React from 'react'
import heroImg from '../assets/banner.svg'

const Hero = () => {
  return (
    <>
      <div id='home' className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
        <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-22'>
          <div className='flex md:w-1/3 mb-50 flex-col md:items-baseline items-center md:mx-2
            opacity-0 animate-fadeInUp animation-delay-200'>
            <button className='bg-blue-300 text-blue-600 rounded-3xl px-3 py-1 text-xl mt-12 hover:bg-black hover:text-white transition cursor-pointer'>
              Design Agency
            </button>
            <h1 className='md:text-left text-[52px] md:text-[62px] font-bold text-center mx-2 md:mx-auto mt-6'>
              Dedicated to bring your ideas to life.
            </h1>
            <button className='bg-blue-700 rounded-3xl px-3 py-1 text-xl mt-8 hover:bg-blue-900 transition text-white cursor-pointer'>
              Get Started
            </button>
          </div>
          <div className='md:flex hidden w-3/4 mt-12 opacity-0 animate-slideInFromRight animation-delay-400'>
            <img className='w-220' src={heroImg} alt="" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(300px); /* instead of 100% */
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 1s ease forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  )
}

export default Hero

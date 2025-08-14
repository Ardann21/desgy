import React from 'react'
import horn from '../assets/horn.svg'
import paint from '../assets/paint.svg'

export const Join = () => {
  return (
    <div className="relative py-24 px-4 md:px-8 bg-white overflow-hidden">
      {/* Container for the form section */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className='text-center text-blue-500 text-sm md:text-base font-semibold tracking-widest uppercase'>JOIN US</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
          Take your business to the new level.
        </h2>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Craven omni memoria patriae zombieland clairvius narcisse
          religionis sunt diru undead historiarum. Golums zombies
          unrelenting et Rami fascinati beheading.
        </p>

        {/* Form and CTA container styled as a single unit */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch max-w-xl rounded-2xl mx-auto md:rounded-full bg-gray-100 p-2 shadow-inner">
          <input
            type="text"
            placeholder="Your name"
            className="flex-1 p-4 bg-transparent focus:outline-none placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 p-4 bg-transparent focus:outline-none placeholder-gray-500"
          />
          <button className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
            Join!
          </button>
        </div>
      </div>

      
      <img
        src={paint}
        alt="Paint palette"
        className="absolute left-0 md:left-50 -translate-y-1/2 w-24 md:w-48"
      />
      <img
        src={horn}
        alt="Horn speaker"
        className="absolute top-1/2 right-0 md:right-50 -translate-y-1/2 w-24 md:w-48"
      />
    </div>
  );
};

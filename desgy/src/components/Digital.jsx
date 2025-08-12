import React from 'react'
import girldoodle from '../assets/girldoodle.svg'
import bg from '../assets/bg.svg'

const Digital = () => {
  return (
    <>
    <div className='relative flex flex-col mx-3 bg-blue-600  h-fit lg:h-120 rounded-2xl max-w-[1200px] lg:mx-auto mt-62'>
        <img className='absolute bottom-0' src={bg} alt="" />
        <div className='flex flex-col lg:flex-row '>
            <div className="flex flex-col mx-auto lg:mt-17 lg:mx-0 items-start text-white gap-6 p-8 z-10">
                <h1 className="text-lg font-semibold ">WHO WE ARE</h1>
                <p className="text-[35px] lg:text-[45px] leading-tight">
                We are a digital agency <br />
                that builds amazing products.
                </p>
                <button className="bg-white text-blue-500 rounded-2xl px-6 py-2 font-semibold">
                Get Started
                </button>
            </div>
            <div className=''><img className='lg:absolute lg:w-150 bottom-[-40px] right-0' src={girldoodle} alt="" /></div>
        </div>
    </div>

    </>
  )
}

export default Digital
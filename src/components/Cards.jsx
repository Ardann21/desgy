import React from 'react'
import swirls from '../assets/swirls.svg'
import bgg from '../assets/bgg.svg'

const Cards = () => {
  return (
    <div className="grid lg:grid-cols-2 md:auto-rows-fr gap-3 max-w-[1200px] mx-3 lg:mx-auto my-32">
      
      {/* Card 1 */}
      <div
        className="rounded-2xl p-12 flex flex-col justify-between lg:h-180 text-white bg-[#1e013a] bg-no-repeat bg-right-bottom bg-contain"
        style={{ backgroundImage: `url(${swirls})` }}
      >
        <div className='flex flex-col gap-5 '>
          <h3 className="m-0">BELIEFS</h3>
          <h2 className=" text-gray-400 leading-tight m-0 text-3xl lg:text-6xl font-bold">
            <span className="text-white">Honestly</span> and hard work are our beliefs
          </h2>
          <p className="mt-4">
            Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <button className="bg-blue-500 px-5 py-2 rounded-full self-start text-3xl">Get Started</button>
        </div>
        
      </div>

      <div
  className="rounded-2xl p-12 flex flex-col justify-between lg:h-180 text-white bg-cover bg-bottom"
  style={{ backgroundImage: `url(${bgg})` }}
>
  <div className='flex flex-col gap-5 '>
    <h3 className="m-0 text-blue-600">BUILD</h3>
    <h2 className="text-black leading-tight m-0 text-3xl lg:text-6xl  font-bold">
      <span className=" text-blue-600">Build</span> that great idea that you have.
    </h2>
    <p className="mt-4 text-black">
      Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
    <button className="bg-blue-500 px-5 py-2 rounded-full self-start text-3xl">Learn More</button>
  </div>
  
</div>

      
    </div>
  )
}

export default Cards

import React from 'react'
import spiral from '../assets/spiral.svg'
import man from '../assets/man.svg'
import comma from '../assets/comma.svg'

const Dedicated = () => {
  return (
    <>
    <div className='mt-52 relative'>
        <img className='hidden w-161 lg:flex absolute top-[-60px]' src={spiral} alt="" />
    </div>
    <div className='flex flex-col md:flex-row items-center gap-6 lg:gap-37 mx-13 max-w-[1200px] md:mx-auto'>
        <div className='md:mx-8'><img className='w-150' src={man} alt="" /></div>
        <div className='flex flex-col gap-7 relative text-center md:text-left'>
            <img className='absolute top-[-52px] w-42 left-[-92px] lg:flex hidden' src={comma} alt="" />
            <h1 className='text-3xl md:text-[52px] lg:text-[52px] font-bold'>Dedicated to help peoples design needs.</h1>
            <p className='text-xl text-gray-600'>Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis</p>
           <div className='flex gap-1 items-center mx-auto md:m-0'>
            <p className='hidden lg:flex '>━━━━━━</p>
            <p className='text-2xl'>Cathy Hills, CEO</p>
           </div>
            
        </div>
    </div>
    </>
  )
}

export default Dedicated
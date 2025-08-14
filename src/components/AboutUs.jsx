import React from 'react'
import aboutOne from '../assets/imgOne.svg'
import aboutTwo from '../assets/imgTwo.svg'
import aboutThree from '../assets/imgThree.svg'
import dots from '../assets/dots.svg'
const AboutUs = () => {
  return (
    <>
   
    <div id='about-us' className='flex flex-col text-center bg-gray-100 mx-2 gap-12 rounded-4xl max-w-[1200px] md:mx-auto'>
        <div className='mt-22'>
            <h1 className='text-2xl text-blue-500 mt-12'>ABOUT US</h1>
        <p className='text-[42px] font-bold'>Know more about us.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-12 text-center mx-6 mb-22 '>

            <div className='flex flex-col p-4 gap-6 text-left justify-baseline hover:bg-blue-950 hover:text-white transition  bg-white rounded-3xl mx-2 my-4 shadow-xl'>
            <h1 className='text-4xl font-bold'>About Us.</h1>
            <img className='w-22' src={aboutOne} alt="" />
            <p className=''>Sed ut perspiciatis unde omnis iste natus
             error sit voluptatem accusantium doloremque laudantium, totam rem</p>
             <h1 className='items-center text-xl text-blue-500'>Learn More</h1>
        </div>
        <div className='flex flex-col p-4 gap-6 text-left justify-baseline hover:bg-blue-950 hover:text-white transition  bg-white rounded-3xl mx-2 my-4 shadow-xl'>
            <h1 className='text-4xl font-bold'>Services.</h1>
            <img className='w-22' src={aboutTwo} alt="" />
            <p className=''>Sed ut perspiciatis unde omnis iste natus
             error sit voluptatem accusantium doloremque laudantium, totam rem</p>
             <h1 className='items-center text-xl text-blue-500'>Learn More</h1>
        </div>
        <div className='flex flex-col p-4 gap-6 text-left justify-baseline hover:bg-blue-950 hover:text-white transition  bg-white rounded-3xl mx-2 my-4 shadow-xl'>
            <h1 className='text-4xl font-bold'>Our Works.</h1>
            <img className='w-22' src={aboutThree} alt="" />
            <p className=''>Sed ut perspiciatis unde omnis iste natus
             error sit voluptatem accusantium doloremque laudantium, totam rem</p>
             <h1 className='items-center text-xl text-blue-600'>Learn More</h1>
        </div>

        </div>
        <div className='relative hidden  md:flex justify-center items-center'>
            <img className='absolute left-[-80px] bottom-0 w-22' src={dots} alt="" />
        </div>
        
    </div>
    </>
  )
}

export default AboutUs
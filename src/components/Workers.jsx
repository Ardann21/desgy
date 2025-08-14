import React, { useRef, useState } from 'react'
import spiral from '../assets/spiral.svg'
import user1 from '../assets/user1.svg'
import elipse from '../assets/elipse.svg'
import linkedin from '../assets/linkedin.svg'

const Workers = () => {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // adjust scroll speed here
    scrollRef.current.scrollTo({
      left: scrollLeft - walk,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      {/* Spiral heading */}
      <div className="relative md:mb-32">
        <img className="absolute right-0 rotate-180 z-0 w-32 lg:w-auto" src={spiral} alt="" />
        <h1 className="text-2xl md:text-6xl text-center font-bold z-10">We Work in Several verticals.</h1>
        <h1 className="text-2xl md:text-6xl text-center mr-18 font-bold text-gray-500 z-10">We Work in Several verticals.</h1>
        <h1 className="text-2xl md:text-6xl text-center ml-18 font-bold text-gray-300 z-10">We Work in Several verticals.</h1>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        <img
          className="absolute left-1/2  -translate-x-1/2  md:top-[-80px] z-0"
          src={elipse}
          alt=""
        />

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-10 overflow-x-auto hide-scrollbar px-6 pb-6 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...Array(8)].map((_, i) => (
           <div
  key={i}
  className="flex-shrink-0 flex flex-col gap-6 rounded-3xl p-8 justify-center mt-10 shadow-xl bg-white z-10 snap-start h-[350px] w-[250px] md:h-[450px] md:w-[350px] focus:outline-none active:outline-none select-none"
  tabIndex={-1} // prevent tab focusing if you want
>
  <div className="relative">
    <img
      className="h-52 mx-auto select-none"
      src={user1}
      alt=""
      draggable={false}
    />
    <img
      className="absolute right-0 top-8 select-none"
      src={linkedin}
      alt=""
      draggable={false}
    />
  </div>
  <div className="text-center select-none">
    <h1 className="text-2xl font-bold">John Doe</h1>
    <p className="text-lg">Co-founder</p>
  </div>
</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workers

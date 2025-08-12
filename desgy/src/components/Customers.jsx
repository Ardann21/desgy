import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import user1 from '../assets/user1.svg';
import elipse from '../assets/elipse.svg';

const Customers = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    {
      name: 'Cody Fisher',
      role: 'CEO, Parkview Int.Ltd',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      rating: 5,
      img: user1,
    },
    {
      name: 'Robert Fox',
      role: 'CEO, Parkview Int.Ltd',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      rating: 5,
      img: user1,
    },
    {
      name: 'Leslie Alexander',
      role: 'CEO, Parkview Int.Ltd',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      rating: 5,
      img: user1,
    },
    {
      name: 'Dianne Russell',
      role: 'Marketing Manager',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      rating: 5,
      img: user1,
    },
    {
      name: 'Guy Hawkins',
      role: 'Project Lead',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      rating: 5,
      img: user1,
    },
  ];

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350, // Scroll by the width of a card + gap
        behavior: 'smooth',
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350, // Scroll left by the width of a card + gap
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='testimonial' className="relative py-16">
      {/* Dynamic radial gradient for background to replace the image */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 to-transparent"></div>

      {/* Spiral heading effect */}
      <div className="relative">
        <h1 className="relative text-2xl md:text-5xl text-center font-bold z-10 text-gray-900">
          See what others are saying.
        </h1>
        <h1 className="relative text-2xl md:text-5xl text-center font-bold z-10 text-gray-500 transform -translate-y-1/2">
          See what others are saying.
        </h1>
        <h1 className="relative text-2xl md:text-5xl text-center font-bold z-10 text-gray-300 transform -translate-y-full">
          See what others are saying.
        </h1>
      </div>

      <div className="relative mt-12 flex items-center justify-center max-w-7xl mx-auto">
        <img className='absolute ' src={elipse} alt="" />
        {/* Left scroll button */}
        <button
          onClick={handleScrollLeft}
          className="absolute left-4 z-20 hidden md:block p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable testimonials container */}
        {/* The 'w-full' class here ensures the container fills the available space,
            and 'overflow-x-auto' allows the cards to be scrolled. */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-8 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing w-full px-6 pb-6 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white mt-12 rounded-3xl shadow-lg p-6 w-[300px] md:w-[350px] snap-center relative pt-14 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Profile image container */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src={t.img} alt={t.name} className="w-full h-full" />
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 text-center mb-6">{t.text}</p>

              {/* Divider */}
              <hr className="my-4 border-gray-200" />

              {/* Name, role, and stars */}
              <div className="flex flex-col items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-center">{t.name}</h4>
                  <p className="text-sm text-gray-500 text-center">{t.role}</p>
                </div>
                <div className="flex text-yellow-500 mt-2">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 z-20 hidden md:block p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Customers;

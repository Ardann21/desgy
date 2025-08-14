import React from "react";
import teamimg from "../assets/teamimg.png";
import spiral from "../assets/spiral.svg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeatureSlider from "./FeatureSldier";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Team = () => {
  return (
    <>
      {/* Header Section */}
      <div className="">
        <div className="text-center mt-60">
          <h1 className="text-6xl font-bold">
            Our team believes you deserve <br /> only the best.
          </h1>
          <p className="text-gray-500 text-2xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor
          </p>
        </div>
      
      <div className="bg-[#02398a]">

        {/* Image Banner */}
        <div className="mt-12 md:mt-40 h-65 md:h-120 relative flex justify-center">
          <div className="flex justify-center">
            <img
              className="absolute top-[-10px] md:top-[-60px] lg:top-[-350px]"
              src={teamimg}
              alt="Team"
            />
          </div>
        </div>

        {/* Spiral Text Section */}
        <div className="relative my-10  ">
          <img
            className="absolute right-0 rotate-180 z-1 w-32 lg:w-auto"
            src={spiral}
            alt="spiral"
          />
          <h1 className="text-2xl md:text-6xl text-center font-bold text-white z-10">
            We Work in Several verticals.
          </h1>
          <h1 className="text-2xl md:text-6xl text-center mr-18 font-bold text-gray-400 z-10">
            We Work in Several verticals.
          </h1>
          <h1 className="text-2xl md:text-6xl text-center ml-18 font-bold text-gray-600 z-10">
            We Work in Several verticals.
          </h1>
        </div>


        {/* Feature Slider */}
        <div className="relative pb-32">
          <FeatureSlider  />
        </div>
       
      </div>
        
       
      </div>
    </>
  );
};

export default Team;

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import feat1 from "../assets/feat1.jpg"; 
import feat2 from "../assets/feat2.jpg"; 

const features = [
  { id: 1, img: feat1, title: "Brand design for a computer brand." },
  { id: 2, img: feat2, title: "Mobile app 3d wallpaper." },
  { id: 3, img: feat1, title: "Brand design for a computer brand." },
  { id: 4, img: feat2, title: "Mobile app 3d wallpaper." },
];

export default function FeatureSlider() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount =
        direction === "left"
          ? -sliderRef.current.offsetWidth
          : sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto z-5 ">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto hide-scrollbar scrollbar-hide rounded-2xl scroll-smooth snap-x snap-mandatory gap-4 px-4 sm:px-6 md:px-8"
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="
              flex-shrink-0 
              w-1/2 
              snap-center 
              rounded-xl 
              overflow-hidden 
              shadow-lg
              min-w-[250px]
            "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-124 object-cover rounded-2xl"
            />
            <div className="p-4 ">
              <h3 className="text-2xl text-white font-semibold rounded-2xl">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

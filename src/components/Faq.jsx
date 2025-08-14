import React, { useState } from 'react';
import swirl from '../assets/swirl.png';
import { ChevronDown } from 'lucide-react'; // Using Lucide for the icon

// Data for the accordion menu
const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services, including web design, mobile app development, and digital marketing strategy."
  },
  {
    question: "How can I get a quote for a project?",
    answer: "You can get a quote by filling out the contact form on our 'Join' page or by giving us a call directly. We'll get back to you within 24 hours."
  },
  {
    question: "What is your development process like?",
    answer: "Our process begins with a discovery phase to understand your needs, followed by design, development, and a final launch with ongoing support."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide flexible support packages to ensure your project remains up-to-date and functions smoothly after launch."
  },
];

const Faq = () => {
  // State to manage the active accordion item. Null means none are open.
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the accordion item
  const toggleAccordion = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="max-w-[1240px] mx-auto my-20 px-6 relative rounded-2xl bg-blue-500 overflow-hidden text-white">
      {/* Background swirl */}
      <img
        className="absolute right-0 bottom-0 object-cover w-full h-full opacity-90"
        src={swirl}
        alt="Background swirl"
      />

      {/* Heading */}
      <div className="relative z-10 text-center py-16 md:py-20">
        <p className="uppercase text-sm tracking-widest mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently asked questions.
        </h2>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-16 md:pb-20 space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-white text-left font-semibold focus:outline-none"
            >
              {item.question}
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="p-4 pt-0 text-white/80">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

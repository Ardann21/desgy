import React from 'react'
import swirl from '../assets/swirl.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div id='faq' className="max-w-[1240px] mx-auto my-20 px-6 relative rounded-2xl bg-blue-500  overflow-hidden text-white">
      {/* Background swirl */}
      <img
        className="absolute right-0 bottom-0 object-cover w-full h-full opacity-90"
        src={swirl}
        alt=""
      />

      {/* Heading */}
      <div className="relative z-10 text-center py-22">
        <p className="uppercase text-sm tracking-widest mb-2">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently asked questions.
        </h2>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pb-42">
  <Accordion type="single" collapsible className="space-y-4">
    <AccordionItem value="item-1" className="bg-white rounded-xl p-4">
      <AccordionTrigger className="text-black">
        Can you design my site?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600">
        Yes. We can create beautiful, responsive designs tailored to your needs.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="bg-white rounded-xl p-4">
      <AccordionTrigger className="text-black">
        Can you code my site?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600">
        Absolutely! We handle both frontend and backend development.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="bg-white rounded-xl p-4">
      <AccordionTrigger className="text-black">
        Where are you located?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600">
        We work remotely with clients worldwide.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>
    </div>
  )
}

export default Faq

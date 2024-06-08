'use client'
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import TestimonialCard from "./components/TestimonialCard";
import { TestimonialItem } from "@/common/constant/TestimonialItem";
import { useScroll } from "framer-motion";
import { useTestiParallax } from "@/common/hooks/useParallax";

export default function Testimonials() {
  const {scrollY} = useScroll();
  const {x, Revx} = useTestiParallax(scrollY)
  return (
    <div className="h-auto max-w-[1500px] rounded-t-full relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex flex-col w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <SectionText
            className="!justify-center px-2"
            title="Client Testimonial"
          />
          <H1
            title="Gain insights and perspectives straight from the mouths of our satisfied customers."
            className="!text-2xl lg:!text-4xl !text-center lg:w-[70%]"
            textColor="normal"
          />
        </div>
        <div className="w-full overflow-hidden relative ">
          <TestimonialCard item={TestimonialItem} Slide={{x: x}} />
          <TestimonialCard item={TestimonialItem} Slide={{x: Revx}} />
          <div className='w-full inset-0 bg-gradient-to-l from-[#F4F4F2] from-0% to-[#f4f4f200] to-5% absolute'>
          </div>
          <div className='w-full inset-0 bg-gradient-to-r from-[#F4F4F2] from-0% to-[#f4f4f200] to-5% absolute'>
          </div>
        </div>
        
      </div>
    </div>
  );
}

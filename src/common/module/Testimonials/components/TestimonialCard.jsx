'use client'
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTestiParallax } from "@/common/hooks/useParallax";
import clsx from "clsx";
import { useScroll } from "framer-motion";
import React from "react";

export default function TestimonialCard({item, Slide}) {
  const {scrollY} = useScroll();
  const {x} = useTestiParallax(scrollY)
  return (
    <div className="flex w-full max-lg:flex-col lg:w-max relative overflow-hidden gap-5 pt-5 ">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          style={Slide}
          className={clsx(
            items.className,
            ` w-full lg:w-[400px] lg:h-auto flex items-start justify-start flex-col  gap-5 p-10 bg-[#E8E8E8] rounded-3xl  overflow-hidden`
          )}
        >
          {items.icon && (
            <div className="">
              {items.icon}
            </div>
          )}
          <div className="w-full">
            <p className="text-base text-[#7A7A7A]">{`"${items.testi}"`}</p>
          </div>
          <div className="w-full flex">
            {items.star}
          </div>
          <div className="w-full">
            <p className="text-base text-[#CCCCCC]">{items.name}</p>
            <h1 className="text-base text-[#7A7A7A]">{items.jobTitle}</h1>
          </div>

        </ComponentTransition>
      ))}
    </div>
  );
}

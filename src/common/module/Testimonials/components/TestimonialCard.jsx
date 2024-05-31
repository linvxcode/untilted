'use client'
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTestiParallax } from "@/common/hooks/useParallax";
import clsx from "clsx";
import { useScroll } from "framer-motion";
import React from "react";

export default function TestimonialCard({item}) {
  const {scrollY} = useScroll();
  const {x} = useTestiParallax(scrollY)
  return (
    <div className="flex w-full max-lg:flex-col lg:w-max relative overflow-hidden gap-5 py-10 ">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          style={{
            x
          }}
          className={clsx(
            items.className,
            ` flex  gap-5 p-10 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] overflow-hidden`
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

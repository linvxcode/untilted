'use client'
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useDekstop } from "@/common/hooks/useDekstop";
import { useTestiParallax } from "@/common/hooks/useParallax";
import clsx from "clsx";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function TestimonialCard({item, Slide, className}) {
  const isDekstop = useDekstop();
  const {scrollY} = useScroll();
  const {x} = useTestiParallax(scrollY)

  const [isScrolling, setIsScrolling] = useState(false);

  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 10); // Adjust the timeout value as per your requirement
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={`flex w-max  relative overflow-hidden gap-5 pt-5 ${className} `}>
      {item.map((items, index) => (
        <motion.div
          // delay={index * 0.1}
          key={index}
          animate={{
            skewX: isScrolling ? 6 : 0
          }}
          style={Slide}
          className={clsx(
            items.className,
            ` w-[400px] lg:h-auto flex items-start justify-start flex-col  gap-5 p-10 bg-[#E8E8E8] rounded-3xl  overflow-hidden`
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

        </motion.div>
      ))}
    </div>
  );
}

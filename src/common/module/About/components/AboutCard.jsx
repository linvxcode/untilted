'use client'
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { useTeamParallax } from "@/common/hooks/useParallax";
import { useScroll } from "framer-motion";
import React from "react";


export default function AboutCard({ item }) {
  const {scrollY} = useScroll();
  const {x} = useTeamParallax(scrollY)
  return (
    <div className="w-full py-10">
      <div className="flex w-full max-lg:flex-col lg:w-max gap-5 relative overflow-hidden ">
        {item.map((items, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            style={{
              x
            }}
            className="h-[400px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#141414] to-[#141414] w-[350px]"
          >
            <div className="w-full">
              <Image
                className="w-full h-[200px] object-cover "
                src={items.img}
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </div>
            <div className="w-full flex flex-col px-5 py-5">
              <h1 className="text-xl ">{items.name}</h1>
              <h1 className="text-sm text-[#7D7F78]">
                {items.job}
              </h1>
            </div>
            <div className="w-full px-5">
              <p className="text-sm text-[#7D7F78]">
                {items.desc}
              </p>
            </div>
          </ComponentTransition>
        ))}
      </div>
    </div>
  );
}

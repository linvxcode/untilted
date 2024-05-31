"use client";
import SectionText from "@/common/component/element/SectionText";
import { motion, useScroll } from "framer-motion";
import React from "react";
import SliderTechLeader from "../Hero/components/SliderTechLeader";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useIntroText, } from "@/common/hooks/useParallax";

export default function Introduction() {
  const {scrollY} = useScroll()
  const { TranslateX} = useIntroText(scrollY)
  return (
    <ComponentTransition className="h-auto max-w-[1500px] lg:z-[-9] relative flex flex-col justify-center px-5 lg:px-10  w-full mt-0 md:mt-20 overflow-hidden">
      <div className="w-full lg:flex-row flex-col flex lg:py-36">
        <div className="w-full lg:basis-[60%]"></div>
        <div className="w-full">
          <motion.div className="w-full overflow-hidden lg:z-[-9] py-10"
          style={{
            x: TranslateX
          }}
          >
            
            <h1
              className="text-2xl lg:text-4xl tracking-[-0.03em] leading-[120%] text-[#CCCCCC]"

            >
              Welcome to Fusion.{" "}
              <span className="!text-[#6d6d6d]">
              where trading your NFTs is as easy as a few clicks on our user-friendly platform.
              Join our vibrant community of creators and collectors as we embark on a journey 
              </span>{" "}
              of seamless digital asset transactions.
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>
    </ComponentTransition>
  );
}


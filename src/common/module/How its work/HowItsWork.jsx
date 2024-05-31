'use client'
import CardIcon from "@/common/component/element/CardIcon";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import { HowItsWorkItem } from "@/common/constant/HowItsWorkItem";
import { useMobile } from "@/common/hooks/useMobile";
import { motion } from "framer-motion";
import React from "react";


export default function HowItsWork() {
  const isMobile = useMobile()
  return (
    <ComponentTransition className='h-auto max-w-[1500px] bg-gradient-to-b from-[#8758ffb9] to-[#F2F2F2] overflow-hidden  relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full'>
    <motion.div 
    initial={{
      borderRadius: 1000,

    }}
    whileInView={{
      borderRadius: 0,
    }}

    transition={{
      type: "tween",
      ease: [0.8, 0.2, 0, 1],
      duration: 1.5,
    }}
    viewport={{once: true}}
    className="">
      <div className="flex w-full  relative justify-center items-center py-5">
        <div className="w-full flex flex-col justify-center items-center">
          <H1
            title="Top–notch designs, delivered at your doorstep."
            className="!text-2xl lg:!text-4xl lg:w-[60%] !text-center"
            textColor="white"
          />
          <div className="w-full ">
            <CardIcon item={HowItsWorkItem} />
          </div>
        </div>
      </div>
    </motion.div>
    </ComponentTransition>
  );
}

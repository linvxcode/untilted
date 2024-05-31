"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { translateInViewVariant } from "@/common/component/element/Transition";
import { Chart3Backup, Chart4Backup } from "@/common/component/svg/Chart";
import { Chart2, Visual, Chart3, Chart4 } from "@/common/component/svg/Visual";
import { useMobile } from "@/common/hooks/useMobile";
import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  const isMobile = useMobile();
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full gap-10 flex-col relative justify-start items-start">
        <ComponentTransition className="w-full h-auto lg:h-[900px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
          <div className="w-full p-3 lg:p-10 relative mt-10 flex flex-col">
            <H1
              title="Integrated Conversion Rate Monitor"
              className="text-3xl lg:!text-6xl !py-2 lg:w-[60%] !text-start"
              textColor="colorShadow"
            />
            <H1
              title="Get high-quality design work at a fraction of the cost."
              className="!text-base lg:!text-xl  !text-start"
              textColor="opacity"
            />
          </div>

          <div className="w-full relative lg:top-[-200px]">
            <Chart3 />
          </div>
        </ComponentTransition>

        {/* <ComponentTransition className="w-full h-[450px] lg:h-[1000px] overflow-hidden  bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
          <div className="w-full p-5 lg:p-10 relative mt-10 flex flex-col">
            <H1
              title="Scalable As You Grow"
              className="!text-3xl lg:!text-6xl !py-2 !text-start"
              textColor="colorShadow"
            />
            <H1
              title="Get high-quality design work at a fraction of the cost."
              className="!text-base lg:!text-xl  !text-start"
              textColor="opacity"
            />
          </div>
          <div className="w-full relative top-[-50px] lg:top-[-150px]">
            <Chart4 />
          </div>
        </ComponentTransition> */}

        <div className="w-full grid lg:grid-cols-2 gap-10">
          <ComponentTransition className="w-full h-[650px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#5a5a5a6c] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
            <div className="w-full p-2 lg:p-10 relative mt-10 flex flex-col">
              <H1
                title="Clean Design"
                className="!text-2xl lg:!text-3xl !py-2 !text-start"
                textColor="colorShadow"
              />
              <H1
                title="Step into the digital art revolution and seize the opportunity to own exclusive."
                className="!text-sm  !text-start"
                textColor="opacity"
              />
            </div>
            <motion.div
              className="w-full relative  max-lg:top-[80px]"
              initial={{ x: 100, rotate: 20 }}
              whileInView={{ x: 0, rotate: 0 }}
              transition={{
                type: "tween",
                ease: [0.8, 0.2, 0, 1],
                duration: 1.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="w-full lg:w-[64%] -rotate-12 mx-auto h-auto object-cover"
                src="/FUSION.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </motion.div>
          </ComponentTransition>

          <ComponentTransition className="w-full h-[650px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#5a5a5a6c] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
            <div className="w-full p-2 lg:p-10 relative mt-10 flex flex-col">
              <H1
                title="Responsive Design"
                className="!text-2xl lg:!text-3xl !py-2 !text-start"
                textColor="colorShadow"
              />
              <H1
                title="Are you ready to delve into the exciting realm of non-fungible tokens."
                className="!text-sm  !text-start"
                textColor="opacity"
              />
            </div>
            <motion.div
              className="w-full relative  max-lg:top-[80px]"
              initial={{ x: -100, rotate: -20 }}
              whileInView={{ x: 0, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "tween",
                ease: [0.8, 0.2, 0, 1],
                duration: 1.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="w-full lg:w-[64%] rotate-12 mx-auto h-auto object-cover "
                src="/FusionApp.png"
                alt="Fusion"
                height={400}
                width={400}
                priority
              />
            </motion.div>
          </ComponentTransition>
        </div>
      </div>
    </div>
  );
}

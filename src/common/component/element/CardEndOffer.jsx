"use client";
import React from "react";
import H1 from "./H1";
import Image from "./Image";
import { GoArrowUpRight } from "react-icons/go";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
import ComponentTransition from "./ComponentTransition";
import ButtonWarp from "./ButtonWarp";
import Link from "next/link";

export default function CardEndOffer({ className }) {
  const isMobile = useMobile();
  return (
    <ComponentTransition
      className={clsx(
        className,
        `h-auto max-w-[1500px] flex flex-col py-10 px-5 lg:px-10  w-full  overflow-hidden `
      )}
    >
      <div className="w-full relative  rounded-3xl  z-[9]  items-start h-[800px] lg:h-[500px] overflow-hidden lg:flex-row flex-col flex justify-center ">
        <div className="absolute inset-0 w-full z-[-9]">
          <Image
            className="w-full h-[800px] lg:h-[600px] "
            src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fusion"
            height={400}
            width={400}
            priority
          />
        </div>
        <div className="lg:w-[150%] gap-5 px-4 lg:px-10 pt-10 lg:py-20 flex flex-col justify-start items-start">
          <H1
            className="!items-start !w-full !justify-start text-2xl lg:!text-4xl  font-semibold text-start "
            title="Stay at the forefront of innovation with the freshest updates."
            textColor="white"
          />
          <H1
            className=" !justify-start !text-base text-start lg:w-[90%]"
            title="Encourage unconventional ideas while also having the flexibility to focus on cost-effective solutions."
            textColor="white"
          />
          <div className="w-full relative gap-5 flex justify-start items-center">
          <div>
            <ButtonWarp label="Get Started" />
          </div>
          </div>
        </div>
        <motion.div className="w-full flex justify-startt items-start relative max-lg:top-[-50px] overflow-hidden">
          <motion.div className="h-[600px] w-full relative ">
            <Image
              className="w-full h-auto rounded-2xl absolute inset-0 left-[90px] top-[90px] scale-[1.3]"
              src="/Aset/UntiltedDashboard.png"
              alt="Fusion"
              height={900}
              width={900}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </ComponentTransition>
  );
}

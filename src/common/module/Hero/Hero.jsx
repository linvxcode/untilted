"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import { RiArrowRightLine } from "react-icons/ri";
import Ratings from "./components/Ratings";
import SliderTechLeader from "./components/SliderTechLeader";
import { motion } from "framer-motion";
import RectangleWave from "./components/RectangleWave";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import TopGradient from "./components/TopGradient";

const FusionApp = dynamic(() => import("./components/FusionApp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-start px-5 lg:px-10  w-full overflow-hidden ">
      {/* <TopGradient /> */}
      <RectangleWave />

      <div className="max-lg:hidden glowbg w-[100%] md:w-[300px] h-[200px] absolute z-[-99] top-[200px] left-[-100px]"></div>

      <div className="w-full gap-5 flex lg:flex-row flex-col justify-start mt-20 ">
        <div className="w-full  z-[9] flex-col py-5 h-auto flex  rounded-2xl px-5">
          <ComponentTransition delay={2} className="w-full flex lg:flex-row flex-col justify-start items-start gap-2">
            <div className="bg-[#979797] rounded-full px-1 py-1 flex gap-1 items-center">
              <div className="bg-[#E8E8E8] rounded-full px-2">
                <h1>New</h1>
              </div>
              <h1 className="text-white">Users Trust Us</h1>
              <div className="pr-3">
                <RiArrowRightLine size={20} className="text-white" />
              </div>
            </div>
            <div className="flex items-center ">
              <Ratings />
            </div>
          </ComponentTransition>
          <div className="w-full mt-5 ">
            <HeroText
              texts="Empower Your  Financial Future and  Shine Bright with  Our Crypto  Opportunity."
              className="  leading-[0.95em] "
            />
          </div>
          <H1
            delay={1}
            className="mt-5 w-full lg:!w-[80%] justify-start !text-lg text-start"
            title="We've heard that exceeding our customers' expectations is beyond reach. Instead of reinventing the wheel, we've chosen to enhance it."
            textColor="normal"
          />
          <ComponentTransition delay={1.5} className="w-full relative gap-5 flex justify-start items-center">
            <div className=" relative">
              <Image
                className="w-[150px] h-auto "
                src="/google-play.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
            <div className=" relative">
              <Image
                className="w-[150px] h-auto "
                src="/app-store.svg"
                alt="Fusion"
                height={200}
                width={200}
                priority
              />
            </div>
          </ComponentTransition>
        </div>
        <div className="w-full flex justify-center items-center">
          <motion.div
            className=" flex w-full relative left-0 right-0 mx-auto justify-center items-center overflow-hidden"
            initial={{
              width: "0px",
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{
              delay: 1,
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 1.5,
            }}
            viewport={{
              once:true
            }}
            
          >
            <div className="w-full h-[400px] lg:h-[600px] overflow-hidden lg:pl-10 pt-20 lg:pt-5  relative rounded-2xl">
              <FusionApp />
              <div className="absolute inset-0 w-full z-[-9]">
                <Image
                  className="w-full h-[600px] "
                  src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fusion"
                  height={400}
                  width={400}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}

"use client";
import clsx from "clsx";
import React, { useState } from "react";
import ComponentTransition from "./ComponentTransition";
import { motion } from "framer-motion";
import { FeatureCardItem } from "@/common/constant/FeaturesItem";
import Image from "./Image";

export default function CardIcon() {
  const [hover, setHover] = useState(null);

  const handleCardHover = (index) => {
    setHover(index);
  };

  const handleCardLeave = () => {
    setHover(null);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-5 justify-center items-center">
      {FeatureCardItem.map((item, index) => (
        <ComponentTransition
          delay={index * 0.2}
          key={index}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={handleCardLeave}
          className={clsx(
            ` flex h-[500px] relative flex-col items-center w-full gap-5 p-10 bg-[#E8E8E8] rounded-3xl  overflow-hidden group`
          )}
        >
          <div className="w-full flex justify-around relative ">
            <div className="w-full flex justify-start relative">
              <h1>0{index + 1}</h1>
            </div>
            <div className="w-full flex justify-end">
                <Image
                  className="w-[30px] h-auto "
                  src="/Aset/spinner.gif"
                  alt="Fusion"
                  height={400}
                  width={400}
                  priority
                />
            </div>
          </div>

          <div className="w-full relative z-[9]">
            <h1 className="text-3xl text-[#181818] text-center font-semibold pb-4">
              {item.title}
            </h1>
            <p className="text-sm text-[#7A7A7A] text-center">{item.desc}</p>
          </div>
          <motion.div className="bg-[#9ccff8] blur-xl rounded-full w-[600px] h-[600px] absolute top-[65%]"></motion.div>
          <div className="bg-[#9caaf8] blur-md rounded-full w-[600px] h-[600px] absolute top-[75%]"></div>
          <div className="bg-[#4b4b4b] blur-sm rounded-full w-[500px] h-[500px] absolute top-[85%]"></div>
          <motion.div
            className=" bg-  w-[600px]  absolute "
            animate={{
              filter: hover === index ? "blur(24px)" : "blur(0px)",
              top: hover === index ? "-100%" : "100%",
              height: hover === index ? "600px" : "50px",
              borderRadius: hover === index ? "9999px" : "0px",
              background: hover === index ? "#9ccff8" : "#F4F4F2",
            }}
            transition={{
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 1.1,
            }}
          ></motion.div>
        </ComponentTransition>
      ))}
    </div>
  );
}

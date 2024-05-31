"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { useTextParallax } from "@/common/hooks/useParallax";

export default function HeroText({ className, texts,style, ...other }) {
  const TextAnim = {
    initial: {
      y: 147,
    },
    animate: {
      y: 0,
    },
  };


  return (
    <>
      {texts.split("  ").map((text, index) => (
        <motion.div
          key={index}
          initial="initial"
          whileInView="animate"
          className={`${style} flex justify-start items-center  overflow-hidden `}
          transition={{
            type: 'spring'
          }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={`${className} inline-block  bg-clip-text text-transparent bg-gradient-to-br from-[#202020]  to-[#a7a7a7] justify-start text-3xl md:text-4xl lg:!text-6xl  font-semibold text-start overflow-hidden `}
            variants={TextAnim}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
      ))}
    </>
  );
}

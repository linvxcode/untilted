"use client";
import React from "react";
import { motion} from "framer-motion";

export default function Text({className, texts, style}) {
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
      {texts.split(" ").map((text, index) => (
        <motion.div
        key={index}
        initial="initial"
        whileInView="animate"
        className={`overflow-hidden inline-block`}
        viewport={{once:true}}
        style={style}
        >
          <motion.h1
            className={`${className} inline-block leading-[0.9em] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#181818]  to-[#a5a5a5] text-2xl lg:text-4xl overflow-hidden `}
            variants={TextAnim}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
          >
            {text}&nbsp;
          </motion.h1>
        </motion.div>
      ))}
    </>
  );
}

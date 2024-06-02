"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Section({ label }) {
  return (
    <div className="w-full flex justify-center items-center relative pb-10  ">
      <div className="text-2xl font-semibold flex items-center justify-center gap-5">
        <motion.div
          className="h-[3px]  bg-gradient-to-bl from-[#494949] to-transparent to-50%"
          initial={{
            x: 110,
            width: "300px",
          }}
          whileInView={{
            x: 0,
            width: "80px",
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.h1
          className=" text-center text-[#494949]"
          initial={{
            opacity: 0,
            visibility: "hidden",
          }}
          whileInView={{
            opacity: 1,
            visibility: "visible",
          }}
          transition={{
            delay: 1,
          }}
          viewport={{ once: true }}
        >
          {label}
        </motion.h1>
        <motion.div
          className="h-[3px] bg-gradient-to-br from-[#494949] to-transparent to-50%"
          initial={{
            x: -110,
            width: "300px",
          }}
          whileInView={{
            x: 0,
            width: "80px",
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ButtonWarp({ label, className }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className="flex justify-start items-start w-full py-5"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "spring",
        delay: 0.4,
        duration: 5,
      }}
    >
      <div className=" flex w-auto max-w-lg items-start justify-start overflow-hidden">
        <div className="relative z-[999999] flex w-full cursor-pointer items-center overflow-hidden rounded-full p-[2.8px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#9ccff8_20deg,transparent_120deg)] "></div>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "tween",
              ease: [0.6, 0.2, 0, 1],
              duration: 1.2,
            }}
            onMouseEnter={() => setIsHover(!isHover)}
            onMouseLeave={() => setIsHover(!isHover)}
            className="cursor-pointer z-10 overflow-hidden bg-[#F4F4F2] px-5 py-3 relative gap-2 flex items-center rounded-full border-[1px] border-[#9ccff8]   "
          >
            <h1 className="text-[#333333]  translate-y-[0%] transition-all duration-1000 text-base  font-semibold">
              {label}
            </h1>
            <GoArrowUpRight
              size={22}
              className={`text-[#333333] mt-1 ${
                !isHover
                  ? "translate-x-0 translate-y-0"
                  : "translate-x-10 -translate-y-10"
              } delay-150 transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 relative`}
            />
            <GoArrowUpRight
              size={22}
              className={`text-[#333333] left-[80%] mt-1 ${
                !isHover
                  ? "-translate-x-10 translate-y-10"
                  : "translate-x-0 translate-y-0"
              } transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 absolute `}
            />
            <motion.div
              animate={{
                scale: !isHover ? 1 : 8,
                width: !isHover ? 30 : 30,
                borderRadius: !isHover ? 50 : 10,
                // x: !isHover ? 0 : -230,
                height: !isHover ? 30 : 30,
              }}
              transition={{
                type: "tween",
                ease: [0.6, 0.2, 0, 1],
                duration: 1.2,
              }}
              className={`${className} absolute left-[72%] bg-[#9ccff8] z-[-9]`}
            ></motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

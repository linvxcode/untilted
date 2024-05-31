"use client";
import { motion } from "framer-motion";
import React from "react";

export default function RectangleWave() {
  return (
    <div className="w-full absolute inset-0 lg:top-[-150px] ] z-[-99]">
      <div>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1500 1533"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='lg:w-[100%] lg:h-[100%] w-[700px] h-[700px]'
        >
          <motion.path
            style={{
                scale: 5
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
            viewport={{once: true}}
            className="fill-[#edededb8] "
            d="M1584.25 633.191C1587.53 634.245 1589.25 637.838 1588.02 641.054L1508.75 847.554C1507.5 850.801 1503.77 852.311 1500.62 850.842L-187.52 64.0969L1584.25 633.191Z"
          />
          <motion.path
            style={{
                scale: 5
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
            viewport={{once: true}}

            className="fill-[#edededb8] "
            d="M1621.06 766.85C1624.39 767.822 1626.2 771.404 1625.01 774.662L1534.01 1024.7C1532.81 1028 1529.05 1029.57 1525.87 1028.11L-134.363 266.54C-141.122 263.439 -137.318 253.242 -130.179 255.327L1621.06 766.85Z"
            fill="#D9D9D9"
          />
          <motion.path
            style={{
                scale: 4
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: "tween",
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
            viewport={{once: true}}

            className="fill-[#edededb8] "
            d="M5.73229 532.878C2.63564 531.32 -1.13364 532.702 -2.48822 535.894L-106.458 780.83C-107.827 784.056 -106.151 787.765 -102.824 788.869L1630.78 1364.17C1637.83 1366.51 1642.01 1356.46 1635.36 1353.11L5.73229 532.878Z"
          />
        </motion.svg>
      </div>
    </div>
  );
}

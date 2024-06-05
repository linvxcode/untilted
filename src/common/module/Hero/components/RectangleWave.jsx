"use client";
import Image from "@/common/component/element/Image";
import { useMobile } from "@/common/hooks/useMobile";
import { motion } from "framer-motion";
import React from "react";

export default function RectangleWave() {
  const isMobile = useMobile();
  return (
    <div className="w-full absolute inset-0 h-full z-[-999] right-[-10px]">
      <motion.div
        className="w-full"
        style={{
          scale: 2,
        }}
        whileInView={{
          scale: 1,
        }}
        transition={{
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 2,
        }}
        viewport={{ once: true }}
      >
        <div className="w-full relative ">
          <Image
            className="w-full lg:h-auto object-cover "
            src="/Aset/Shadow.png"
            alt="Fusion"
            height={400}
            width={400}
            priority
          />
        </div>
      </motion.div>

     
    </div>
  );
}

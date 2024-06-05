"use client";
import Image from "@/common/component/element/Image";
import { useDekstop } from "@/common/hooks/useDekstop";
import { useParallax } from "@/common/hooks/useParallax";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function UntiltedDashboard() {
  const { scrollY } = useScroll();
  const { TranslateX, TranslateY } = useParallax(scrollY);
  const isDekstop = useDekstop();
  return (
    <div>
      <motion.div
        className="w-full flex justify-start items-start relative  overflow-hidden"
        style={{
          translateY: TranslateY,
          // translateX: TranslateX,
          // rotateX: RotateX,
          // position: "relative",
          // transformPerspective: 819,
          // rotateZ: RotateZ,
          // rotateY: RotateY,
        }}
      >
        <motion.div className="h-[600px] w-full relative "
        
        >
          <Image
            className="w-full h-auto rounded-2xl absolute inset-0 left-[90px] md:left-[250px] lg:left-[90px] top-[90px] md:top-[190px] lg:top-[90px] scale-[1.3]"
            src="/Aset/UntiltedDashboard.png"
            alt="Fusion"
            height={900}
            width={900}
            priority
          />
        </motion.div>
        {/* <Image
          className="w-[1440px] h-[1024px] object-contain relative"
          src="/Aset/UntiltedDash.png"
          alt="Fusion"
          height={900}
          width={900}
          priority
        /> */}
      </motion.div>
    </div>
  );
}

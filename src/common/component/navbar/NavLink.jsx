import clsx from "clsx";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";



export const Links = ({ title, imgSrc, subheading, href,pathname, onClick }) => {
  
  return (
    <div className="relative overflow-hidden w-full flex justify-center items-center ">
    <Link
      onClick={onClick}
        href={href}
        className="mb-0  group  overflow-hidden"
      >
        <h1 className="text-[#696969] text-xl font-medium transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-90%]">
          {title}
        </h1>
        <h1 className="text-[#696969] text-xl font-medium transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[80%] group-hover:translate-y-[0%] absolute">
          {title}
        </h1>
        
      </Link>
    </div>
  );
};
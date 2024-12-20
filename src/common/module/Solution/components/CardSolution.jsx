"use client";
import Image from "@/common/component/element/Image";
import React, { useState } from "react";
import { SolutionItem } from "@/common/constant/SolutionItem";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import ButtonArrow from "@/common/component/element/ButtonArrow";

export default function CardSolution() {
  const [indexItem, setTitleIndex] = useState(0);

  const handleChange = (index) => {
    setTitleIndex(index);
  };

  return (
    <div className="w-full ">
      <div className="w-full flex flex-col max-lg:gap-10 justify-center items-center">
        <div className="w-full flex  justify-center items-start">
          <div className="grid grid-cols-2 lg:flex  gap-2 lg:gap-5 w-auto py-5 lg:py-10">
            {SolutionItem.map((item, index) => (
              <ComponentTransition
                delay={index * 0.1}
                key={index}
                className="w-auto flex "
              >
                <motion.button
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={clsx(
                    index === indexItem
                      ? "  text-black"
                      : " text-white",
                    "w-full px-3 lg:px-5 py-3 flex  justify-center items-center  rounded-full relative  "
                  )}
                  onClick={() => handleChange(index)}
                >

                  <h1 className="relative flex-nowrap line-clamp-1">
                    {item.title}
                  </h1>{" "}
                  <div
                    className={clsx(
                      index === indexItem
                        ? "bg-[#FFFFF7]"
                        : " border-[1px] border-[#FFFFF7]",
                      "absolute rounded-full transition-all duration-300 inset-0 z-[-5]"
                    )}
                  ></div>
                </motion.button>
              </ComponentTransition>
            ))}
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            key={indexItem}
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: 50,
              opacity: 0,
            }}
          >
            <ComponentTransition className="w-full h-auto overflow-hidden grid lg:grid-cols-2  px-5 lg:px-10   py-10 lg:py-20 bg-gradient-to-b from-[#dbdbdb7a] dark:from-[#1414147a] dark:to-[#141414] rounded-3xl">
              {/* <div className="w-auto rounded-full p-2  bg-[#0F0E0E] dark:bg-[#FFFFF7] flex justify-center items-center">
                {SolutionItem[indexItem].icon}
              </div> */}
              <div className="w-full flex flex-col">
                <H1
                  className="md:mt-5 mt-10  !font-semibold !justify-start !text-3xl lg:!text-4xl text-start "
                  title={SolutionItem[indexItem].title}
                  textColor="white"
                />
                <H1
                  className="md:mt-5 mt-10  !justify-start !text-sm lg:!text-base text-start "
                  title={SolutionItem[indexItem].desc}
                  textColor="normal"
                />
                <div className="w-full px-2 relative max-lg:py-10 lg:top-[60px]">
                <ButtonArrow
                  title='Read More'
                  href='/'
                />
              </div>
              </div>

              <div className="w-full h-[300px] overflow-hidden rounded-3xl">
                <Image
                  className="w-full h-auto object-cover"
                  src={SolutionItem[indexItem].img}
                  alt="aa"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>


            </ComponentTransition>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

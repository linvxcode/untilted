"use client";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMobile } from "@/common/hooks/useMobile";
import { useDekstop } from "@/common/hooks/useDekstop";

export default function PricingCard({ item }) {
  const isDekstop = useDekstop();
  const [Price, setPrice] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center py-10">
        <div className="w-auto  px-2 py-2 mb-5 bg-[#D8D9DA] border-[1px]  rounded-xl flex gap-2  overflow-hidden">
          <button
            onClick={() => setPrice(false)}
            className={clsx(
              `text-black font-medium px-2 py-2 relative  rounded transition-all duration-300`
            )}
          >
            <h1 className="relative z-[9]">Monthly</h1>
            <motion.div
              className="absolute inset-0 bg-[#9ccff8] shadow-lg  shadow-[#9ccff8da] rounded"
              animate={{
                x: Price === true ? 85 : 0,
              }}
            ></motion.div>
          </button>
          <button
            onClick={() => setPrice(true)}
            className={clsx(
              ` text-black  font-medium px-4 py-1 relative rounded transition-all duration-300`
            )}
          >
            <h1>Yearly</h1>
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-14 lg:gap-5 justify-center items-center w-full relative">
        <motion.div
          className="w-[90px] h-[90px] bg-[#D8D9DA] top-[32%] lg:top-[-30px] flex border-4 border-[#9ccff8] justify-center items-center rounded-full absolute z-[99]"
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 2,
          }}
        >
          <BsStars size={50} className="text-[#9ccff8]" />
        </motion.div>
        {item.map((items, index) => (
          <motion.div
            key={index}
            className={clsx(items.className, `flex flex-col p-10  `)}
            style={items.style}
            initial={!isDekstop ? items.initial : {}}
            whileInView={!isDekstop ? items.whileInView : {}}
            transition={{
              type: "tween",
              delay: index * 0.1,
              ease: [0.8, 0.2, 0, 1],
              duration: 2,
            }}
            viewport={{
              once:true
            }}
          >
            <h1>{items.plan}</h1>
            {Price === true ? (
              <h1 className="text-3xl py-5">
                {items.yearly} /<span className="!text-2xl">mo</span>{" "}
              </h1>
            ) : (
              <h1 className="text-3xl py-5">
                {items.price} /<span className="!text-2xl">mo</span>{" "}
              </h1>
            )}
            <div className="w-full py-2 flex items-center gap-2">
              <CiCircleCheck size={30} />
              <h1>Basic features included</h1>
            </div>
            <div className="w-full py-2 flex items-center gap-2">
              <CiCircleCheck size={30} />
              <h1>Limited support</h1>
            </div>
            <div className="w-full py-2 flex items-center gap-2">
              <CiCircleCheck size={30} />
              <h1>Up to 5 NFT projects</h1>
            </div>
            <div className="w-full py-2 flex items-center gap-2">
              <CiCircleCheck size={30} />
              <h1>Community access</h1>
            </div>

            <div className="w-full py-5">
              <ButtonSpot title="Subscribe" className={`bg-white !py-3`} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

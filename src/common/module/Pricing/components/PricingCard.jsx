"use client";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function PricingCard({ item }) {
  const [Price, setPrice] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center py-10">
        <div className="w-auto px-2 py-2 bg-[#FFFFF7] border-[1px]  rounded-full flex gap-2  overflow-hidden">
          <button
            onClick={() => setPrice(false)}
            className={clsx(
              Price === false && "bg-[#495464] !text-[#F2F2F2]",
              `text-black font-medium px-2 py-2 rounded-full transition-all duration-300`
            )}
          >
            <h1>Monthly</h1>
          </button>
          <button
            onClick={() => setPrice(true)}
            className={clsx(
              Price === true && "bg-[#495464] !text-[#F2F2F2]",
              ` text-black  font-medium px-4 py-1 rounded-full transition-all duration-300`
            )}
          >
            <h1>Yearly</h1>
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 w-full">
        {item.map((items, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            className={clsx(items.className, `flex flex-col p-10  `)}
          >
            <h1>{items.plan}</h1>
            {Price === true ? (
              <h1 className="text-3xl py-5">
              {items.yearly} /<span className="!text-2xl">mo</span>{" "}
            </h1>
              ): (
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
              <ButtonSpot
                title="Subscribe"
                className={`${index === 2 ? `bg-black` : `bg-white`} !py-3`}
              />
            </div>
          </ComponentTransition>
        ))}
      </div>
    </div>
  );
}

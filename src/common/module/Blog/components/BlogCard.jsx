"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function BlogCard({ item }) {
  return (
    <div className="w-full gap-5 flex flex-col lg:flex-row flex-wrap justify-start items-start py-10">
      {item.map(
        (items, index) =>
          index !== 0 && (
            <ComponentTransition
              delay={index * 0.1}
              key={index}
              className={clsx(
                items.className,
                `flex group justify-start items-start overflow-hidden flex-col`
              )}
            >
              <Link className="w-full" href={`/blog/${items.slug}`}>
                <motion.div
                  className="w-full h-[330px] overflow-hidden"
                  whileHover={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                >
                  <Image
                    className="w-full h-[330px] object-cover rounded-3xl"
                    src={items.img}
                    alt="Fusion"
                    height={400}
                    width={400}
                    loading="lazy"
                  />
                </motion.div>
              </Link>
              <div className="w-full flex flex-col justify-start items-start gap-2 px-2 py-5">
                <p className="text-sm text-[#7D7F78]">{items.date}</p>
                <h1 className="text-2xl group-hover:underline transition-transform duration-700">
                  {items.title}
                </h1>
              </div>
            </ComponentTransition>
          )
      )}
    </div>
  );
}

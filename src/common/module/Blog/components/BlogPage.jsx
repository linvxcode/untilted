import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import { BLogCategories } from "@/common/constant/BlogCategories";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import LatestCard from "./LatestCard";
import BlogCard from "./BlogCard";
import { BlogItem } from "@/common/constant/BlogItem";
import CardEndOffer from "@/common/component/element/CardEndOffer";

export default function BlogPage() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full mt-28 md:mt-32 overflow-hidden">
      <div className="w-full relative z-[9]">
        <div className="w-full relative items-start gap-5 mb-10 justify-center grid lg:grid-cols-2 ">
          <div className="flex flex-col w-full items-start justify-start">
            <HeroText texts="Latest Articles" className="" />
            <H1
              title="believe that impactful design has the potential to create a significant impact"
              className="text-lg lg:text-xl  text-[#7D7F78] !px-0 !tracking-[-0.04em]"
            />
          </div>
          <div className="w-full flex flex-col justify-center py-4 items-start">
            <ComponentTransition className="w-full flex">
              <H1
                className="!text-sm border-b-[1.8px] border-[#EEEEEE] pb-3 !px-0 !w-full"
                title="Categories"
                textColor="white"
              />
            </ComponentTransition>
            {BLogCategories.map((item, index) => (
              <ComponentTransition
                key={index}
                className="w-full py-4 flex"
                delay={index * 0.1}
              >
                <Link
                  href="/"
                  className={clsx(
                    index === 0
                      ? "border-[#696969] !text-sm border-b-[1.8px]  !w-full"
                      : `!text-sm border-b-[1.8px]  !w-full overflow-hidden hover:lg:border-[#696969] transition-all duration-700`
                  )}
                >
                  <h1 className="line-clamp-1 overflow-hidden pb-3">{item.title[1]}</h1>
                </Link>
                <Link
                  href="/"
                  className={`!text-sm border-b-[1.8px] overflow-hidden border-[#EEEEEE]  !w-full hover:lg:border-[#696969] transition-all duration-700`}
                >
                  <h1 className="line-clamp-1 pb-3 overflow-hidden">{item.title[2]}</h1>
                </Link>
                <Link
                  href="/"
                  className={`!text-sm border-b-[1.8px] overflow-hidden border-[#EEEEEE]  !w-full hover:lg:border-[#696969] transition-all duration-700`}
                >
                  <h1 className="line-clamp-1 pb-3 ">{item.title[3]}</h1>
                </Link>
              </ComponentTransition>
            ))}
          </div>
        </div>
        <div className="w-full">
          <LatestCard />
        </div>
        <div className="w-full  relative overflow-hidden">
          <BlogCard item={BlogItem} />
        </div>
        <div className="w-full">
          <CardEndOffer className='!px-0  !mt-0' />
        </div>
      </div>
    </div>
  );
}

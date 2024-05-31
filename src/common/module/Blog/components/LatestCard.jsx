import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { BlogItem } from "@/common/constant/BlogItem";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LatestCard() {
  return (
    <div className="w-full">
      {BlogItem.map(
        (item, index) =>
          index === 0 && (
            <ComponentTransition
              key={index}
              className={clsx(
                ` group  flex py-5 justify-center h-[500px]  relative overflow-hidden object-cover rounded-[40px]`
              )}
            >
              <Link href={`/blog/${item.slug}`} className="w-full ">
                <Image
                  className="w-full h-[500px] group-hover:lg:!grayscale-0  overflow-hidden absolute inset-0 object-cover"
                  src="https://images.unsplash.com/photo-1632373564121-2bd0b5abade7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="sss"
                  width={800}
                  height={800}
                  priority
                />
                <div className="relative flex  justify-end w-[80%] md:w-[60%] xl:w-[40%]  h-full right-0 px-5 ">
                  <div className="py-10  px-5 overflow-hidden relative z-[9]  bg-gradient-to-b from-[#1F1F1F] to-[#141414] to-95%   border-[1px] border-[#262626] flex  justify-between items-start w-full rounded-[35px]">
                    <div className="w-full ">
                      <div className="w-full mt-2">
                        <h1 className="text-sm text-[#fffff7be]">
                          {item.date}
                        </h1>
                      </div>
                      <div className="w-full">
                        <h1 className="lg:text-4xl text-2xl text-start text-[#FFFFF7] font-semibold">
                          {item.title}
                        </h1>
                      </div>
                      <div className="mt-5 lg:mt-10 w-full flex flex-row flex-wrap gap-2">
                        <div className=" outline flex justify-center items-center rounded-full outline-[#fffff7be] outline-[1px] w-auto">
                          <h1 className="text-sm text-[#fffff7be] px-5 py-1">
                            Animation{" "}
                          </h1>
                        </div>
                        <div className=" outline flex justify-center items-center rounded-full outline-[#fffff7be] outline-[1px] w-auto">
                          <h1 className="text-sm text-[#fffff7be] px-5 py-1">
                            Inspiration{" "}
                          </h1>
                        </div>
                        <div className=" outline flex justify-center items-center rounded-full outline-[#fffff7be] outline-[1px] w-auto">
                          <h1 className="text-sm text-[#fffff7be] px-5 py-1 line-clamp-1">
                            Tools & Resources:
                          </h1>
                        </div>
                      </div>
                      <div className="w-full flex items-end xl:mt-36 lg:mt-28 mt-16">
                        <ButtonArrow title="Read More" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ComponentTransition>
          )
      )}
    </div>
  );
}

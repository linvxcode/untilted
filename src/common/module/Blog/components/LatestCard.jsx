import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { BlogItem } from "@/common/constant/BlogItem";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LatestCard() {
  return (
    <div className="w-full flex gap-5">
      <ComponentTransition
        // key={index}
        className={clsx(
          ` group w-[40%] flex  justify-center items-center h-[500px]  relative overflow-hidden object-cover rounded-[40px]`
        )}
      >
        <Link href="/" className="w-full ">
          <Image
            className="w-full  h-[500px] group-hover:lg:!grayscale-0  overflow-hidden absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1632373564121-2bd0b5abade7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sss"
            width={800}
            height={800}
            priority
          />
          <div className="w-full flex  mt-24">
            <div className="relative top-[150px] flex w-auto flex-col">
              <Image
                className="w-[60px] top-[-30px] left-0 h-auto  absolute inset-0 object-cover "
                src="/Aset/Vector 2.svg"
                alt="sss"
                width={800}
                height={800}
                priority
              />
              <h1 className="text-2xl font-semibold gap-2 bg-[#F4F4F2] rounded-tr-3xl px-5 py-3 flex flex-col">
                <span className="text-sm font-normal">February 15, 2024</span>
                Future Financial
              </h1>
            </div>
          </div>
          <div className="relative top-[150px] flex">
            <Image
              className="w-[60px] top-[-30px] left-[218px] h-auto  absolute inset-0 object-cover "
              src="/Aset/Vector 2.svg"
              alt="sss"
              width={800}
              height={800}
              priority
            />
            <h1 className="text-xl bg-[#F4F4F2] rounded-tr-3xl px-5 pt-2 pb-20 w-[70%] ">
              Seize the Opportunity with Our Crypto Offer
            </h1>
            <Image
              className="w-[60px] top-[50px] left-[352px] h-auto  absolute inset-0 object-cover"
              src="/Aset/Vector 2.svg"
              alt="sss"
              width={800}
              height={800}
              priority
            />
          </div>

         
        </Link>
      </ComponentTransition>
      <div className="w-[40%] flex flex-col">
      
      </div>
    </div>
  );
}

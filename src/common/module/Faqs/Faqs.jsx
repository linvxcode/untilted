import Accordian from "@/common/component/element/Accordian";
import H1 from "@/common/component/element/H1";
import { Faqitem } from "@/common/constant/Faq";
import clsx from "clsx";
import React from "react";

export default function Faqs({className}) {
  return (
    <div className={clsx(
      className,
      `h-auto max-w-[1500px]   px-5 lg:px-10 overflow-hidden flex-col flex justify-center  w-full `)}>
      <div className="w-full  flex flex-col justify-center items-center ">
        <div className="w-full  flex justify-center items-center flex-col">
        <H1
          className="md:mt-5 mt-10  !justify-center !text-4xl text-center "
          title="FAQ"
          textColor="white"
        />
          <div className="w-full mt-10  lg:px-20">
            <Accordian Content={Faqitem} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

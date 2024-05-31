import Accordian from "@/common/component/element/Accordian";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import { Faqitem } from "@/common/constant/Faq";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";

export default function Faq() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="FAQs"
          />
          <H1
            title="Frequently Ask"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <div className="w-full lg:px-32">
            <Accordian Content={Faqitem} />
          </div>
        </div>
      </div>
    </div>
  );
}

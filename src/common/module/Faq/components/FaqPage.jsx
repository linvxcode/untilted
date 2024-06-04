import H1 from "@/common/component/element/H1";
import React from "react";
import FaqAccordian from "./FaqAcordian";
import { Faqitem } from "@/common/constant/Faq";
import { GrIntegration } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import Section from "@/common/component/element/Section";

export default function FaqPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <Section
          label="FAQ"
        />
        <H1
          title="Frequently Ask"
          className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
          textColor="normal"
        />
        <H1
          title="Have a question? Check out most asked questions from our users and community and find their answers"
          className="!text-sm lg:!text-base w-full lg:w-[70%] !mt-5 !text-center justify-center items-center"
          textColor="opacity"
        />
      </div>
      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <GrIntegration size={30} />
          <h1 className="text-2xl font-semibold">
            Integration and Compatibility
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <BiSupport size={30} />
          <h1 className="text-2xl font-semibold">
            Support and Assistance
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <MdPayments size={30} />
          <h1 className="text-2xl font-semibold">
          Payment
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>

      <div className="w-full py-20 lg:px-36 flex flex-col justify-start items-start">
        <div className="flex gap-2 items-center pb-10">
          <RiRefund2Fill size={30} />
          <h1 className="text-2xl font-semibold">
          Cancellation and Refunds
          </h1>
        </div>
        <FaqAccordian Content={Faqitem} />
      </div>


    <CardEndOffer className='!px-0' />

    </div>
  );
}

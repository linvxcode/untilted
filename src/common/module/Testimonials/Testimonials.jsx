import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import Link from "next/link";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import TestimonialCard from "./components/TestimonialCard";
import { TestimonialItem } from "@/common/constant/TestimonialItem";

export default function Testimonials() {
  return (
    <div className="h-auto max-w-[1500px] rounded-t-full relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex flex-col w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <SectionText
            className="!justify-center px-2"
            title="Client Testimonial"
          />
          <H1
            title="Gain insights and perspectives straight from the mouths of our satisfied customers."
            className="!text-2xl lg:!text-4xl !text-center lg:w-[70%]"
            textColor="colorShadow"
          />
        </div>
        <div className="w-full overflow-hidden">
          <TestimonialCard item={TestimonialItem} />
        </div>
        <div className="w-full py-10">
          <div className="flex lg:flex-row flex-col w-full justify-center gap-20 items-center">
            <div className="flex flex-col justify-center items-center">
              <H1
                title="45+"
                className="!text-8xl !text-center "
                textColor="colorShadow"
              />
              <H1
                title="Happy Customers"
                className="!text-xl !text-center "
                textColor="colorShadow"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <H1
                title="5k+"
                className="!text-8xl !text-center "
                textColor="colorShadow"
              />
              <H1
                title="Hours Spent"
                className="!text-xl !text-center "
                textColor="colorShadow"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <H1
                title="4.7"
                className="!text-8xl !text-center "
                textColor="colorShadow"
              />
              <H1
                title="Review Rate"
                className="!text-xl !text-center "
                textColor="colorShadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

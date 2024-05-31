import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import SectionText from "@/common/component/element/SectionText";
import React from "react";

export default function OurStory() {
  return (
    <div className="w-full py-20">
      <div className="w-full gap-5 grid lg:grid-cols-2 ">
        <ComponentTransition className="w-full h-auto lg:h-[550px] overflow-hidden flex flex-col justify-start items-start px-5 lg:px-10   py-10 lg:py-20 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl">
          <SectionText
            title="Our story"
            className="!w-auto rounded-full !justify-start  !px-5 !text-black bg-[#FFFFF7] "
          />
          <H1
            className="md:mt-5 mt-10  !font-semibold !justify-start !text-4xl text-start "
            title="It all began with a single idea that blossomed into a tight-knit family."
            textColor="white"
          />
          <H1
            className="md:mt-5 mt-10  !justify-start !text-base text-start "
            title="We've developed an expanding design software with top-notch precision and a focus on industry-leading practices, ensuring you consistently discover the assets you need."
            textColor="normal"
          />

          <div className="w-full px-2 relative max-lg:py-10 lg:top-[60px]">
            <ButtonArrow title="Read story" />
          </div>
        </ComponentTransition>
        <ComponentTransition delay={0.1} className="w-full h-[550px] overflow-hidden flex flex-col justify-start items-start  rounded-3xl">
          <Image
            className="w-full h-[550px] object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fusion"
            height={400}
            width={400}
            priority
          />
        </ComponentTransition>
      </div>
    </div>
  );
}

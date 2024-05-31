import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProFeatureCard from "./components/ProFeatureCard";
import { ProFeatureitem } from "@/common/constant/FeaturesItem";
import ButtonArrow from "@/common/component/element/ButtonArrow";
import Link from "next/link";

export default function ProFeature() {
  return (
    <div className="h-auto max-w-[1500px] relative flex  flex-col justify-center px-5 lg:px-10 pt-10 w-full">
      <div className="flex w-full gap-10 flex-col relative justify-start items-start">
        <div className="w-full px-5 py-10 gap-10 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] flex flex-col justify-start items-start">
          <SectionText
            title="Pro Feature"
            className="!w-auto rounded-full !justify-start !px-5  "
          />
          <H1
            title="Discover the array of standout features we offer."
            className="!text-4xl lg:w-[60%] !text-start"
            textColor="colorShadow"
          />
          <div className="w-full px-2 ">
            <Link href='/features'>
            <ButtonArrow title="See all features"  />
            </Link>
          </div>
        </div>
        {/* <div className="w-full">
            <ProFeatureCard  item={ProFeatureitem} />
        </div> */}
      </div>
    </div>
  );
}

import Card from "@/common/component/element/Card";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import { FeaturesItem } from "@/common/constant/FeaturesItem";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import CardVariantBig from "./components/CardVariantBig";
import CardIcon from "@/common/component/element/CardIcon";
import { HowItsWorkItem } from "@/common/constant/HowItsWorkItem";
import CardFeature from "./components/CardFeature";

export default function Feature() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="Featured"
          />
          <H1
            title="Feature that make a difference."
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <H1
            title="We`re engineered features that will actually make a difference "
            className="!text-sm lg:!text-base w-full !mt-5 !text-center justify-center items-center"
            textColor="opacity"
          />
          <div className="w-full mt-5">
            {/* <CardFeature /> */}
            <CardIcon />
            {/* <Card item={FeaturesItem} /> */}
            {/* <CardVariantBig /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

import H1 from "@/common/component/element/H1";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import CardVariantBig from "./components/CardVariantBig";
import CardIcon from "@/common/component/element/CardIcon";
import { HowItsWorkItem } from "@/common/constant/HowItsWorkItem";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import CardFeature from "./components/CardFeature";
import Section from "@/common/component/element/Section";

export default function FeaturePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-5 lg:px-10 flex flex-col justify-center mt-20 w-full  overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full">
          <Section label="Feature" />
        </div>
        <div className="w-full   rounded-3xl flex justify-center items-center">
          <H1
            title="We've achieved recognition as a premier Financial Crypto."
            className="!text-2xl lg:!text-5xl w-full lg:w-[70%] font-medium !text-center justify-center items-center"
            textColor="normal"
          />
        </div>
      </div>

      <div className="w-full">
        <CardFeature />
        <CardIcon />
      </div>
      <CardEndOffer className="!px-0 !mt-0" />
    </ComponentTransition>
  );
}

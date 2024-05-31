import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import React from "react";
import PricingCard from "./components/PricingCard";
import { PricingItem } from "@/common/constant/PricingItem";
import Functionalities from "../About/components/Functionalities";
import Faqs from "../Faqs/Faqs";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import Faq from "../Faq/Faq";

export default function PricingPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-5  lg:px-10 flex flex-col justify-center mt-20 w-full overflow-hidden">
      <div className="w-full  ">
        <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
          <div className="w-full bg-[#E8E8E8] px-5 py-8 rounded-3xl flex justify-center items-center">
            <H1
              title="We've earned recognition as a top tier nft."
              className="!text-2xl lg:!text-5xl w-full lg:w-[70%] font-semibold !text-center justify-center items-center"
              textColor="normal"
            />
          </div>
        </div>
        <div className="w-full  ">
          <PricingCard item={PricingItem} />
        </div>
      </div>
      <div className="w-full py-5">
        <Faq />
      </div>
      <CardEndOffer className="!px-0 !mt-0" />
    </ComponentTransition>
  );
}

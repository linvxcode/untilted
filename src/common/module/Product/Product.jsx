import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import CardIcon from "@/common/component/element/CardIcon";
import CardFeature from "../Feature/components/CardFeature";

export default function Product() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="Product"
          />
          <H1
            title="Track the things that matter most to you"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <H1
            title="From analytics to integrated sales data to report generating"
            className="!text-sm lg:!text-base w-full !mt-5 !text-center justify-center items-center"
            textColor="opacity"
          />
          <div className="w-full ">
            <CardFeature />
            {/* <CardIcon /> */}

          </div>
        </div>
      </div>
    </div>
  );
}

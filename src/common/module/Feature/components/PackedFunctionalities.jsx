import H1 from "@/common/component/element/H1";
import React from "react";
import FeatureCardIcon from "./FeatureCardIcon";
import { PackedFeature } from "@/common/constant/FeaturesItem";

export default function PackedFunctionalities() {
  return (
    <div className="w-full py-20">
      <div className="w-full flex flex-col justify-center items-center">
        <H1
          className="!text-3xl lg:!text-5xl !justify-center"
          title="Loaded with functionalities"
          textColor="white"
        />
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[60%] !justify-center !text-xl  lg:text-center "
          title="Transforming your NFTs into stunning, dynamic creations has never been easier. With Fusion, unleash a world of possibilities and elevate your digital assets to new heights. "
          textColor="normal"
        />
        <div className="w-full">
          <FeatureCardIcon item={PackedFeature} />
        </div>
      </div>
    </div>
  );
}

import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import CardSolution from "./components/CardSolution";

export default function Solution() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText title="Solution" />
          <H1
            title="Our solution for unlocking the full potential of NFTs"
            className="!text-2xl lg:!text-4xl lg:w-[60%] !text-center"
            textColor="colorShadow"
          />
          <div className="w-full">
            <CardSolution />
          </div>
        </div>
      </div>
    </div>
  );
}

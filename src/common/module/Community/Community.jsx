import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";

export default function Community() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText
            // icon={<FaStarOfLife size={20} className="" />}
            title="Active Community"
          />
          <H1
            title="Weekly updates and a massive community"
            className="!text-2xl lg:!text-4xl !text-center"
            textColor="colorShadow"
          />
          <div className="w-full py-10">
            <div className="flex lg:flex-row flex-col w-full justify-center items-center ">
              <ComponentTransition className="w-full h-auto overflow-hidden px-5 py-5 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626]">
                <div className="w-full flex lg:flex-row flex-col relative">
                  <div className="flex gap-5 py-5 lg:py-20 lg:px-10 justify-start items-start flex-col w-full">
                    <h1 className="text-3xl">Join with us in fusion</h1>
                    <p className="text-base text-[#7D7F78]">
                      Lorem ipsum dolor. Nibh euismod massa. Sed sed leo ipsum
                      dolor. Nibh euismod massa.
                    </p>
                    <div className="lg:mt-16">
                      <ButtonArrow title="Take Your Seat" />
                    </div>
                  </div>
                  <div className="flex w-full items-center relative  overflow-hidden">
                    <Image
                      className="w-full  h-auto mx-auto object-cover rounded-2xl"
                      src="https://images.unsplash.com/photo-1679669693872-12d991fc9d93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Fusion"
                      height={400}
                      width={400}
                      loading="lazy"
                    />
                    {/* <GiGearStickPattern size={380} /> */}
                  </div>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

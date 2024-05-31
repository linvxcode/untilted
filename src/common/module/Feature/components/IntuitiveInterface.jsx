import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";

export default function IntuitiveInterface() {
  return (
    <div className="w-full py-20">
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <H1
            className="!text-4xl lg:!text-6xl"
            title="Intuitive Interface"
            textColor="white"
          />
          <H1
            className="md:mt-5 mt-10 w-full    !text-lg "
            title="Enjoy a user-friendly interface designed for artists of all levels. With intuitive tools and streamlined workflows, bringing your NFT vision to life has never been easier."
            textColor="opacity"
          />

          <div className="w-full flex flex-col px-2">
            <div className="flex w-full items-center md:mt-5 mt-10">
              <MdCheckCircleOutline size={20} />
              <H1
                className=" w-full  !text-lg "
                title="Create Masterpieces with Ease"
                textColor="opacity"
              />
            </div>
            <div className="flex w-full items-center md:mt-5 mt-10">
              <MdCheckCircleOutline size={20} />
              <H1
                className="w-full  !text-lg "
                title="Efficiency at Your Fingertips"
                textColor="opacity"
              />
            </div>
            <div className="flex w-full items-center md:mt-5 mt-10">
              <MdCheckCircleOutline size={20} />
              <H1
                className="w-full  !text-lg "
                title="Cross-Platform Compatibility"
                textColor="opacity"
              />
            </div>

            <div className="w-full px-2 py-20">
              <ButtonArrow title="Get Started For Free" />
            </div>
          </div>
        </div>

        <ComponentTransition className="w-full flex justify-center items-center bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] px-5 py-20">
          <Image
            className="w-full lg:w-[40%] h-auto mx-auto object-cover"
            src="/FUSION.png"
            alt="Fusion"
            height={400}
            width={400}
            loading="lazy"
          />
        </ComponentTransition>
      </div>
    </div>
  );
}

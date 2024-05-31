import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import {
  LogoIpsum,
  LogoIpsum2,
  LogoIpsum3,
  LogoIpsum4,
} from "@/common/component/svg/Logoipsum";
import React from "react";

export default function Clients() {
  return (
    <div className="w-full py-20">
      <div className="w-full gap-5 grid lg:grid-cols-2 ">
        <div className="w-full  overflow-hidden flex flex-col justify-start items-start  rounded-3xl">
          <SectionText
            title="Clients"
            className="!w-auto rounded-full !justify-start  !text-[#FFFFF7] "
          />
          <H1
            className="md:mt-5 mt-10 !font-semibold !justify-start !text-4xl text-start "
            title="Endorsed by top tier global corporations."
            textColor="white"
          />
          <H1
            className="md:mt-5 mt-10  !justify-start !text-base text-start "
            title="We've developed an expanding design software with top-notch precision and a focus on industry-leading practices, ensuring you consistently discover the assets you need."
            textColor="normal"
          />
        </div>
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-5">
            <ComponentTransition className="bg-gradient-to-b from-[#141414] to-[#141414] px-5 py-5 rounded-3xl w-full flex justify-center items-center">
              <LogoIpsum />
            </ComponentTransition>
            <ComponentTransition
              delay={0.1}
              className="bg-gradient-to-b from-[#141414] to-[#141414] px-5 py-5 rounded-3xl w-full flex justify-center items-center"
            >
              <LogoIpsum2 />
            </ComponentTransition>
            <ComponentTransition
              delay={0.2}
              className="bg-gradient-to-b from-[#141414] to-[#141414] px-5 py-5 rounded-3xl w-full flex justify-center items-center"
            >
              <LogoIpsum3 />
            </ComponentTransition>
            <ComponentTransition
              delay={0.3}
              className="bg-gradient-to-b from-[#141414] to-[#141414] px-5 py-5 rounded-3xl w-full flex justify-center items-center"
            >
              <LogoIpsum4 />
            </ComponentTransition>
          </div>
        </div>
      </div>
    </div>
  );
}

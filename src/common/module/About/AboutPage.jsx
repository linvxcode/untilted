import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import React from "react";
import Functionalities from "./components/Functionalities";
import OurStory from "./components/OurStory";
import Clients from "./components/Clients";
import OurTeam from "./components/OurTeam";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import SectionText from "@/common/component/element/SectionText";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import FusionApp from "../Hero/components/FusionApp";
import { CiStar } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi"

export default function AboutPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full bg-[#E8E8E8] px-5 py-8 rounded-3xl flex justify-center items-center">
          <H1
            title="We've earned recognition as a top tier nft."
            className="!text-2xl lg:!text-5xl w-full lg:w-[70%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
        </div>
      </div>
      <div className="w-full lg:flex-row flex-col flex py-10 gap-5">
        <div className="lg:basis-[80%] h-[400px] lg:h-[600px] overflow-hidden px-5 py-5 relative rounded-2xl">
          <FusionApp />
          <div className="absolute inset-0 w-full z-[-9]">
            <Image
              className="w-full h-auto lg:h-[600px] "
              src="https://images.unsplash.com/photo-1677336322384-2c62ab23c875?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
        <div className="basis-[80%]">
          <div className="w-full flex flex-col gap-5  ">
          <div className="bg-[#E8E8E8] px-5 py-10">
            <h1 className="text-3xl font-semibold">
            We are dedicated to your success. As your business advisors, we provide expert guidance tailored to your needs.
            </h1>
          </div>
          <div className="w-full lg:flex-row flex-col flex gap-5">
          <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
            <div>
            <CiStar size={30}  />
            </div>
            <h1 className="text-3xl font-semibold">
            Our Mission
            </h1>
            <h1>
            We aim to transform lives by providing nft expertise, accelerating growth, and safeguarding futures through trusted partnerships and innovative solutions.
            </h1>
          </ComponentTransition>

          <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
            <div>
            <PiTelevisionSimpleLight size={30}  />
            </div>
            <h1 className="text-3xl font-semibold">
            Our vision.
            </h1>
            <h1>
            Our vision is to forge a financially secure future for everyone, delivering innovative solutions and expert guidance to navigate toward prosperity.
            </h1>
          </ComponentTransition>
 
          </div>
          </div>
        </div>
      </div>
      <Functionalities />
      <OurStory />
      {/* <Clients /> */}
      {/* <OurTeam /> */}
      <CardEndOffer className="!px-0 !mt-0" />
    </ComponentTransition>
  );
}

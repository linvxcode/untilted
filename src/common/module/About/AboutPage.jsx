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
import { PiTelevisionSimpleLight } from "react-icons/pi";
import Section from "@/common/component/element/Section";

export default function AboutPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full">
          <Section label="About" />
        </div>
        <div className="w-full   rounded-3xl flex justify-center items-center">
          <H1
            title="Shine Bright with Our Crypto Opportunity"
            className="!text-2xl lg:!text-5xl w-full lg:w-[70%] font-medium !text-center justify-center items-center"
            textColor="normal"
          />
        </div>
      </div>
      <div className="w-full lg:flex-row flex-col flex pt-10 gap-5">
        <div className="w-full h-[400px] lg:h-[600px] overflow-hidden lg:pl-10 pt-20 lg:pt-5  relative rounded-2xl">
          <FusionApp />
          <div className="absolute inset-0 w-full z-[-9]">
            <Image
              className="w-full h-[600px] "
              src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
        <div className="basis-[80%]">
          <div className="w-full flex flex-col gap-5  ">
            <div className="bg-[#E8E8E8] px-5 py-5 rounded-3xl h-[270px]">
              <div className="w-full pb-5">
                <Image
                  className="w-[50px] h-auto "
                  src="/Aset/news.gif"
                  alt="Fusion"
                  height={400}
                  width={400}
                  priority
                />
              </div>
              <h1 className="text-xl font-normal">
                we are dedicated to empowering individuals to take control of
                their financial futuresOur innovative crypto opportunities
                provide you with the tools and knowledge to navigate the dynamic
                world of digital currencies confidently.
              </h1>
            </div>

            <div className="h-[308px] bg-[#E8E8E8] px-5 py-10 rounded-3xl relative overflow-hidden">
              <div className="w-full pb-5">
                <Image
                  className="w-[50px] h-auto "
                  src="/Aset/autorenew.gif"
                  alt="Fusion"
                  height={400}
                  width={400}
                  priority
                />
              </div>
              <div className="absolute inset-0 w-full z-[-9]">
                <Image
                  className="w-full h-[350px] blur-md"
                  src="https://images.unsplash.com/photo-1644219037686-b2ce2b0720a7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fusion"
                  height={400}
                  width={400}
                  priority
                />
              </div>
              <h1 className="text-xl text-white">
                Whether you`re a seasoned investor or just starting out, we
                offer comprehensive resources and expert guidance to help you
                shine bright in the crypto space. Join us and transform your
                financial landscape with cutting-edge solutions and unparalleled
                support. Your bright future starts here.
              </h1>
            </div>

            {/* <div className="w-full lg:flex-row flex-col flex gap-5">
              <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
                <div>
                  <CiStar size={30} />
                </div>
                <h1 className="text-3xl font-semibold">Our Mission</h1>
                <h1>
                  We aim to transform lives by providing nft expertise,
                  accelerating growth, and safeguarding futures through trusted
                  partnerships and innovative solutions.
                </h1>
              </ComponentTransition>

              <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
                <div>
                  <PiTelevisionSimpleLight size={30} />
                </div>
                <h1 className="text-3xl font-semibold">Our vision.</h1>
                <h1>
                  Our vision is to forge a financially secure future for
                  everyone, delivering innovative solutions and expert guidance
                  to navigate toward prosperity.
                </h1>
              </ComponentTransition>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Functionalities /> */}
      {/* <OurStory /> */}
      {/* <Clients /> */}
      {/* <OurTeam /> */}
      <CardEndOffer className="!px-0 !mt-0" />
    </ComponentTransition>
  );
}

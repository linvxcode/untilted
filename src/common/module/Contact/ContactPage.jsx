import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import React from "react";
import ContactForm from "./components/ContactForm";
import SectionText from "@/common/component/element/SectionText";
import Section from "@/common/component/element/Section";

export default function ContactPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <Section
          // icon={<FaStarOfLife size={20} className="" />}
          label="Contact"
        />
        <H1
          title="Get In Touch"
          className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
          textColor="normal"
        />
        <H1
          title="Feel free to reach out with any questions. We're here to help and will respond promptly. Please provide as much information as possible."
          className="!text-sm lg:!text-base w-full lg:w-[70%] !mt-5 !text-center justify-center items-center"
          textColor="opacity"
        />
      </div>
      <div className="w-full py-10  lg:px-44">
        <ContactForm />
      </div>
      <div className="w-full ">{/* <Functionalities  /> */}</div>
      <div className="w-full pb-20">{/* <Faqs /> */}</div>
    </div>
  );
}

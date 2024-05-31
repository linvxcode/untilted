import H1 from "@/common/component/element/H1";
import React from "react";
import AboutCard from "./AboutCard";
import { TeamItem } from "@/common/constant/TeamItem";
import SectionText from "@/common/component/element/SectionText";

export default function OurTeam() {
  return (
    <div className="w-full py-20">
      <div className="w-full gap-5 flex flex-col ">
        <div className="w-full  overflow-hidden flex flex-col justify-center items-center  ">
        <SectionText
            title="Meet Our Team"
            className="!w-auto rounded-full   !text-[#FFFFF7] "
          />
          <H1
            className=" lg:w-[70%] !font-medium !justify-center text-4xl lg:!text-5xl text-center "
            title="We evolved from a close knit team to a cohesive family."
            textColor="white"
          />
        </div>
        <div className="w-full overflow-hidden">
        <AboutCard item={TeamItem} />
        </div>
      </div>
    </div>
  );
}

import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import React from "react";

export default function Functionalities() {
  return (
    <div className="w-full py-10 flex flex-col">
      <div className="w-full justify-start items-start">
        <H1
          className=" !justify-start !text-3xl text-start "
          title="Loaded with essential functionalities"
          textColor="normal"
        />
      </div>
      <div className="w-full py-20">
        <ComponentTransition className="grid  md:grid-cols-2 lg:grid-cols-4 w-full">
          <ComponentTransition className="w-full flex justify-start md:border-e-[1px] md:border-[#727267] px-5 py-4 gap-5 items-start flex-col">
            <H1
              className=" !justify-start !text-2xl text-start "
              title="One Click Trading"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Execute trades with ease and efficiency using Fusion's one-click trading feature, streamlining the buying and selling process for busy traders and collectors."
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition delay={0.1} className="w-full flex justify-start lg:border-e-[1px] lg:border-[#727267] px-5 py-4 gap-5 items-start flex-col">
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Live Auction Platform"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Participate in live NFT auctions hosted on Fusion, where you can bid on and acquire unique digital assets in real-time."
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition delay={0.1} className="w-full flex justify-start md:border-e-[1px] md:border-[#727267] px-5 py-4 gap-5 items-start flex-col">
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Bid Management"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Manage your bids effectively with Fusion's bid management system, allowing you to track"
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition delay={0.1}  className="w-full flex justify-start  px-5 py-4 gap-5 items-start flex-col">
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Instant Buy Option"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Take advantage of Fusion's instant buy option to purchase NFTs at fixed prices"
              textColor="normal"
            />
          </ComponentTransition>
        </ComponentTransition>
      </div>
    </div>
  );
}

import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import Text from "@/common/component/element/Text";
import React from "react";

export default function CardFeature() {
  return (
    <div className="flex flex-col gap-10 w-full py-10">
      <div className="flex lg:flex-row flex-col w-full gap-10">
        <div className="basis-[100%]">
          <div className="w-full h-auto  rounded-3xl py-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[900px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/Aset/Wallet.svg"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
        <div className="w-full">
          <Text texts="Enhance your financial acumen with our user-friendly tools designed specifically for our Crypto offerings" />

          <h1>
            Level up your financial know-how effortlessly with our specialized
            tools, exclusively crafted to maximize your NFT investment potential
          </h1>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse w-full gap-10">
        <div className="w-full">
          <Text texts="Enhance your financial acumen with our user-friendly tools designed specifically for our Crypto offerings" />

          <h1>
            Level up your financial know-how effortlessly with our specialized
            tools, exclusively crafted to maximize your NFT investment potential
          </h1>
        </div>
        <div className="basis-[100%]">
          <div className="w-full h-auto  rounded-3xl px-5 py-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[800px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/Aset/Notifications.svg"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full gap-10">
        <div className="basis-[100%]">
          <div className="w-full h-auto bg-[#202020] px-5 rounded-3xl py-10 relative flex flex-col justify-center items-center overflow-hidden">
            {/* <Image
              className="w-full h-[800px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            /> */}
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/Aset/Graph.svg"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </div>
        <div className="w-full">
          <Text texts="Enhance your financial acumen with our user-friendly tools designed specifically for our Crypto offerings" />

          <h1>
            Level up your financial know-how effortlessly with our specialized
            tools, exclusively crafted to maximize your NFT investment potential
          </h1>
        </div>
      </div>
    </div>
  );
}
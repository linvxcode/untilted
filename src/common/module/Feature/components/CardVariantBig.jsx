import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import React from "react";
import { FaDigitalOcean } from "react-icons/fa";

export default function CardVariantBig() {
  return (
    <div className="flex flex-col h-auto w-full gap-10 py-5 justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Boost your financial savvy with our simple tools tailored for our
              NFT offer
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Level up your financial know-how effortlessly with our specialized
              tools, exclusively crafted to maximize your NFT investment
              potential
            </p>
          </div>
          <div className="w-full h-full top-[200px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/FUSION.png"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>

        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Boost your montly activity
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Level up your financial know-how effortlessly with our specialized
              tools, exclusively crafted to maximize your NFT investment
              potential
            </p>
          </div>
          <div className="w-full h-full top-[100px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/chart-stat.svg"
              alt="Image"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>
      </div>

      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Streaming Your Statistics Sales
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Seamlessly connect all your existing apps.
            </p>
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          {/* <Image
            className="w-full h-auto object-cover "
            src="/chart-stat-2.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          /> */}
          <Image
            className="w-full h-auto object-cover "
            src="/chart-sales.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          />
        </div>
      </ComponentTransition>
      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              <FaDigitalOcean size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Streaming Your Statistics seen by many countries
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Seamlessly connect all your existing apps.
            </p>
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          <Image
            className="w-full h-auto object-cover "
            src="/chart-stat-2.svg"
            alt="Image"
            height={400}
            width={400}
            priority
          />
        </div>
      </ComponentTransition>
    </div>
  );
}

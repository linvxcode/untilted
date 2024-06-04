import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { BlogItem } from "@/common/constant/BlogItem";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function LatestCard() {
  return (
    <div className="w-full flex lg:flex-row flex-col gap-5">
      <ComponentTransition
        // key={index}
        className={clsx(
          ` group lg:w-[40%] flex  justify-center items-center h-[420px] md:h-[600px]  relative overflow-hidden object-cover rounded-[40px]`
        )}
      >
        <Link href="/blog/future-financial" className="w-full ">
          <Image
            className="w-full  h-[650px] group-hover:lg:!grayscale-0  overflow-hidden absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1672080070747-9b28b4b403af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sss"
            width={800}
            height={800}
            priority
          />
          <div className="w-full flex  md:mt-[200px]">
            <div className="relative top-[100px] md:top-[150px] flex w-auto flex-col">
              <Image
                className="w-[60px] top-[-30px] left-0 h-auto  absolute inset-0 object-cover "
                src="/Aset/Vector 2.svg"
                alt="sss"
                width={800}
                height={800}
                priority
              />
              <h1 className="text-2xl font-semibold gap-2 bg-[#F4F4F2] rounded-tr-3xl px-5 py-3 flex flex-col">
                <span className="text-sm font-normal">February 15, 2024</span>
                Future Financial
              </h1>
            </div>
          </div>
          <div className="relative top-[100px] md:top-[150px] flex ">
            <Image
              className="w-[60px] top-[-30px] left-[218px] h-auto  absolute inset-0 object-cover "
              src="/Aset/Vector 2.svg"
              alt="sss"
              width={800}
              height={800}
              priority
            />
            <h1 className="text-sm bg-[#F4F4F2] rounded-tr-3xl px-5 pt-2 pb-[74px] md:w-[70%] line-clamp-3 overflow-hidden">
              Seize the Opportunity with Our Crypto Offer. Don`t miss out on an
              exclusive chance to elevate your portfolio with our special crypto
              offer
            </h1>
            <Image
              className="w-[60px] top-[50px] left-[352px] h-auto  absolute inset-0 object-cover"
              src="/Aset/Vector 2.svg"
              alt="sss"
              width={800}
              height={800}
              priority
            />
          </div>
        </Link>
      </ComponentTransition>
      
      <ComponentTransition delay={0.1} className="lg:w-[55%] w-full flex flex-row flex-wrap gap-5">
        <Link className="lg:w-[50%] w-full" href='/blog/future-financial'>
        <div className="bg-[#E8E8E8] h-[350px] rounded-tr-[6rem] rounded-3xl w-full relative flex">
          <div className="absolute w-[90px] h-[90px] bg-[#464646] rounded-full right-[-10px] top-[-20px] border-[10px] border-[#F4F4F2] flex justify-center items-center">
            <GoArrowUpRight size={30} className="text-white" />
          </div>
          <div className="pt-10 px-5 flex flex-col gap-5">
            <h1 className="text-sm">February 15, 2024</h1>
            <h1 className="text-2xl">Essential Tips and Tricks for Advanced Programmers</h1>

            <h1 className="text-base line-clamp-6 overflow-hidden">
              Discover the art of simplicity and elegance in web design with our
              comprehensive guide on mastering minimalism. Learn how to create
              stunning, user-friendly websites by focusing on clean lines,
              whitespace, and intuitive navigation.
            </h1>
          </div>
        </div>
        </Link>

        <Link className="lg:w-[46%] w-full" href='/blog/future-financial'>
        <ComponentTransition className=" h-[350px]  w-full relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 w-full z-[-9]">
            <Image
              className="w-full h-[600px] object-cover "
              src="https://images.unsplash.com/photo-1667202374066-03b435d61db0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </div>
          <div className="w-full flex px-5 py-5">
            <div className="w-full flex flex-col gap-5 text-white">
              <div className="w-full">
                <h1 className="text-sm">February 15, 2024</h1>
              </div>
              <div className="w-full flex flex-col gap-3">
                <h1 className="text-2xl">Best Practices for Developers</h1>
                <h1 className="text-sm">
                  Dive into the principles and techniques for writing clean,
                  maintainable code that stands the test of time.
                </h1>
              </div>
            </div>
          </div>
        </ComponentTransition>
        </Link>

        <Link className="lg:w-[40%] w-full" href='/blog/future-financial'>
        <ComponentTransition className=" h-[230px]  w-full relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 w-full z-[-9]">
            <Image
              className="w-full h-[300px] object-cover"
              src="https://images.unsplash.com/photo-1675334758735-5f989ff8237f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </div>
          <div className="w-full flex px-5 py-5 text-white">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full">
                <h1 className="text-sm">February 15, 2024</h1>
              </div>
              <div className="w-full flex flex-col gap-3">
                <h1 className="text-2xl">Trends and Technologies Shaping the Industry</h1>
              </div>
            </div>
          </div>
        </ComponentTransition>
        </Link>

        <Link href='/blog/future-financial' className="lg:w-[56%] w-full">
        <ComponentTransition className=" h-[230px]  w-full relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 w-full z-[-9]">
            <Image
              className="w-full h-[300px] object-cover"
              src="https://images.unsplash.com/photo-1674889404194-fed2f44e5ce6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fusion"
              height={400}
              width={400}
              priority
            />
          </div>
          <div className="w-full flex px-5 py-5 text-white">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full">
                <h1 className="text-sm">February 15, 2024</h1>
              </div>
              <div className="w-full flex flex-col gap-3">
                <h1 className="text-2xl">
                  A Beginner`s Journey into Web Development
                </h1>
                <h1 className="text-sm">
                  Follow a step-by-step guide tailored for newcomers eager to
                  break into the world of web development.
                </h1>
              </div>
            </div>
          </div>
        </ComponentTransition>
        </Link>


      </ComponentTransition>
    </div>
  );
}

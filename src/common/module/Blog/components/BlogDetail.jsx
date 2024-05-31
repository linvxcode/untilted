'use client'
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { BlogItem } from "@/common/constant/BlogItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function BlogDetail() {
  const pathname = usePathname();
  const blog = BlogItem.find((item) => `/blog/${item.slug}` === pathname);

  return (
    <div className="h-auto max-w-[1500px]  flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20 pb-10 overflow-hidden">
      <div className="w-full relative z-[9]">
        <div className="flex justify-start w-full mt-20 mb-5">
          <Link href="/blog" className=" gap-2 hover:gap-5 transition-all duration-300 items-center flex">
            <span>
              <BsArrowLeft size={20} className="" />
            </span>
            Back to blog
          </Link>
        </div>
        <div className="flex justify-start mt-5 relative">
          <H1
            title={blog.title}
            className="lg:!text-5xl !px-0 !text-5xl !text-[#EEEEEE]"
            textColor="normal"
          />
        </div>
        <div className="w-full mt-5">
        <p className="text-sm text-[#7D7F78]">{blog.date}</p>
        </div>
        <div className="flex mt-10  w-auto overflow-hidden justify-center items-center flex-col">
          <Image
            src={blog.img}
            alt={blog.title}
            width={400}
            height={400}
            priority
            className="md:h-[600px] w-[1300px] object-cover rounded-3xl"
          />
        </div>
        <div className="py-10  text-justify">
          <div>{blog.content}</div>
        </div>
      </div>
    </div>
  );
}

import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function FeatureCardIcon({ item }) {
  return (
    <div className="flex lg:flex-row flex-wrap w-full gap-5 py-10 justify-center items-center">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex h-auto gap-5 p-10 bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] overflow-hidden`
          )}
        >
          {items.icon && <div className="p-3 bg-[#DDFF00] rounded-2xl">{items.icon}</div>}
          <div className="w-full flex flex-col gap-5"> 
            <h1 className="text-xl text-[#CCCCCC]">{items.title}</h1>
            <p className="text-sm text-[#7A7A7A]">{items.desc}</p>
          </div>
          <div className="w-full flex  items-end">
            <Link className="w-full" href={items.link.href}>
              <ButtonArrow title={items.link.title} />
            </Link>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}

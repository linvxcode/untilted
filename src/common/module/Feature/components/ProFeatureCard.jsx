
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import React from "react";

export default function ProFeatureCard({ item }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-center items-center ">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className="w-full px-5 py-5 bg-[#f2f2f246] rounded-3xl border-[1px] border-[#2626262f]"
        >
          <div className="w-full relative">
            <Image
              alt="Hero"
              className="overflow-hidden rounded-xl w-full h-auto object-cover"
              height={722}
              src={items.img}
              width={550}
              priority
            />
            {items.bid}
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}

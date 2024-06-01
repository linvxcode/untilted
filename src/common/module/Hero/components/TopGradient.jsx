import Image from "@/common/component/element/Image";
import React from "react";

export default function TopGradient() {
  return (
    <div className="absolute w-full top-0">
      <Image
        className="w-full h-auto "
        src="/Aset/2.svg"
        alt="Fusion"
        height={400}
        width={400}
        loading="lazy"
      />
    </div>
  );
}

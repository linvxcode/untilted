import Image from "@/common/component/element/Image";
import React from "react";

export default function HeroAbstract() {
  return (
    <video autoPlay loop muted playsInline className="video opacity-50">
      <source src="/Aset/abstractbg.mp4" type="video/mp4" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-0% to-black to-70%"  /> */}
    </video>
  );
}

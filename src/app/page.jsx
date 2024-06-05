import Hero from "@/common/module/Hero/Hero";
import Faq from "@/common/module/Faq/Faq";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import Feature from "@/common/module/Feature/Feature";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
      <Hero />
      <Feature />
      <Faq />
      <CardEndOffer />
    </div>
  );
}

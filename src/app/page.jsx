import Hero from "@/common/module/Hero/Hero";
import Introduction from "@/common/module/Introduction/Introduction";
import HowItsWork from "@/common/module/How its work/HowItsWork";
import Testimonials from "@/common/module/Testimonials/Testimonials";
import Faq from "@/common/module/Faq/Faq";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import ProFeature from "@/common/module/Feature/ProFeature";
import Pricing from "@/common/module/Pricing/Pricing";
import Solution from "@/common/module/Solution/Solution";
import Experience from "@/common/module/Experience/Experience";
import Feature from "@/common/module/Feature/Feature";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
    <Hero />
    <Feature />
    {/* <Solution /> */}
    {/* <Testimonials />  */}
    {/* <HowItsWork /> */}
    {/* <Introduction /> */}
    {/* <Experience/> */}
    {/* <ProFeature /> */}
    {/* <Pricing /> */}
    <Faq />
    <CardEndOffer  />
    </div>
  );
}

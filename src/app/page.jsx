import Hero from "@/common/module/Hero/Hero";
import Faq from "@/common/module/Faq/Faq";
import CardEndOffer from "@/common/component/element/CardEndOffer";
import Feature from "@/common/module/Feature/Feature";
import Product from "@/common/module/Product/Product";
import Testimonials from "@/common/module/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col relative overflow-hidden justify-center items-center">
      <Hero />
      <Product />
      <Feature />
      <Faq />
      <Testimonials />
      <CardEndOffer />
    </div>
  );
}

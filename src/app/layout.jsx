import { Plus_Jakarta_Sans,Inter,Poppins } from "next/font/google";
import "../common/style/globals.css";
import { LenisProvider } from "@/common/component/element/LenisProvider";
import Navbar from "@/common/component/navbar/Navbar";
import Footer from "@/common/component/element/Footer";
import RectangleWave from "@/common/module/Hero/components/RectangleWave";

const plusj = Plus_Jakarta_Sans({ subsets: ["latin"] });
const poopins = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Untilted",
  description: "Untilted SaaS Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poopins.className} `}>
        <div className="relative overflow-hidden">
          <LenisProvider>
            <div className="w-full flex justify-center items-center">
              <Navbar />
            </div>
            <RectangleWave />
            {children}
            <div className="w-full flex justify-center items-center">
              <Footer />
            </div>
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}

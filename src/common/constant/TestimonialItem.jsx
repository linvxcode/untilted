import {
  IoLogoCodepen,
  IoLogoFoursquare,
  IoLogoFreebsdDevil,
  IoLogoHackernews,
  IoLogoPolymer,
} from "react-icons/io";
import { IoLogoIonitron } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const stars = Array.from({ length: 5 }, (_, index) => (
  <FaStar key={index} size={20} className="!text-yellow-500" />
));
 
export const TestimonialItem = [
  {
    name: "Sarah Johnson",
    testi:
      "Discovering Fusion has been a game-changer for me in the NFT world. The platform's intuitive interface and diverse collection of artworks have made buying and selling NFTs a breeze.",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoCodepen size={50} className="text-[#7D7F78]" />,
    jobTitle: "Digital Artist",
    star: stars,
  },
  {
    name: "Alex Smith",
    testi:
      "As a collector, I've found Fusion to be the perfect platform for exploring and acquiring unique NFTs. The community engagement and seamless transaction process have exceeded my expectations.",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoFoursquare size={50} className="text-[#7D7F78]" />,
    jobTitle: "Crypto Investor",
    star: stars,
  },
  {
    name: "Emily Chen",
    testi:
      "Fusion's platform has empowered me as an emerging NFT creator. The support and exposure I've gained through the platform have been instrumental in growing my digital art portfolio.",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoFreebsdDevil size={50} className="text-[#7D7F78]" />,
    jobTitle: "Aspiring NFT Artist",
    star: stars,
  },
  {
    name: "Michael Thompson",
    testi:
      "I've been impressed with Fusion's commitment to security and transparency in NFT transactions. Their emphasis on trust has made me feel confident in every trade I make.",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoHackernews size={50} className="text-[#7D7F78]" />,
    jobTitle: "Blockchain Developer",
    star: stars,
  },
  {
    name: "Jessica Lee",
    testi:
      "Fusion has revolutionized the way I engage with NFTs. Their user-friendly interface and comprehensive educational resources have helped me navigate the complexities of the market with ease.",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoPolymer size={50} className="text-[#7D7F78]" />,
    jobTitle: "Digital Marketer",
    star: stars,
  },
  {
    name: "David Rodriguez",
    testi:
      "Being part of the Fusion community has been a rewarding experience. The platform's dedication to fostering connections between creators and collectors has enriched my NFT journey",
    className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoIonitron size={50} className="text-[#7D7F78]" />,
    jobTitle: "Art Enthusiast",
    star: stars,
  },
];

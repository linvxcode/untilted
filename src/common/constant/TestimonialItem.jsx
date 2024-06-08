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
      "Discovering Untilted has been a game-changer for me in the NFT world.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoCodepen size={50} className="text-[#7D7F78]" />,
    jobTitle: "Digital Artist",
    star: stars,
  },
  {
    name: "Alex Smith",
    testi:
      "As a collector, I've found Untilted to be the perfect platform for exploring and acquiring unique NFTs.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoFoursquare size={50} className="text-[#7D7F78]" />,
    jobTitle: "Crypto Investor",
    star: stars,
  },
  {
    name: "Emily Chen",
    testi:
      "Untilted's platform has empowered me as an emerging NFT creator.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoFreebsdDevil size={50} className="text-[#7D7F78]" />,
    jobTitle: "Aspiring NFT Artist",
    star: stars,
  },
  {
    name: "Michael Thompson",
    testi:
      "I've been impressed with Untilted's commitment to security and transparency in NFT transactions.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoHackernews size={50} className="text-[#7D7F78]" />,
    jobTitle: "Blockchain Developer",
    star: stars,
  },
  {
    name: "Jessica Lee",
    testi:
      "Untilted has revolutionized the way I engage with NFTs.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoPolymer size={50} className="text-[#7D7F78]" />,
    jobTitle: "Digital Marketer",
    star: stars,
  },
  {
    name: "David Rodriguez",
    testi:
      "Being part of the Untilted community has been a rewarding experience.",
    // className: "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoLogoIonitron size={50} className="text-[#7D7F78]" />,
    jobTitle: "Art Enthusiast",
    star: stars,
  },
];

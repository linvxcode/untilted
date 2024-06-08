import React from "react";
import { motion } from "framer-motion";
import { NavigationItem } from "@/common/constant/NavigationItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Links } from "./NavLink";

const Anim = {
  open: (height = 1000) => ({
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    height: "800px",
    zIndex: 99,
    transition: {
      duration: 1,
      ease: [0.8, 0.2, 0, 1.4],
    },
  }),
  closed: {
    borderBottomLeftRadius: "9999px",
    borderBottomRightRadius: "9999px",
    height: "0px",
    zIndex: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavigationMenuMobile = ({ open, close }) => {
  const Child = {
    Isopen: {
      y: 100,
      opacity: 1,
      // height: "100%",
    },
    closed: {
      y: 0,
      opacity: 0,
      // height: "0px",
    },
  };
  const pathname = usePathname();
  return (
    <div>
      <motion.div
        className="right-0 w-full  lg:px-10 px-5 top-0 absolute flex h-screen bg-[#F4F4F2]"
        style={{
          borderBottomLeftRadius: "9999px",
          borderBottomRightRadius: "9999px",
        }}
        initial={false}
        variants={Anim}
        animate={open ? "open" : "closed"}
      >
        <div className="mt-20 w-full overflow-hidden">
          <div className="flex justify-center flex-col gap-5 w-full lg:px-10 overflow-hidden">
            {NavigationItem.map((item, index) => (
              <motion.div
                key={index}
                className="h-auto w-full overflow-hidden"
                initial={{
                  opacity: 0,
                  y: 200,
                }}
                animate={{
                  y: open ? 0 : 200,
                  opacity: open ? 1 : 0,
                }}
                // variants={Child}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Links
                  onClick={close}
                  title={item.title}
                  pathname={pathname}
                  href={item.src}
                  className=" w-full relative "
                ></Links>
              </motion.div>
            ))}
          </div>
          <Link href="/" className=" flex py-5 justify-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-[#9ccff8]  bg-[linear-gradient(110deg,#02020200,45%,#9ccff8,55%,#02020200)] bg-[length:200%_100%] px-6 font-medium text-[#696969] transition-colors ">
              Get This Template
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NavigationMenuMobile;

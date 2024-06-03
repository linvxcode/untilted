"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchButton() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchInput, setInput] = useState("");

  return (
    <ComponentTransition className="w-auto mt-5">
      
      <div className="mx-auto flex w-full max-w-lg items-center justify-center">
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-full p-[2.8px]">
          <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)] "></div>

          <button
            onClick={() => setOpenSearchModal(!openSearchModal)}
            className="bg-[#E8E8E8]  flex px-5 py-4 items-center z-20 justify-center gap-2 rounded-full"
          >
            <div>
              <CiSearch size={20} className="text-[#333333] " />
            </div>
            <div>
              <h1 className="text-[#333333] ">Search articles here...</h1>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openSearchModal && (
          <div className="">
            <motion.div
              className="absolute bg-[#E8E8E8] left-[15%] lg:left-[40%] rounded-full top-[150px] z-[9999] overflow-hidden"
              initial={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
            >
              <div className="flex  justify-center relative  px-10 py-4 items-center gap-2 rounded-full">
                <div>
                  <CiSearch size={20} />
                </div>
                <div>
                  <input
                    className="text-[#fffff7b7] bg-transparent outline-none"
                    type="search"
                    name=""
                    id=""
                    value={searchInput}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search articles here..."
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
            {searchInput !== "" && (
              <AnimatePresence>
                <motion.div
                  className="bg-[#E8E8E8] left-[15%] lg:left-[40%] top-[181px]  z-[999] w-[285px] absolute "
                  initial={{
                    height: "0%",
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: "0%",
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1,
                  }}
                >
                  <div className="px-5 py-10  ">
                    <h1>Not Found</h1>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
            <div
              className="absolute z-[99] inset-0 h-[500vh] bg-[#f4f4f2ec]"
              onClick={() => setOpenSearchModal(!openSearchModal)}
            ></div>
          </div>
        )}
      </AnimatePresence>
    </ComponentTransition>
  );
}

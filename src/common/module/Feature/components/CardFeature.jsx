"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import Text from "@/common/component/element/Text";
import { motion } from "framer-motion";
import React from "react";

export default function CardFeature() {
  return (
    <div className="flex flex-col gap-10 w-full py-10">
      <div className="flex lg:flex-row flex-col w-full gap-10">
        <motion.div
          className="w-full"
          initial={{
            opacity: 0,
            x: -200,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="w-full h-auto  rounded-3xl py-10 px-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[900px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <div className="w-full relative flex justify-center items-center flex-col mb-5">
              <div className="w-full flex justify-center items-center">
                <Text texts="Simple Analytics" />
              </div>

              <h1 className="text-center">
                Enpower your choices with insight demind from our real-time data
                streams
              </h1>
            </div>
            <ComponentTransition delay={0.1} className="w-full">
              <Image
                className="w-full lg:w-[80%] mx-auto h-auto object-cover relative top-0 "
                src="/Aset/Analitycs.svg"
                alt="Image"
                height={400}
                width={400}
                loading="lazy"
              />
            </ComponentTransition>
          </div>
        </motion.div>
      </div>

      <div className="flex lg:flex-row flex-col w-full gap-10">
        <motion.div
          className="w-full"
          initial={{
            opacity: 0,
            x: -200,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="w-full h-auto  rounded-3xl py-10 px-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[1600px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <div className="w-full relative flex justify-center items-center flex-col mb-5">
              <div className="w-full flex justify-center items-center">
                <Text texts="Real Time Notifications" />
              </div>

              <h1 className="text-center">
                Enpower your choices with insight demind from our real-time Notifications
                
              </h1>
            </div>
            <ComponentTransition delay={0.1} className="w-full">
              <Image
                className="w-full lg:w-[50%] mx-auto h-auto object-cover relative top-0 "
                src="/Aset/Notifications.svg"
                alt="Image"
                height={400}
                width={400}
                loading="lazy"
              />
            </ComponentTransition>
          </div>
        </motion.div>
      </div>

      
      <div className="flex lg:flex-row flex-col w-full gap-10">
        <motion.div
          className="w-full"
          initial={{
            opacity: 0,
            x: -200,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="w-full h-auto  rounded-3xl py-10 px-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[1600px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1588345921586-7408ea1b2c3c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <div className="w-full relative flex justify-center items-center flex-col mb-5">
              <div className="w-full flex justify-center items-center">
                <Text texts="Simple History" />
              </div>

              <h1 className="text-center">
                Enpower your choices with insight demind from our History
                
              </h1>
            </div>
            <ComponentTransition delay={0.1} className="w-full">
              <Image
                className="w-full lg:w-[50%] mx-auto h-auto object-cover relative top-0 "
                src="/Aset/History.svg"
                alt="Image"
                height={400}
                width={400}
                loading="lazy"
              />
            </ComponentTransition>
          </div>
        </motion.div>
      </div>

      <div className="flex lg:flex-row flex-col w-full gap-10">
        <motion.div
          className="w-full"
          initial={{
            opacity: 0,
            x: -200,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="w-full h-auto  rounded-3xl py-10 px-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[1600px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1588345921489-f61ad896c562?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <div className="w-full relative flex justify-center items-center flex-col mb-5">
              <div className="w-full flex justify-center items-center">
                <Text texts="Real Time Analytics Market" />
              </div>

              <h1 >
                Enpower your choices with insight demind from our Real time data analytics market
                
              </h1>
            </div>
            <ComponentTransition delay={0.1} className="w-full">
              <Image
                className="w-full lg:w-[80%] mx-auto h-auto object-cover relative top-0 "
                src="/Aset/Market.svg"
                alt="Image"
                height={400}
                width={400}
                loading="lazy"
              />
            </ComponentTransition>
          </div>
        </motion.div>
      </div>

      

      
    </div>
  );
}

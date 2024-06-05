"use client";
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
          className="basis-[100%]"
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
          <div className="w-full h-auto  rounded-3xl py-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[700px] lg:h-[900px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/Aset/Wallet.svg"
              alt="Image"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
        </motion.div>
        <div className="w-full">
          <Text texts="Enhance your financial acumen with our user-friendly tools designed specifically for our Crypto offerings" />

          <h1>
            Enhance your financial acumen with our state-of-the-art,
            user-friendly tools designed specifically for our Crypto offerings.
            These tools are meticulously crafted to provide you with the
            insights, analytics, and functionalities necessary to navigate the
            dynamic world of cryptocurrencies confidently. Whether you`re a
            novice investor or a seasoned trader, our suite of crypto tools is
            tailored to meet your needs, ensuring you have the best resources at
            your fingertips to make informed financial decisions.
          </h1>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse w-full gap-10">
        <div className="w-full">
          <Text texts="Real-Time Notifications: Keep Users Informed and Engaged" />

          <h1>
            The Notifications feature is meticulously designed to provide users
            with timely and visually engaging alerts about important updates,
            messages, or events. This feature ensures that users stay informed
            and never miss critical information. The notification icon itself is
            a testament to modern design principles, featuring intricate details
            and polished aesthetics. It is crafted to seamlessly integrate into
            any user interface while ensuring it stands out prominently,
            capturing the user`s attention immediately. By combining
            functionality with superior visual appeal, the Notifications feature
            enhances the overall user experience, making interactions smoother
            and more intuitive.
          </h1>
        </div>
        <motion.div
          className="basis-[100%]"
          initial={{
            opacity: 0,
            x: 200,
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
          <div className="w-full h-auto  rounded-3xl px-5 py-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[800px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/Aset/Notifications.svg"
              alt="Image"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <div className="flex lg:flex-row flex-col w-full gap-10 ">
        <motion.div
          className="basis-[100%]"
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
          <div className="w-full h-auto lg:h-[600px] px-5 rounded-3xl py-10 relative flex flex-col justify-center items-center overflow-hidden">
            <Image
              className="w-full h-[800px] object-cover absolute inset-0"
              src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              height={400}
              width={400}
              priority
            />
            <Image
              className="w-full h-auto object-cover relative top-0"
              src="/chart-sales.svg"
              alt="Image"
              height={400}
              width={400}
              loading="lazy"
            />
          </div>
        </motion.div>
        <div className="w-full">
          <Text texts="Empower Your Decisions with Our Sales Analytics Chart" />

          <h1>
            The Sales Analytics Chart feature provides a comprehensive and
            detailed visualization of sales data, empowering users to analyze
            trends, patterns, and performance metrics over various time periods.
            This user-friendly tool is meticulously designed to present complex
            and multifaceted sales information in a clear, intuitive, and
            accessible manner. By transforming raw data into visually compelling
            and easily interpretable charts, the Sales Analytics Chart
            facilitates informed, data-driven decision-making for businesses and
            individuals alike.
          </h1>
        </div>
      </div>
    </div>
  );
}

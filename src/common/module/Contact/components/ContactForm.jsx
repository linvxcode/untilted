"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import clsx from "clsx";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(formErrors).some((error) => error);

    if (name == "" && email == "") {
      alert("Please enter both name & email id");
      return false;
    }

    if (!hasErrors) {
      setIsLoading(true);
      try {
        toast.success("Message Sent!");
        setEmail("");
        setMessage("");
        setName("");

      } catch (error) {
        toast.error("message not sent!");
      }
      setIsLoading(false);
    } else {
      alert("Error!");
    }
  };

  const isSubmitDisabled = Object.values(formErrors).some((error) => error);

  return (
    <ComponentTransition className="w-full">
    <form onSubmit={handleSubmit} className="w-full mt-5 rounded-3xl px-5 lg:px-10 py-10 bg-gradient-to-b from-[#9ccff8] to-[#F4F4F2]">
      <div className="w-full pb-10">
      <H1
        className=" !justify-start !text-4xl font-semibold text-start "
        title="Contact Us"
        textColor="white"
      />
      </div>
      <div className="flex flex-col flex-grow gap-5 ">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="w-full py-2 px-3 bg-[#E8E8E8] rounded-md   placeholder-[#aaaaaa] text-[#0c0c0c]  focus:outline-none "
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full py-2 px-3 rounded-md   bg-[#E8E8E8] placeholder-[#aaaaaa] text-[#0c0c0c]   focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          className="w-full py-2 px-3 rounded-md   bg-[#E8E8E8] placeholder-[#aaaaaa] text-[#0c0c0c]  focus:outline-none "
          rows={10}
          placeholder="Message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="flex justify-center">
        <button
          className={clsx(
            "py-2.5 bg-[#9ccff8] px-5 text-black w-auto rounded-2xl  hover:bg-[#FFFFF7] hover:scale-[101%] duration-300 transition-all"
          )}
          type="submit"
          icon={<></>}
          disabled={isSubmitDisabled}
        >
          {isLoading ? "Sending Message..." : "Send Message"}
        </button>
        </div>

      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
    </ComponentTransition>
  );
};

export default ContactForm;

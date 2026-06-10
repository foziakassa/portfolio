"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../actions/sendEmail";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

export default function Form() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("sending...");
    
    // ✅ Call the server action (NOT Resend directly)
    const res = await sendEmail(formData);
    
    if (res?.success) {
      setStatus("✅ Sent successfully!");
      event.currentTarget.reset();
    } else {
      setStatus("❌ Error: " + (res?.error || "Unknown error"));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col items-center justify-center space-y-4">
      <motion.input
        variants={item}
        type="text"
        name="name"
        placeholder="name"
        required
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.input
        variants={item}
        type="email"
        name="email"
        placeholder="email"
        required
        className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.textarea
        variants={item}
        name="message"
        placeholder="message"
        required
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
      />

      <motion.input
        variants={item}
        value="Shoot me a message!"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
        disabled={status === "sending..."}
      />
      <div className="min-h-[28px] text-sm text-white/80">{status}</div>
    </form>
  );
}
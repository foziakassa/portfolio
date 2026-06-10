// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { scale: 0 },
//   show: { scale: 1 },
// };

// export default function Form() {
//   return (
//     <motion.form
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="max-w-md w-full flex flex-col 
//       items-center justify-center space-y-4"
//     >
//       <motion.input
//         variants={item}
//         type="text"
//         placeholder="name"
//         className="w-full p-2 rounded-md shadow-lg 
//         text-foreground focus:outline-none focus:ring-2 
//         focus:ring-accent/50 custom-bg"
//       />
      
//       <motion.input
//         variants={item}
//         type="email"
//         placeholder="email"
//         className="w-full p-3 rounded-md shadow-lg 
//         text-foreground focus:outline-none focus:ring-2 
//         focus:ring-accent/50 custom-bg"
//       />
      
//       <motion.textarea
//         variants={item}
//         placeholder="message"
//         className="w-full p-2 rounded-md shadow-lg 
//         text-foreground focus:outline-none focus:ring-2 
//         focus:ring-accent/50 custom-bg"
//       />

//       <motion.input
//         variants={item}
//         value="Shoot me a message!"
//         className="px-10 py-4 rounded-md shadow-lg
//          bg-background border border-accent/30 border-solid
//          hover:shadow-glass-sm backdrop-blur-sm 
//          text-foreground focus:outline-none focus:ring-2
//           focus:ring-accent/50 cursor-pointer capitalize"
//         type="submit"
//       />
//     </motion.form>
//   );
// }


"use client";
import { Resend } from 'resend';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../actions/sendEmail"; // adjust the import if needed

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

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setStatus("sending...");
    // const res = await sendEmail(formData);
    const resend = new Resend('re_LHPkhNGb_MkGsajigUiWX54FVGopwvTDu');

await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['foziakassa19@gmail.com'],
  subject: 'hello world',
  html: '<p>it works!</p>',
});
    if (res?.success) setStatus("Sent successfully!");
    else setStatus("Error: " + (res?.error || "Unknown error"));
  }
  

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
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
      />
      <div className="min-h-[28px] text-white">{status}</div>
    </form>
  );
}

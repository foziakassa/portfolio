"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const name = formData.get("name");
  const userEmail = formData.get("email");  // user’s email entered on your site
  const message = formData.get("message");

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // MUST be your verified sender email
      to: ["foziakassa7@gmail.com"],                   // your email to receive form messages
      reply_to: userEmail,                               // user email so you can reply directly
      subject: `New message from ${name}`,
      text: 
        `You have received a new message from your portfolio contact form:\n\n` +
        `Name: ${name}\n` +
        `Email: ${userEmail}\n\n` +
        `Message:\n${message}`,
    });
    return { success: true, data };
  } catch (error) {
    return { error: error.message };
  }
}

"use server";

import { z } from "zod";
import { Resend } from "resend";

// Add this log to your terminal (not browser) to see if it's loading
console.log("Is API Key loaded?", !!process.env.RESEND_API_KEY);


const resend = new Resend(process.env.RESEND_API_KEY);


const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
})

export async function sendEmail(data: unknown) {
    const parsedData = contactFormSchema.safeParse(data);
    if (!parsedData.success) {
      throw new Error("Invalid form data");
    }
  
    const { name, email, subject, message } = parsedData.data;
  
    const envEmail = process.env.CONTACT_EMAIL;
    if (!envEmail) {
      throw new Error("CONTACT_EMAIL environment variable is not set");
    }
  
    try {
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: envEmail,
        replyTo: email,
        subject: subject,
        html: `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2>New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `,
      });
    
      if (error) {
        console.error("Resend API Error:", error);
        return { success: false, message: error.message };
      }
    
      console.log("Email Sent ID:", data?.id);
    
      return {
        success: true,
        message: "Email sent successfully!",
      };
    } catch (error) {
      console.error("FULL ERROR:", error); // 👈 IMPORTANT
  
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }
  }
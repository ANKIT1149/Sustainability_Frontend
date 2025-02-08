/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const SendMail = async ({ email, name, query, issue }: any) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c219e2d0ed59a0",
      pass: "5c0c250ca47f63",
    },
  });

  // 🔹 Email Content
  const mailOptions = {
    from: `"Contact Form" ${email}`,
    to: "Aryanshraj1139@gmail.com",
    subject: "New Contact Form Submission",
    html: `
        <h3>New Query Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Query:</strong> ${query}</p>
        <p><strong>Issue:</strong> ${issue}</p>
      `,
  };

  // 🔹 Send Email
  const sendMail = await transporter.sendMail(mailOptions);

  return NextResponse.json({
    message: "Mail sent successfully",
    sendMail,
  });
};

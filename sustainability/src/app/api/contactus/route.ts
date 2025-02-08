/* eslint-disable @typescript-eslint/no-explicit-any */
import { SendMail } from "@/helpers/sendmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, query, issue } = await req.json();

    await SendMail({ name, email, query, issue });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

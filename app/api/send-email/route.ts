export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const templateParams = {
    to_name: "Rickypapini@gmail.com",
    message: data,
  };

  var msgData = {
    service_id: "service_6wug1nq",
    template_id: "template_mwg23tn",
    user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
    accessToken: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY as string,
    template_params: {
      to_name: "Ricky",
      email: templateParams.to_name,
      message: templateParams.message,
    },
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    });

    if (!res.ok) {
      throw new Error("Failed to send email");
    }
    return NextResponse.json({ message: "Email sent", success: true });
  } catch (error) {
    console.log(error);
  }
}

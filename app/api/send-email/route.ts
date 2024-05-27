export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
// import emailjs from "@emailjs/nodejs";

export async function POST(req: Request) {
  // const msg = await req.json();
  const data = await req.json();

  const { NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_PRIVATE_KEY } =
    process.env;

  const templateParams = {
    to_name: "Rickypapini@gmail.com",
    message: data,
  };

  var msgData = {
    service_id: "service_6wug1nq",
    template_id: "template_mwg23tn",
    user_id: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    accessToken: NEXT_PUBLIC_EMAILJS_PRIVATE_KEY,
    template_params: {
      to_name: "Ricky",
      email: templateParams.to_name,
      message: templateParams.message,
    },
  };

  try {
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    });
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

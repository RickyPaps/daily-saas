export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req: Request) {
  const data = await req.json();

  const { NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_PRIVATE_KEY } =
    process.env;

  const templateParams = {
    to_name: "Rickypapini@gmail.com",
    message: data,
  };

  try {
    emailjs
      .send("service_6wug1nq", "template_mwg23tn", templateParams, {
        publicKey: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        privateKey: NEXT_PUBLIC_EMAILJS_PRIVATE_KEY!,
      })
      .then((response) => {
        console.log(response);
      });
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

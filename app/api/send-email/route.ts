import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req: NextResponse) {
  const msg = await req.json();

  const { EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;

  const templateParams = {
    to_name: "Ricky",
    message: msg,
  };

  emailjs
    .send("service_6wug1nq", "template_mwg23tn", templateParams, {
      publicKey: EMAILJS_PUBLIC_KEY!,
      privateKey: EMAILJS_PRIVATE_KEY!,
    })
    .then(
      () => {
        return NextResponse.json(
          { response: "Email sent successfully" },
          { status: 200 }
        );
      },
      () => {
        NextResponse.json(
          { response: "Failed to send email" },
          { status: 500 }
        );
      }
    );
}

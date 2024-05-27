import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

// async function streamToString(stream: any) {
//   const chunks = [];
//   for await (const chunk of stream) {
//     chunks.push(chunk);
//   }
//   return Buffer.concat(chunks).toString("utf8");
// }

export async function POST(req: Request) {
  // const msg = await req.json();
  const data = await req.json();

  const { EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;

  const templateParams = {
    to_name: "Ricky",
    message: data,
  };

  try {
    emailjs
      .send("service_6wug1nq", "template_mwg23tn", templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY!,
        privateKey: EMAILJS_PRIVATE_KEY!,
      })
      .then((response) => {
        console.log(response);
      });
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error, status: 500 });
  }
}

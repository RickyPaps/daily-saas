export const dynamic = "force-dynamic";
import emailjs from "@emailjs/nodejs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const messages = [
    {
      role: "user",
      content:
        "Generate me a small and new SaaS product idea that can be built with Next.js and TailwindCSS. The idea should be precise and be able to be completed in a day. If you refence any API's to be used please reference the API's. If the idea is using Authentication, we will be using Clerk. The idea is to increase my skills in my craft and add more projects into my portfolio. Also, Please generate me a rough UI design.",
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        process.env.NEXT_PUBLIC_OPENAI_API_KEY as string
      }`,
    },
    body: JSON.stringify({
      messages: messages,
      model: "gpt-3.5-turbo-16k",
    }),
  });

  const data = await response.json();

  const templateParams = {
    to_name: "Rickypapini@gmail.com",
    message: data?.choices[0]?.message.content,
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
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    }).then(() => {
      return NextResponse.json({ message: "Email sent", success: true });
    });
    return NextResponse.json({ message: "Email sent", success: true });
  } catch (error) {
    console.log(error);
  }
}

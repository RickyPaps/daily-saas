import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { NEXT_PUBLIC_OPENAI_API_KEY } = process.env;

  const messages = [
    {
      role: "user",
      content:
        "Generate me a small and new SaaS product idea that can be built with Next.js and TailwindCSS. The idea should be precise and be able to be completed in a day. If you refence any API's to be used please reference the API's. If the idea is using Authentication, we will be using Clerk. The idea is to increase my skills in my craft and add more projects into my portfolio. Also, Please generate me a rough UI design.",
    },
  ];

  const respone = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      messages: messages,
      model: "gpt-3.5-turbo-16k",
    }),
  });

  const data = await respone.json();

  return NextResponse.json(
    { idea: data.choices[0].message.content },
    { status: 200 }
  );
}

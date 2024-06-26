export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
export const maxDuration = 60; // This function can run for a maximum of 60 seconds

export async function GET(req: Request) {
  const auth = req.headers.get("Authorization");

  if (auth !== `Bearer ${process.env.CRON_SECRET as string}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = [
    {
      role: "user",
      content:
        "Please generate me a SaaS application that I can build using Next.js 14 with the App directory, TypeScript, TailwindCSS for styling Shadcn for UI components, and MongoDB with Mongoose for the database. If the application uses user login then use Clerk for authentication, but only if the application requires it. I want the SaaS idea to utilize ChatGPT models to solve problems that we might not have been able to solve before. If any API's are going to be used please reference them and their endpoints.  Finally, I would like a small breakdown as to how you think I should tackle this project over the 48 hours. From building the UI to the API calls etc.",
    },
  ];

  try {
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
        model: "gpt-4",
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
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    });
    return NextResponse.json({ message: "Email sent", success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

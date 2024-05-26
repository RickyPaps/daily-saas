"use client";

import { useEffect, useState } from "react";
import Notifications from "./components/Notifications";
import { useFetchGenerate } from "./Hooks/useChatGptPrompt";

export default function Home() {
  const [idea, setIdea] = useState<string | null>(null);

  // const sendEmail = async (idea: string) => {
  //   const message = {
  //     user_id: "DsnuKK47qQSTAwzg_",
  //     service_id: "service_6wug1nq",
  //     template_id: "template_mwg23tn",
  //     template_params: {
  //       to_name: "Ricky",
  //       message: `${idea}`,
  //     },
  //   };

  //   const response = await fetch(
  //     "https://api.emailjs.com/api/v1.0/email/send",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(message),
  //     }
  //   );

  //   if (response.ok) {
  //     console.log("Email sent successfully");
  //   } else {
  //     console.error("Failed to send email");
  //   }
  // };

  useEffect(() => {
    const FetchIdea = async () => {
      debugger;
      const data = await useFetchGenerate();

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const data2 = await response.json();
      console.log(data2);

      setIdea(data);
    };
    FetchIdea();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-4">Daily SaaS idea</h1>
      {idea && <Notifications idea={idea} />}
    </div>
  );
}

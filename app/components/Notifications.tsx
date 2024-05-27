"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFetchGenerate, useSendEmail } from "../Hooks/useChatGptPrompt";

const Notifications: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const [idea, setIdea] = useState<string | null>(null);

  useEffect(() => {
    if (ref.current && idea) {
      ref.current.innerHTML = idea;

      const SendEmail = async () => {
        debugger;
        const data = await useSendEmail(idea);
        console.log(data);
      };
      SendEmail();
    }
  }, [idea]);

  useEffect(() => {
    const FetchIdea = async () => {
      debugger;
      const data = await useFetchGenerate();

      setIdea(data);
    };
    FetchIdea();
  }, []);

  return (
    <div className="p-8 mb-4 bg-slate-700 border-l-4 border-slate-500 text-white w-full overflow-scroll">
      <pre className="whitespace-break-spaces" ref={ref} />
    </div>
  );
};

export default Notifications;

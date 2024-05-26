import React, { useEffect, useRef } from "react";

type NotificationProps = {
  idea: string;
};

const Notifications: React.FC<NotificationProps> = ({ idea }) => {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (ref.current && idea) {
      ref.current.innerHTML = idea;
    }
  }, [idea]);

  return (
    <div className="p-8 mb-4 bg-slate-700 border-l-4 border-slate-500 text-white w-full overflow-scroll">
      <pre className="whitespace-break-spaces" ref={ref} />
    </div>
  );
};

export default Notifications;

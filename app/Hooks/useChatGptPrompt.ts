export const useFetchGenerate = async () => {
  const response = await fetch("/api/generate");
  const data = await response.json();
  return data.idea;
};

export const useSendEmail = async (idea: string) => {
  const response: any = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idea),
  });
  debugger;
  const data = await response.json();
  return data;
};

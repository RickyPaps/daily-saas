export const useFetchGenerate = async () => {
  const response = await fetch("/api/generate");
  const data = await response.json();
  return data.idea;
};

export const useSendEmail = async (idea: string) => {
  const templateParams = {
    to_name: "Rickypapini@gmail.com",
    message: idea,
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
  debugger;
  try {
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    }).then((res) => {
      debugger;
      return res.json();
    });
  } catch (error) {
    console.log(error);
  }
};

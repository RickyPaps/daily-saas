import Notifications from "./components/Notifications";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-4">Daily SaaS idea</h1>
      <Notifications />
    </div>
  );
}

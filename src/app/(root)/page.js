"use client";
import toast from "react-hot-toast";

export default function Home() {
  const toastFire = () => {
    return toast.success("heeelllllllllllo there!");
  };
  return (
    <main className="min-h-screen">
      Hello men ....
      <button onClick={toastFire}>hiii</button>
    </main>
  );
}

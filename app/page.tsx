import Image from "next/image";
import generateTextAction from "@/app/actions/ai.actions";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between px-24 py-6">
      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full">
        <input className="border p-2 rounded-md w-[80%] outline-none"
        placeholder="Type your message here...."
        type="text" />
        <button className="bg-neutral-700 text-white p-2 cursor-pointer rounded-md ml-4 w-[18%]">Send</button>
      </div>
    </main>
  );
}

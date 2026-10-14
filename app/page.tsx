"use client"
import Image from "next/image";
import generateTextAction from "@/app/actions/ai.actions";
import { useState } from "react";

export default function Home() {
  const [prompt,setPrompt]=useState<string>("");
  const [output,setOutput]=useState<string>("")

  const handleSendPrompt= async ()=>{
    const response=await generateTextAction(prompt);
    setOutput(response)
    setPrompt("")
  }
  
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between px-24 py-6">
      {
        output && (
          <div>
            <h1 className="text-2xl font-bold mb-4"> AI Response: </h1>
            <p className="text-lg">{output}</p>
          </div>
        )
      }
      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full">
        <input
         type="text"
         className="border p-2 rounded-md w-[80%] outline-none"
        placeholder="Type your message here...."
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        />
        <button onClick={handleSendPrompt}
        className="bg-neutral-700 text-white p-2 cursor-pointer rounded-md ml-4 w-[18%]">Send</button>
      </div>
    </main>
  );
}

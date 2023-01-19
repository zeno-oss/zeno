import { countAtom } from "$store";
import { invoke } from "@tauri-apps/api/tauri";
import { useAtom } from "jotai";
import { useState } from "react";
import { api } from "../utils/trpc";

const Home = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const hello = api.example.hello.useQuery({ text: "client" });
  const [count, setCount] = useAtom(countAtom);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center text-2xl">
      <span>Greetings from Zeno 💕 </span>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <span className="mt-4 text-lg">This comes from trpc server: </span>
          <span className="text-lg font-bold">{hello.data?.greeting}</span>
          <span className="text-lg font-bold">{hello.error?.message}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="mt-4 text-lg">This comes from jotai state: </span>
          <span className="text-lg font-bold">{count}</span>
          <button className="btn-blue" onClick={() => setCount(count + 1)}>
            Increment
          </button>
        </div>
        <div className="flex flex-col items-center">
          <span className="mt-4 text-lg">This comes from rust: </span>
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => setName(e.currentTarget.value)}
              className="rounded border-2 p-1 text-center text-sm "
              placeholder="Enter a name..."
            />
            <button className="btn-blue" onClick={() => greet()}>
              Greet
            </button>
          </div>
          <span className="text-sm">{greetMsg}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

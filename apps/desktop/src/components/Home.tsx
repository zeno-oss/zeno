import { countAtom } from "$store";
import { invoke } from "@tauri-apps/api/tauri";
import { useAtom } from "jotai";
import { useState } from "react";
import { api } from "../utils/trpc";
import Button from "./Button";

const Home = () => {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const hello = api.example.hello.useQuery({ text: "client" });
  const [count, setCount] = useAtom(countAtom);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  if (!hello.data) return <div>Loading...</div>;

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center text-xl">
      <span className="text-lemon-400 text-3xl font-bold">
        Greetings from Zeno 👋
      </span>
      <div className="mt-4">
        <div className="mt-4 flex flex-col items-center">
          <span className="text-lg">This comes from trpc server: </span>
          <span className="text-lg font-bold">{hello.data.greeting}</span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <span className="text-lg">This comes from jotai state: </span>
          <span className="text-lg font-bold">{count}</span>
          <Button
            onClick={() => setCount(count + 1)}
            title="Increment"
            className="mt-2"
          />
        </div>
        <div className="mt-4 flex flex-col items-center">
          <span className="text-lg">This comes from rust tauri backend: </span>
          <div className="flex items-center space-x-2">
            <input
              onChange={(e) => setName(e.currentTarget.value)}
              className="text-gray-950 rounded border-2 px-2 py-1 text-center text-sm"
              placeholder="Enter a name..."
            />
            <Button onClick={greet} title="Greet" />
          </div>
          <span className="text-sm">{greetMsg}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

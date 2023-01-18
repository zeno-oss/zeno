import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import { useState } from "react";
import nextLogo from "../assets/next.svg";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import { increment, useAppDispatch, useAppSelector } from "../utils/store";
import { api } from "../utils/trpc";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const hello = api.example.hello.useQuery({ text: "client" });
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <div className="row">
        <span className="logos">
          <a href="https://nextjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={nextLogo}
              className="logo next"
              alt="Next logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://tauri.app" target="_blank">
            <Image
              width={144}
              height={144}
              src={tauriLogo}
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://reactjs.org" target="_blank">
            <Image
              width={144}
              height={144}
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </span>
      </div>

      <p>Click on the Tauri, Next, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>

      <p>{greetMsg}</p>
      <p>{hello.data?.greeting}</p>
      <p>{hello.error?.message}</p>
    </div>
  );
}

export default App;

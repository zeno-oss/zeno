import Head from "next/head";
import React from "react";

import { trpc } from "../utils/trpc";

function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Zeno</title>
      </Head>
      <div className="flex h-[100vh] items-center justify-center flex-col text-2xl">
        <span>Greetings from Zeno 💕 </span>
        <span className="text-lg mt-4">This comes from the server:</span>
        <span className="text-lg font-bold">{hello.data.greeting}</span>
      </div>
    </React.Fragment>
  );
}

export default Home;

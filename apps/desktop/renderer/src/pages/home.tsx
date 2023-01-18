import Head from "next/head";
import React from "react";

import { increment, useAppDispatch, useAppSelector } from "$store";
import { trpc } from "$trpc";

function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
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
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <span className="text-lg mt-4">This comes from trpc server: </span>
            <span className="text-lg font-bold">{hello.data.greeting}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg mt-4">This comes from redux: </span>
            <span className="text-lg font-bold">{count}</span>
            <button className="btn-blue" onClick={() => dispatch(increment())}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

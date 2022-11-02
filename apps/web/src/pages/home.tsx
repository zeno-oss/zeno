import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { trpc } from '../utils/trpc';

function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Head>
        <title>TERNER</title>
      </Head>
      <div className="flex h-[100vh] items-center justify-center flex-col text-2xl">
        <span>Greetings from TERNER 💕 </span>
        <span className="text-lg mt-4">This comes from the server:</span>
        <span className="text-lg font-bold">{hello.data.greeting}</span>
      </div>
      <div className="mt-4 w-full flex-wrap flex justify-center">
        <Link href="/next">
          <a className="btn-blue">Go to next page</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;

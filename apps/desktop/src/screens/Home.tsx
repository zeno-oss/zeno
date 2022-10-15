import React from "react";
import { trpc } from "../utils/trpc";

const Home = () => {
  const hello = trpc.example.useQuery();
  if (!hello.data) return <h2>Loading...</h2>;

  return <h2>{hello.data.message}</h2>;
};

export default Home;

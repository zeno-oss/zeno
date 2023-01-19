import Constants from "expo-constants";
import { useState } from "react";
import { SafeAreaView } from "react-native";

import { api } from "$trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import Home from "./screens/Home";
const { manifest } = Constants;
const localhost = `http://${manifest!.debuggerHost?.split(":").shift()}:3000`;

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${localhost}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <Home />
        </SafeAreaView>
      </QueryClientProvider>
    </api.Provider>
  );
};

export default App;

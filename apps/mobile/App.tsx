import Constants from "expo-constants";
import { useState } from "react";
import { SafeAreaView } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import { Provider } from "store";
import Home from "./screens/Home";
import { trpc } from "./utils/trpc";

const { manifest } = Constants;
const localhost = `http://${manifest!.debuggerHost?.split(":").shift()}:8888`;

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${localhost}/api/trpc`,
        }),
      ],
    }),
  );
  return (
    <Provider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1 }}>
            <Home />
          </SafeAreaView>
        </QueryClientProvider>
      </trpc.Provider>
    </Provider>
  );
};

export default App;

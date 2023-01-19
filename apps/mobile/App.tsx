import Constants from "expo-constants";
import { useState } from "react";
import { SafeAreaView } from "react-native";

import { api } from "$trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import superjson from "superjson";
import colors from "tailwindcss/colors";
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
        <LinearGradient
          colors={[colors.purple[600], colors.purple[900]]}
          className="h-[100vh]"
        >
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Home />
          </SafeAreaView>
        </LinearGradient>
      </QueryClientProvider>
    </api.Provider>
  );
};

export default App;

import Constants from "expo-constants";
import { useState } from "react";

import { api } from "$trpc";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { StatusBar } from "expo-status-bar";
import superjson from "superjson";
import { NavigatorParamList } from "types";
import StackNavigator from "./navigation/StackNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigatorParamList {}
  }
}

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
        <StatusBar style="light" />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </api.Provider>
  );
};

export default App;

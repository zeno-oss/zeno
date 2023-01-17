import Constants from "expo-constants";
import { useState } from "react";
import { SafeAreaView } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import { store } from "$store";
import { trpc } from "$trpc";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./screens/Home";

let persistor = persistStore(store);

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1 }}>
              <Home />
            </SafeAreaView>
          </QueryClientProvider>
        </trpc.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;

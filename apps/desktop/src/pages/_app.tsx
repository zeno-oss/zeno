import { api } from "$trpc";
import type { AppProps } from "next/app";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "$store";
import { Provider } from "react-redux";
import "../globals.css";

let persistor = persistStore(store);

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default api.withTRPC(MyApp);

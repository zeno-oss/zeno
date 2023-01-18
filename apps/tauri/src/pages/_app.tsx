import type { AppProps } from "next/app";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { trpc } from "../utils/trpc";

import { Provider } from "react-redux";
import "../App.css";
import "../style.css";
import { store } from "../utils/store";

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

export default trpc.withTRPC(MyApp);

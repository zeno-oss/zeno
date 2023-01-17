import type { AppType } from "next/app";
import "../styles/globals.css";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../utils/store";
import { trpc } from "../utils/trpc";

let persistor = persistStore(store);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default trpc.withTRPC(MyApp);

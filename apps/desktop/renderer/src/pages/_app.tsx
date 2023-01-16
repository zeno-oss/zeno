import type { AppType } from "next/app";
import "../styles/globals.css";

import { Provider } from "store";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

export default trpc.withTRPC(MyApp);

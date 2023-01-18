import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import type { AppRouter } from "server";
import superjson from "superjson";

function getBaseUrl() {
  // assume localhost
  return `http://localhost:8888`;
}
console.log("getBaseUrl()", getBaseUrl());

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
          fetch(url, options) {
            return fetch(url, {
              ...options,
            });
          },
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});
// => { useQuery: ..., useMutation: ...}

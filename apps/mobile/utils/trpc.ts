import { createTRPCReact } from "@trpc/react";
import type { AppRouter } from "server/src/routers";

export const trpc = createTRPCReact<AppRouter>();

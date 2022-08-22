import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../../../../server/src/trpc/routers';

export const trpc = createReactQueryHooks<AppRouter>();

import { z } from 'zod';

///@ts-ignore
export const NestedIntFilterObjectSchema = z.object({
  equals: z.number()?.optional(),
  in: z.array(z.number()),
  notIn: z.array(z.number()),
  lt: z.number()?.optional(),
  lte: z.number()?.optional(),
  gt: z.number()?.optional(),
  gte: z.number()?.optional(),
  not: z
    .union([z.number(), z.lazy(() => NestedIntFilterObjectSchema)])
    ?.optional(),
});

import { z } from 'zod';

///@ts-ignore
export const NestedStringFilterObjectSchema = z.object({
  equals: z.string()?.optional(),
  in: z.array(z.string()),
  notIn: z.array(z.string()),
  lt: z.string()?.optional(),
  lte: z.string()?.optional(),
  gt: z.string()?.optional(),
  gte: z.string()?.optional(),
  contains: z.string()?.optional(),
  startsWith: z.string()?.optional(),
  endsWith: z.string()?.optional(),
  not: z
    .union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)])
    ?.optional(),
});

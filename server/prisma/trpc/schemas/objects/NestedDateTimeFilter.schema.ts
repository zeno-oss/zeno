import { z } from 'zod';

///@ts-ignore
export const NestedDateTimeFilterObjectSchema = z.object({
  equals: z.date()?.optional(),
  in: z.array(z.date()),
  notIn: z.array(z.date()),
  lt: z.date()?.optional(),
  lte: z.date()?.optional(),
  gt: z.date()?.optional(),
  gte: z.date()?.optional(),
  not: z
    .union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)])
    ?.optional(),
});

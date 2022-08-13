import { z } from 'zod';
import { NestedDateTimeWithAggregatesFilterObjectSchema } from './NestedDateTimeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema';

///@ts-ignore
export const DateTimeWithAggregatesFilterObjectSchema = z.object({
  equals: z.date()?.optional(),
  in: z.array(z.date()),
  notIn: z.array(z.date()),
  lt: z.date()?.optional(),
  lte: z.date()?.optional(),
  gt: z.date()?.optional(),
  gte: z.date()?.optional(),
  not: z
    .union([z.date(), NestedDateTimeWithAggregatesFilterObjectSchema])
    ?.optional(),
  _count: NestedIntFilterObjectSchema?.optional(),
  _min: NestedDateTimeFilterObjectSchema?.optional(),
  _max: NestedDateTimeFilterObjectSchema?.optional(),
});

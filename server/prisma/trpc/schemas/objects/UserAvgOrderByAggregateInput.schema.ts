import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserAvgOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
});

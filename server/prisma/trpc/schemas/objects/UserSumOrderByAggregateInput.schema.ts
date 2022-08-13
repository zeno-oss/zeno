import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

export const UserSumOrderByAggregateInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
});

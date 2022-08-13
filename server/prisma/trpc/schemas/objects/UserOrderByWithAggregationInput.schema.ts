import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserCountOrderByAggregateInputObjectSchema } from './UserCountOrderByAggregateInput.schema';
import { UserAvgOrderByAggregateInputObjectSchema } from './UserAvgOrderByAggregateInput.schema';
import { UserMaxOrderByAggregateInputObjectSchema } from './UserMaxOrderByAggregateInput.schema';
import { UserMinOrderByAggregateInputObjectSchema } from './UserMinOrderByAggregateInput.schema';
import { UserSumOrderByAggregateInputObjectSchema } from './UserSumOrderByAggregateInput.schema';

export const UserOrderByWithAggregationInputObjectSchema = z.object({
  id: SortOrderSchema?.optional(),
  createdAt: SortOrderSchema?.optional(),
  username: SortOrderSchema?.optional(),
  password: SortOrderSchema?.optional(),
  email: SortOrderSchema?.optional(),
  googleId: SortOrderSchema?.optional(),
  _count: UserCountOrderByAggregateInputObjectSchema?.optional(),
  _avg: UserAvgOrderByAggregateInputObjectSchema?.optional(),
  _max: UserMaxOrderByAggregateInputObjectSchema?.optional(),
  _min: UserMinOrderByAggregateInputObjectSchema?.optional(),
  _sum: UserSumOrderByAggregateInputObjectSchema?.optional(),
});

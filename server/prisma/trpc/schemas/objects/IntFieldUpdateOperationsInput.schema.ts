import { z } from 'zod';

export const IntFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.number()?.optional(),
  increment: z.number()?.optional(),
  decrement: z.number()?.optional(),
  multiply: z.number()?.optional(),
  divide: z.number()?.optional(),
});

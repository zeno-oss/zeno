import { z } from 'zod';

export const DateTimeFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.date()?.optional(),
});

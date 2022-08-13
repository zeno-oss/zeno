import { z } from 'zod';

export const StringFieldUpdateOperationsInputObjectSchema = z.object({
  set: z.string()?.optional(),
});

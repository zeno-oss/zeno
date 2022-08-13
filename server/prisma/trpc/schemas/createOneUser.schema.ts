import { z } from 'zod';
import { UserCreateInputObjectSchema } from './objects/UserCreateInput.schema';

export const UserCreateSchema = z.object({ data: UserCreateInputObjectSchema });

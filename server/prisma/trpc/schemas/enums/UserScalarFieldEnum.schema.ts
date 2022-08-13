import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'username',
  'password',
  'email',
  'googleId',
]);

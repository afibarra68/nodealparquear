import { z } from 'zod';

const nodeEnv = z.enum(['development', 'production', 'test']);

export const rootEnvSchema = z.object({
  NODE_ENV: nodeEnv.optional().default('development'),
  PORT: z.coerce.number().int().positive().optional().default(3000),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
});

export type RootEnv = z.infer<typeof rootEnvSchema>;

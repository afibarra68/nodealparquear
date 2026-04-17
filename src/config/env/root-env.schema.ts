import { z } from 'zod';

const nodeEnv = z.enum(['development', 'production', 'test']);

export const rootEnvSchema = z.object({
  NODE_ENV: nodeEnv.optional().default('development'),
  PORT: z.coerce.number().int().positive().optional().default(4001),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  JWT_SECRET: z
    .string()
    .min(16, 'JWT_SECRET must be at least 16 characters')
    .optional()
    .default('dev-only-change-in-prod-16chars'),
  /** Segundos hasta expiración del access token (p. ej. 28800 = 8h). */
  JWT_EXPIRES_SEC: z.coerce.number().int().positive().optional().default(28800),
});

export type RootEnv = z.infer<typeof rootEnvSchema>;

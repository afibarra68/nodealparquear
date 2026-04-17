import { rootEnvSchema } from './root-env.schema';

export class EnvValidation {
  validate(config: Record<string, unknown>): Record<string, unknown> {
    const parsed = rootEnvSchema.safeParse(config);
    if (!parsed.success) {
      const detail = parsed.error.issues
        .map((i) => `${i.path.join('.')}: ${i.message}`)
        .join('; ');
      throw new Error(`Invalid environment: ${detail}`);
    }
    return parsed.data;
  }
}

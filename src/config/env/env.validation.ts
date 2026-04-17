import { rootEnvSchema } from './root-env.schema';

export class EnvValidation {
  validate(config: Record<string, unknown>): Record<string, unknown> {
    const parsed = rootEnvSchema.safeParse(config);
    if (!parsed.success) {
      const detail = parsed.error.issues
        .map((i) => `${i.path.join('.')}: ${i.message}`)
        .join('; ');
      const hint = parsed.error.issues.some((i) =>
        i.path.join('.').includes('DATABASE_URL'),
      )
        ? ' Creá un archivo `.env` en la raíz de `nodealparquear` (podés partir de `.env.example`) y definí `DATABASE_URL` con tu cadena PostgreSQL.'
        : '';
      throw new Error(`Invalid environment: ${detail}.${hint}`);
    }
    return parsed.data;
  }
}

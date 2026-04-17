import type { AuthUserRecord } from '../../domain/auth-user.record';

/** Puerto: lectura/actualización de credenciales para auth (implementación Prisma u otra). */
export abstract class AuthUserReadPort {
  abstract findByUsername(username: string): Promise<AuthUserRecord | null>;

  abstract findById(id: number): Promise<AuthUserRecord | null>;

  abstract updatePasswordHash(userId: number, newHash: string): Promise<void>;
}

/**
 * Puerto hacia usuarios en sistemas legacy (Java / otros HTTP).
 * Clase abstracta para inyección por token de clase en Nest.
 */
export abstract class LegacyUsersGateway {
  abstract resolveLoginIdentity(
    login: string,
  ): Promise<{ externalUserId: string } | null>;
}

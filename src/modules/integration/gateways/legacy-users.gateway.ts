export abstract class LegacyUsersGateway {
  abstract findLegacyUserById(id: string): Promise<unknown | null>;
}

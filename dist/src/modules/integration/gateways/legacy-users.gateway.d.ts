export declare abstract class LegacyUsersGateway {
    abstract resolveLoginIdentity(login: string): Promise<{
        externalUserId: string;
    } | null>;
}

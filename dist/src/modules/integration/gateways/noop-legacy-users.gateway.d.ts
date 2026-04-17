import { LegacyUsersGateway } from './legacy-users.gateway';
export declare class NoopLegacyUsersGateway extends LegacyUsersGateway {
    resolveLoginIdentity(): Promise<{
        externalUserId: string;
    } | null>;
}

import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class AuthApplicationService {
    private readonly migration;
    constructor(migration: UnmigratedFeaturePolicy);
    login(): never;
    loginSell(): never;
    validateToken(): never;
    changePassword(): never;
    logout(): void;
}

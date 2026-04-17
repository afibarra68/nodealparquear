import { AuthApplicationService } from '../application/auth.application.service';
export declare class AuthPresentationController {
    private readonly authApplication;
    constructor(authApplication: AuthApplicationService);
    login(): never;
    loginSell(): never;
    validateToken(): never;
    changePassword(): never;
    logout(): void;
}

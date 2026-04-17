import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export type ApiErrorBody = {
    statusCode: number;
    readableMsg: string;
    code: string;
    path: string;
    timestamp: string;
};
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: unknown, host: ArgumentsHost): void;
    private resolve;
    private static formatHttpResponseMessage;
}

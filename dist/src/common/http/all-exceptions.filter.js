"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    logger = new common_1.Logger(AllExceptionsFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const { statusCode, readableMsg, code } = this.resolve(exception);
        if (Number(statusCode) >= 500) {
            this.logger.error(readableMsg, exception instanceof Error ? exception.stack : undefined);
        }
        const body = {
            statusCode,
            readableMsg,
            code,
            path: request.url,
            timestamp: new Date().toISOString(),
        };
        response.status(statusCode).json(body);
    }
    resolve(exception) {
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const res = exception.getResponse();
            const readableMsg = AllExceptionsFilter_1.formatHttpResponseMessage(res, exception.message);
            return {
                statusCode: status,
                readableMsg,
                code: `HTTP_${status}`,
            };
        }
        if (exception instanceof Error) {
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                readableMsg: 'Internal server error',
                code: 'INTERNAL_ERROR',
            };
        }
        return {
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            readableMsg: 'Internal server error',
            code: 'UNKNOWN_ERROR',
        };
    }
    static formatHttpResponseMessage(res, fallback) {
        if (typeof res === 'string') {
            return res;
        }
        if (typeof res === 'object' && res !== null && 'message' in res) {
            const msg = res.message;
            if (Array.isArray(msg)) {
                return msg.map(String).join('; ');
            }
            if (typeof msg === 'string') {
                return msg;
            }
        }
        return fallback;
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=all-exceptions.filter.js.map
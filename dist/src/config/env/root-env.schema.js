"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootEnvSchema = void 0;
const zod_1 = require("zod");
const nodeEnv = zod_1.z.enum(['development', 'production', 'test']);
exports.rootEnvSchema = zod_1.z.object({
    NODE_ENV: nodeEnv.optional().default('development'),
    PORT: zod_1.z.coerce.number().int().positive().optional().default(3000),
    DATABASE_URL: zod_1.z.string().min(1, 'DATABASE_URL is required'),
});
//# sourceMappingURL=root-env.schema.js.map
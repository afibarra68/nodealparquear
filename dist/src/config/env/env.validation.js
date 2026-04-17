"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvValidation = void 0;
const root_env_schema_1 = require("./root-env.schema");
class EnvValidation {
    validate(config) {
        const parsed = root_env_schema_1.rootEnvSchema.safeParse(config);
        if (!parsed.success) {
            const detail = parsed.error.issues
                .map((i) => `${i.path.join('.')}: ${i.message}`)
                .join('; ');
            throw new Error(`Invalid environment: ${detail}`);
        }
        return parsed.data;
    }
}
exports.EnvValidation = EnvValidation;
//# sourceMappingURL=env.validation.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootEnvConfigAdapter = void 0;
const env_validation_1 = require("./env.validation");
class RootEnvConfigAdapter {
    static validate(config) {
        return new env_validation_1.EnvValidation().validate(config);
    }
}
exports.RootEnvConfigAdapter = RootEnvConfigAdapter;
//# sourceMappingURL=root-env-config.adapter.js.map
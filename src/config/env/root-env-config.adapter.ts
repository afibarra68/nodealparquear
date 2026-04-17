import { EnvValidation } from './env.validation';

export class RootEnvConfigAdapter {
  static validate(
    this: void,
    config: Record<string, unknown>,
  ): Record<string, unknown> {
    return new EnvValidation().validate(config);
  }
}

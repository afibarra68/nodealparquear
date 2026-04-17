import { Global, Module } from '@nestjs/common';
import { UnmigratedFeaturePolicy } from './unmigrated-feature.policy';

@Global()
@Module({
  providers: [UnmigratedFeaturePolicy],
  exports: [UnmigratedFeaturePolicy],
})
export class MigrationPolicyModule {}

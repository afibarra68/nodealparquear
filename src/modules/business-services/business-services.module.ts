import { Module } from '@nestjs/common';
import { BusinessServicesPresentationController } from './presentation/business-services.presentation.controller';

@Module({
  controllers: [BusinessServicesPresentationController],
})
export class BusinessServicesModule {}

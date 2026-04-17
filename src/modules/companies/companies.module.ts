import { Module } from '@nestjs/common';
import { CompaniesPresentationController } from './presentation/companies.presentation.controller';
import { CompanyBusinessServicesPresentationController } from './presentation/company-business-services.presentation.controller';
import { CompanyShiftConfigsPresentationController } from './presentation/company-shift-configs.presentation.controller';

@Module({
  controllers: [CompaniesPresentationController, CompanyBusinessServicesPresentationController, CompanyShiftConfigsPresentationController],
})
export class CompaniesModule {}

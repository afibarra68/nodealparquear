import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './common/http/all-exceptions.filter';
import { ApplicationValidationPipe } from './common/http/application-validation.pipe';
import { MigrationPolicyModule } from './common/migration/migration-policy.module';
import { RootEnvConfigAdapter } from './config/env/root-env-config.adapter';
import { HealthModule } from './infrastructure/health/health.module';
import { MetricsModule } from './infrastructure/metrics/metrics.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { BillingModule } from './modules/billing/billing.module';
import { BusinessServicesModule } from './modules/business-services/business-services.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { ClientsModule } from './modules/clients/clients.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { IntegrationModule } from './modules/integration/integration.module';
import { PosModule } from './modules/pos/pos.module';
import { PrintersModule } from './modules/printers/printers.module';
import { ShiftsModule } from './modules/shifts/shifts.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MigrationPolicyModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: RootEnvConfigAdapter.validate,
    }),
    PrismaModule,
    HealthModule,
    MetricsModule,
    AuthModule,
    UsersModule,
    CompaniesModule,
    CatalogModule,
    ClientsModule,
    TransactionsModule,
    PosModule,
    ShiftsModule,
    PrintersModule,
    BillingModule,
    BusinessServicesModule,
    IntegrationModule,
  ],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_PIPE, useClass: ApplicationValidationPipe },
  ],
})
export class AppModule {}

/**
 * Genera controladores de paridad (501 MIGRATION_PENDING) alineados con
 * @RequestMapping del monolito Java (parking-app usersMs controllers).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

/** @type {{ module: string; file: string; className: string; route: string }[]} */
const stubs = [
  { module: 'catalog', file: 'countries.presentation.controller.ts', className: 'CountriesPresentationController', route: 'countries' },
  { module: 'catalog', file: 'enums-resource.presentation.controller.ts', className: 'EnumsResourcePresentationController', route: 'enums' },
  { module: 'catalog', file: 'tipo-vehiculo.presentation.controller.ts', className: 'TipoVehiculoPresentationController', route: 'enum' },
  { module: 'catalog', file: 'vehicle-capacities.presentation.controller.ts', className: 'VehicleCapacitiesPresentationController', route: 'vehicle-capacities' },
  { module: 'clients', file: 'client.presentation.controller.ts', className: 'ClientPresentationController', route: 'client' },
  { module: 'clients', file: 'destination-client.presentation.controller.ts', className: 'DestinationClientPresentationController', route: 'destination-client' },
  { module: 'companies', file: 'companies.presentation.controller.ts', className: 'CompaniesPresentationController', route: 'companies' },
  { module: 'companies', file: 'company-business-services.presentation.controller.ts', className: 'CompanyBusinessServicesPresentationController', route: 'company-business-services' },
  { module: 'companies', file: 'company-shift-configs.presentation.controller.ts', className: 'CompanyShiftConfigsPresentationController', route: 'company-shift-configs' },
  { module: 'users', file: 'users.presentation.controller.ts', className: 'UsersPresentationController', route: 'users' },
  { module: 'users', file: 'user-roles.presentation.controller.ts', className: 'UserRolesPresentationController', route: 'user_role' },
  { module: 'transactions', file: 'open-transactions.presentation.controller.ts', className: 'OpenTransactionsPresentationController', route: 'open-transactions' },
  { module: 'transactions', file: 'closed-transactions.presentation.controller.ts', className: 'ClosedTransactionsPresentationController', route: 'closed-transactions' },
  { module: 'pos', file: 'pos.presentation.controller.ts', className: 'PosPresentationController', route: 'pos' },
  { module: 'pos', file: 'cash-registers.presentation.controller.ts', className: 'CashRegistersPresentationController', route: 'cash-registers' },
  { module: 'shifts', file: 'shifts.presentation.controller.ts', className: 'ShiftsPresentationController', route: 'shifts' },
  { module: 'shifts', file: 'shift-types.presentation.controller.ts', className: 'ShiftTypesPresentationController', route: 'shift-types' },
  { module: 'shifts', file: 'shift-assignments.presentation.controller.ts', className: 'ShiftAssignmentsPresentationController', route: 'shift-assignments' },
  { module: 'shifts', file: 'shift-replacements.presentation.controller.ts', className: 'ShiftReplacementsPresentationController', route: 'shift-replacements' },
  { module: 'shifts', file: 'shift-connection-histories.presentation.controller.ts', className: 'ShiftConnectionHistoriesPresentationController', route: 'shift-connection-histories' },
  { module: 'shifts', file: 'shift-validation.presentation.controller.ts', className: 'ShiftValidationPresentationController', route: 'shift-validation' },
  { module: 'printers', file: 'printers.presentation.controller.ts', className: 'PrintersPresentationController', route: 'printers' },
  { module: 'printers', file: 'ticket-templates.presentation.controller.ts', className: 'TicketTemplatesPresentationController', route: 'ticket-templates' },
  { module: 'printers', file: 'user-printers.presentation.controller.ts', className: 'UserPrintersPresentationController', route: 'user-printers' },
  { module: 'printers', file: 'user-printer-types.presentation.controller.ts', className: 'UserPrinterTypesPresentationController', route: 'user-printer-types' },
  { module: 'printers', file: 'printer-consecutives.presentation.controller.ts', className: 'PrinterConsecutivesPresentationController', route: 'printer-consecutives' },
  { module: 'billing', file: 'billing-prices.presentation.controller.ts', className: 'BillingPricesPresentationController', route: 'billing-prices' },
  { module: 'billing', file: 'subscription-history-status.presentation.controller.ts', className: 'SubscriptionHistoryStatusPresentationController', route: 'subscription-history-status' },
  { module: 'business-services', file: 'business-services.presentation.controller.ts', className: 'BusinessServicesPresentationController', route: 'business-services' },
];

const controllerTemplate = (className, route) => `import { All, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

@Controller('${route}')
export class ${className} extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @All('*path')
  handle(@Req() req: Request): never {
    return this.reject(\`${className} \${req.method} \${req.originalUrl}\`);
  }
}
`;

for (const s of stubs) {
  const dir = path.join(root, 'src', 'modules', s.module, 'presentation');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, s.file), controllerTemplate(s.className, s.route), 'utf8');
}

const byModule = new Map();
for (const s of stubs) {
  if (!byModule.has(s.module)) byModule.set(s.module, []);
  byModule.get(s.module).push(s);
}

const pascal = (s) =>
  s
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

for (const [mod, list] of byModule) {
  const imports = list
    .map((s) => {
      const base = s.file.replace(/\.ts$/, '');
      return `import { ${s.className} } from './presentation/${base}';`;
    })
    .join('\n');

  const controllers = list.map((s) => s.className).join(', ');

  const moduleName = `${pascal(mod)}Module`;
  const moduleFile = `${mod}.module.ts`;
  const content = `import { Module } from '@nestjs/common';
${imports}

@Module({
  controllers: [${controllers}],
})
export class ${moduleName} {}
`;
  fs.writeFileSync(path.join(root, 'src', 'modules', mod, moduleFile), content, 'utf8');
}

console.log(`Emitted ${stubs.length} parity controllers + ${byModule.size} feature modules.`);

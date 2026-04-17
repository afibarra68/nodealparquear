import { PrismaService } from '../prisma/prisma.service';
export declare class HealthSnapshot {
    readonly ok: boolean;
    readonly database: 'up' | 'down';
    constructor(ok: boolean, database: 'up' | 'down');
}
export declare class HealthQueryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSnapshot(): Promise<HealthSnapshot>;
}

import { HealthQueryService, HealthSnapshot } from './health-query.service';
export declare class HealthController {
    private readonly healthQuery;
    constructor(healthQuery: HealthQueryService);
    getHealth(): Promise<{
        status: string;
        database: HealthSnapshot['database'];
    }>;
}

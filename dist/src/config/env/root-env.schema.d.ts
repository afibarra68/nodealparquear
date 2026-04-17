import { z } from 'zod';
export declare const rootEnvSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>>;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    DATABASE_URL: z.ZodString;
}, z.core.$strip>;
export type RootEnv = z.infer<typeof rootEnvSchema>;

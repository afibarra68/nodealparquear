import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

export class HttpServerBootstrap {
  private static readonly logger = new Logger(HttpServerBootstrap.name);

  static async start(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    HttpServerBootstrap.configureApplication(app);
    const port = HttpServerBootstrap.resolvePort();
    await app.listen(port);
    HttpServerBootstrap.logger.log(`Listening on port ${port}`);
  }

  private static configureApplication(app: INestApplication): void {
    app.enableShutdownHooks();
  }

  private static resolvePort(): number {
    const raw = process.env.PORT;
    if (raw === undefined || raw === '') {
      return 3000;
    }
    const n = Number.parseInt(raw, 10);
    return Number.isNaN(n) ? 3000 : n;
  }
}

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: any, __: any, next: () => void) {
    const method = req.method;
    const url = req.url;
    const log = `${method}: ${url}`;
    this.logger.log(log);
    next();
  }
}

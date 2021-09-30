import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloService {
  private readonly logger = new Logger(HelloService.name);

  getHello(): string {
    this.logger.debug('Hello world');
    return 'Hello World!';
  }
}

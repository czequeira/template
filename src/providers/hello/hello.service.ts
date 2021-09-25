import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloService {
  private readonly logger = new Logger(HelloService.name);

  getHello(): string {
    this.logger.log('Hello world');
    return 'Hello World!';
  }
}

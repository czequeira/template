import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { controllers } from './controllers';
import { LoggerMiddleware } from './middlewares';
import { modules } from './modules';
import { providers } from './providers';

@Module({
  imports: [...modules],
  controllers,
  providers,
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}

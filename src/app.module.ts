import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { providers } from './providers';

@Module({
  imports: [],
  controllers,
  providers,
})
export class AppModule {}

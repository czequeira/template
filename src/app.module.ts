import { Module } from '@nestjs/common';
import { controllers } from './controllers';
import { modules } from './modules';
import { providers } from './providers';

@Module({
  imports: [...modules],
  controllers,
  providers,
})
export class AppModule {}

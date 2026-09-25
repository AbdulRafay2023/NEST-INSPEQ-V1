import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database/database.module';
import { UsersController } from './api-v1/users/users.controller';
import { UsersService } from './api-v1/users/users.service';
import { ApiV1Module } from './api-v1/api-v1.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ApiV1Module,
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'nest-inspeq',
    }),
    DatabaseModule,
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailNotificationModule } from './email-notification/email-notification.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    EmailNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

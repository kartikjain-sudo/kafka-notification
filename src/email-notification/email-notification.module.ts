import { Module } from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service';
import { EmailNotificationController } from './email-notification.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.host,
        port: 465,
        secure: true,
        auth: {
          user: process.env.user,
          pass: process.env.pass,
        },
      },
      defaults: {
        from: 'kj@rapidinnovation.dev',
      },
    }),
  ],
  controllers: [EmailNotificationController],
  providers: [EmailNotificationService]
})
export class EmailNotificationModule {}

import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'REGISTRATION_SERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'registration',
    //         brokers: ['localhost:9092'],
    //       },
    //       consumer: {
    //         groupId: 'REGISTRATION_SERVICE_GROUP',
    //       },
    //     },
    //   },
    // ]),
    MailerModule.forRoot({
      transport: {
        host: process.env.host,
        port: 587,
        secure: false,
        auth: {
          user: process.env.user,
          pass: process.env.pass,
        },
      },
      defaults: {
        from: '"No Reply" <',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

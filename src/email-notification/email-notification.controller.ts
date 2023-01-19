import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EmailNotificationService } from './email-notification.service';

@Controller('email-notification')
export class EmailNotificationController {
  constructor(private readonly emailNotificationService: EmailNotificationService) {}

  @EventPattern('user_registered')
  async handleUserRegistered(data: any) {
    this.emailNotificationService.sendMail(data);
  }
}

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendMail(data: any): Promise<boolean> {
    const { email } = data;
    
    const mailOptions = {
      email,
      from: 'kj@rapidinnovation.dev',
      subject: 'Welcome mail',
      text: 'Welcome to the GHC',
  };
  
  await this.mailerService.sendMail(mailOptions);

    return true;
  }
}

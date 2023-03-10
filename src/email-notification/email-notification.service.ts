import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class EmailNotificationService {
    constructor(
        private readonly mailerService: MailerService,
    ) {}

    async sendMail(data: any) {
        const { email } = data;
        
        const mailOptions = {
          to: email,
          subject: 'Welcome mail',
          text: 'Welcome to the GHC',
      };
    
      console.log({mailOptions});
      
      
      const mailSer = await this.mailerService.sendMail(mailOptions);
    
        // return mailSer;
      }
}

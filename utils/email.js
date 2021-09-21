const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.firstname = user.name.split(' ')[0];
    this.emailFrom = `Akshat Gupta <${process.env.EMAIL_FROM}>`;
  }

  // SendGrid used to send Emails to actual Users Only in production mode
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      //sendgrid
      console.log('i reached here');

      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, message) {
    //Define mailOptions
    const mailOptions = {
      from: this.emailFrom,
      to: this.to,
      subject,
      text: message,
    };

    // if (process.env.NODE_ENV === 'production') {
    //   //sendgrid
    //   console.log('i reached here');
    //   await sgMail.send(mailOptions);
    //   return;
    // }

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome(msg) {
    this.send('Welcome to the FlipKart Grocery!!', msg);
  }

  async sendPasswordReset(msg) {
    this.send('Your password reset token (valid only for 10 min)', msg);
  }
};

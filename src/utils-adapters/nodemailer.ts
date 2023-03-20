import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { AddEmailAccount, IMessage } from '../domain/useCases/addEmail'

export class MailNodemailerProvider implements AddEmailAccount {
  private readonly transporter: Mail
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: String(process.env.EMAIL_HOSTNAME) ?? '',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
      }
    } as any)
  }

  async sendMail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}

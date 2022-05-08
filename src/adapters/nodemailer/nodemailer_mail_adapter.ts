import { MailAdapter, SendMailData } from "../mail_adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "485dda1a25ab80",
    pass: "5b824028e328ce"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Fernandes <user@gmail.com>',
      subject,
      html: body
    })
  }
}
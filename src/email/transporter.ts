import 'dotenv/config';
import nodemailer from 'nodemailer';
import environment from '../configs/env/environment';
import { log } from 'console';

let options = {
      host: 'smtp.resend.com', // <--- ISSO DEVE SER EXATAMENTE ASSIM
  port: 465,               // Porta do Resend
  secure: true,
  auth: {
    user: 'resend',        // <--- EXATAMENTE O TEXTO 'resend'
    pass: process.env.MAIL_RESEND_KEY   // <--- SUA CHAVE DE API DO RESEND (que começa com re_)
  }
}

log('4) Mailer: ', options.auth.user);

const transporter = nodemailer.createTransport(options);

export default transporter;
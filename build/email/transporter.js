"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const console_1 = require("console");
let options = {
    host: 'smtp.resend.com', // <--- ISSO DEVE SER EXATAMENTE ASSIM
    port: 465, // Porta do Resend
    secure: true,
    auth: {
        user: 'resend', // <--- EXATAMENTE O TEXTO 'resend'
        pass: process.env.MAIL_RESEND_KEY // <--- SUA CHAVE DE API DO RESEND (que começa com re_)
    }
};
(0, console_1.log)('4) Mailer: ', options.auth.user);
const transporter = nodemailer_1.default.createTransport(options);
exports.default = transporter;

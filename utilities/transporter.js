const nodemailer = require("nodemailer");

module.exports = async () => {
  return nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.SECURE ? Boolean(process.env.SECURE) : undefined, // apple icloud needs undefined here
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
};

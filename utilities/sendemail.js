const nodemailer = require("nodemailer");

module.exports = async (firstName, lastName, email, phone, message) => {
  try {
    // initialize and define the mode of transport
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // Defining the mail and sending it using the transport
    await transporter.sendMail({
      from: {
        name: process.env.SENDER_NAME,
        address: process.env.USER,
      },
      replyTo: email,
      to: process.env.USER,
      subject: "Kontakt",
      html: `
      ${firstName}&nbsp;${lastName}<br/>
      <p>Email:&nbsp;${email}</p>
      <p>Telefon:&nbsp;<a href="tel:${phone}">${phone}</a></p>
      <h2 style="color: #333">Nachricht</h2>
      <p style="color: #333">${message}</p>
      `,
    });
  } catch (error) {
    console.log(error.message);
    return response;
  }
};

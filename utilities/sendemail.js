const nodemailer = require("nodemailer");

module.exports = async (email, name, message) => {
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
        name: "Kontakt via Webpage",
        address: process.env.USER,
      },
      replyTo: email,
      to: "ralph.metel@gmail.com", // set customer email here
      subject: "Anfrage",
      html: `
      <strong>Name:</strong>&nbsp;${name}<br/>
      <strong>Email:</strong>&nbsp;${email}<br/>
      <strong>Nachricht:</strong><br/>${message}
      `,
    });
  } catch (error) {
    console.log(error.message);
    return response;
  }
};
